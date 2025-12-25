import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'product' | 'profile';
    structuredData?: Record<string, any> | Record<string, any>[];
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    structuredData
}) => {
    const siteTitle = "Sangam Tour & Travels";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
    const baseUrl = "https://sangamtravells.com"; // Replace with actual domain if different
    const fullUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : baseUrl;
    const fullImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/og-image.jpg`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
