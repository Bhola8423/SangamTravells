import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://sangamtravells.com";
const OUTPUT_FILE = path.resolve(__dirname, '../public/sitemap.xml');

// Static routes
const routes = [
    '/',
    '/tours',
    '/services',
    '/taxi/ayodhya',
    '/hotels/ayodhya',
    '/about',
    '/contact',
    '/booking',
    '/terms',
    '/gallery'
];

// Helper to extract slugs from file content (simple regex approach to avoid TS compilation complexity)
function extractSlugs(filePath, slugKey = 'slug') {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const regex = new RegExp(`${slugKey}:\\s*["']([^"']+)["']`, 'g');
        const matches = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            matches.push(match[1]);
        }
        return matches;
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return [];
    }
}

// Get dynamic slugs
const tourSlugs = extractSlugs(path.resolve(__dirname, '../src/data/tours.ts'));
const seoPageSlugs = extractSlugs(path.resolve(__dirname, '../src/data/seoPages.ts'));
const destinationSlugs = extractSlugs(path.resolve(__dirname, '../src/data/destinations.ts'), 'id'); // Assuming id is used as param

// Combine all URLs
const allUrls = [
    ...routes,
    ...tourSlugs.map(slug => `/tours/${slug}`), // Note: Verify if route is /tours/:id or /tours/:slug. App.tsx says /tours/:id. Tours data has id and slug. Assuming id is used in Link. Ref: TourDetails uses id.
    ...seoPageSlugs.map(slug => `/info/${slug}`),
    ...destinationSlugs.map(slug => `/destination/${slug}`)
];

// Generate XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(OUTPUT_FILE, sitemap);
console.log(`Sitemap generated with ${allUrls.length} URLs at ${OUTPUT_FILE}`);
