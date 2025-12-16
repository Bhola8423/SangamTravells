interface Props {
  image: string;
  onClose: () => void;
}

const GalleryLightbox: React.FC<Props> = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Preview"
        className="max-w-full max-h-full rounded-xl shadow-2xl"
      />
    </div>
  );
};

export default GalleryLightbox;
