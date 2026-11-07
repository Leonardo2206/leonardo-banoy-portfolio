interface BrowserFrameProps {
  image: string;
  alt: string;
  urlLabel: string;
  priority?: boolean;
}

export function BrowserFrame({
  image,
  alt,
  urlLabel,
  priority = false,
}: BrowserFrameProps) {
  return (
    <div className="browser-frame">
      <div className="browser-frame__bar" aria-hidden="true">
        <span className="browser-frame__dots">
          <span />
          <span />
          <span />
        </span>
        <span className="browser-frame__url">{urlLabel}</span>
        <span className="browser-frame__handle" />
      </div>
      <div className="browser-frame__screen">
        <img
          src={image}
          alt={alt}
          width="1200"
          height="750"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    </div>
  );
}
