import GalleryHero from "../components/gallery/GalleryHero";
import VideoShowcase from "../components/gallery/VideoShowCase";
import GalleryGrid from "../components/gallery/GallertyGrid";

const Gallery = () => {
  return (
    <>
      <GalleryHero />
      <VideoShowcase />   {/* NEW VIDEO SECTION */}
      <GalleryGrid />
    </>
  );
};

export default Gallery;
