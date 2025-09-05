export default function SpaceDialog({ open, message, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="animate-fadeIn neon-card bg-white/10 text-white rounded-2xl p-6 w-[90%] max-w-md">
        <p className="mb-5 text-center text-lg">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
