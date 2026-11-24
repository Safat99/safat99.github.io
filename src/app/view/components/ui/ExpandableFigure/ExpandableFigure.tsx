import { useEffect, useRef } from "react";
import "./expandable-figure.css";

type Props = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  className?: string;
};

export default function ExpandableFigure({ src, alt, caption, width, height, className }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      document.body.classList.remove("image-dialog-open");
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && dialog.open) {
        event.preventDefault();
        dialog.close();
      }
    };

    dialog.addEventListener("close", onClose);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      dialog.removeEventListener("close", onClose);
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("image-dialog-open");
    };
  }, []);

  const openViewer = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    document.body.classList.add("image-dialog-open");
    dialog.showModal();
  };

  const closeViewer = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <figure className={className}>
        <button
          type="button"
          className="expandable-figure-trigger"
          onClick={openViewer}
          aria-label={`Enlarge figure: ${alt}`}
        >
          <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
          <span className="expandable-figure-action" aria-hidden="true">Expand ↗</span>
        </button>
        <figcaption>{caption}</figcaption>
      </figure>

      <dialog
        ref={dialogRef}
        className="expandable-figure-dialog"
        aria-label={`Expanded figure: ${alt}`}
        onCancel={(event) => {
          event.preventDefault();
          closeViewer();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeViewer();
        }}
      >
        <div className="expandable-figure-dialog-content">
          <button type="button" className="expandable-figure-close" onClick={closeViewer} aria-label="Close expanded figure">
            Close ×
          </button>
          <img src={src} alt={alt} width={width} height={height} />
          <p>{caption}</p>
        </div>
      </dialog>
    </>
  );
}
