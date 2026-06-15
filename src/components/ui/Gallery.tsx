import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { asset } from "../../lib/asset";
import type { GalleryItem } from "../../types";

type Shot = GalleryItem;

/**
 * Project image gallery: a large main viewer with prev/next controls, a
 * thumbnail strip, and a click-to-expand lightbox. Keyboard accessible
 * (arrows + Escape). Images are shown contained so full screenshots are
 * never cropped.
 */
export function Gallery({ shots }: { shots: Shot[] }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const count = shots.length;

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, index, go]);

  if (count === 0) return null;
  const current = shots[index];

  const Arrows = ({ inLightbox = false }: { inLightbox?: boolean }) =>
    count > 1 ? (
      <>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(index - 1);
          }}
          aria-label="Previous image"
          className={`absolute left-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent ${
            inLightbox ? "bg-black/50" : "bg-bg/70 backdrop-blur"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(index + 1);
          }}
          aria-label="Next image"
          className={`absolute right-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent ${
            inLightbox ? "bg-black/50" : "bg-bg/70 backdrop-blur"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </>
    ) : null;

  return (
    <div>
      {/* Main viewer */}
      <div className="card relative overflow-hidden">
        {current.type === "video" ? (
          <div className="relative flex aspect-[16/10] items-center justify-center bg-black">
            <video
              key={current.src}
              src={asset(current.src)}
              poster={asset(current.poster)}
              controls
              preload="metadata"
              className="max-h-full max-w-full"
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="block w-full cursor-zoom-in"
            aria-label="Expand image"
          >
            <div className="relative flex aspect-[16/10] items-center justify-center bg-bg-soft">
              <img
                src={asset(current.src)}
                alt={current.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </button>
        )}
        <Arrows />
        <div className="font-mono pointer-events-none absolute bottom-2 right-3 rounded bg-bg/70 px-2 py-0.5 text-[0.7rem] text-ink-soft backdrop-blur">
          {index + 1} / {count}
        </div>
      </div>

      {/* Caption */}
      <p className="mt-2 text-center text-sm text-ink-mute">{current.alt}</p>

      {/* Thumbnails */}
      {count > 1 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={shot.type === "video" ? `Play video ${i + 1}` : `View image ${i + 1}`}
              aria-current={i === index}
              className={`relative h-14 w-20 overflow-hidden rounded-md border transition-colors ${
                i === index ? "border-accent" : "border-line hover:border-line-strong"
              }`}
            >
              {shot.type === "video" ? (
                <>
                  {shot.poster ? (
                    <img src={asset(shot.poster)} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <span className="block h-full w-full bg-surface-2" />
                  )}
                  <span className="absolute inset-0 grid place-items-center bg-black/40 text-ink">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                </>
              ) : (
                <img src={asset(shot.src)} alt="" className="h-full w-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-10"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-black/50 text-ink hover:border-accent hover:text-accent"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {current.type === "video" ? (
              <video
                src={asset(current.src)}
                poster={asset(current.poster)}
                controls
                autoPlay
                className="max-h-[85vh] w-auto rounded-lg"
              />
            ) : (
              <img
                src={asset(current.src)}
                alt={current.alt}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            )}
            <Arrows inLightbox />
            <p className="mt-3 text-center text-sm text-ink-soft">{current.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
