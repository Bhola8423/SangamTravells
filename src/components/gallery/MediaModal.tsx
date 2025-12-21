import Modal from "react-modal";

interface Props {
  isOpen: boolean;
  type: "image" | "video";
  src: string;
  onClose: () => void;
}

const MediaModal: React.FC<Props> = ({ isOpen, type, src, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      overlayClassName="media-modal-overlay"
      className="media-modal-content"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute -top-10 right-0 text-white text-3xl hover:scale-110 transition"
        aria-label="Close"
      >
        ✕
      </button>

      {/* IMAGE */}
      {type === "image" && (
        <img
          src={src}
          alt="Preview"
          className="w-full max-h-[80vh] object-contain rounded-xl bg-black"
        />
      )}

      {/* VIDEO */}
      {type === "video" && (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="w-full max-h-[80vh] rounded-xl bg-black"
        />
      )}
    </Modal>
  );
};

export default MediaModal;
