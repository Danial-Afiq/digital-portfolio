import { useEffect } from "react";
import { X } from "lucide-react";
import { asset } from "../../lib/asset";

/** Full-screen single-image viewer. Closes on backdrop click or Escape. */
export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-black/50 text-ink hover:border-accent hover:text-accent"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={asset(src)}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] w-auto rounded-lg object-contain shadow-2xl"
      />
    </div>
  );
}
