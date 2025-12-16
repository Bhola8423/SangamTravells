interface Props {
  src: string;
  onClose: () => void;
}

const VideoModal: React.FC<Props> = ({ src, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl hover:scale-110 transition"
          aria-label="Close video"
        >
          ✕
        </button>

        {/* Video */}
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="w-full max-h-[80vh] rounded-xl shadow-2xl bg-black"
        />
      </div>
    </div>
  );
};

export default VideoModal;
