import GalleryHero from "../components/gallery/GalleryHero";
import VideoShowcase from "../components/gallery/VideoShowCase";
import GalleryGrid from "../components/gallery/GalleryGrid";

import ReadyToPlan from "../components/common/ReadyToPlan";

const Gallery = () => {
  return (
    <>
      <GalleryHero />
      <div className="pb-10">
        <VideoShowcase />
      </div>
      <GalleryGrid />
      <ReadyToPlan />
    </>
  );
};

export default Gallery;
