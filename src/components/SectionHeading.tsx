import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div className="section-heading__meta" aria-hidden="true">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__rule" />
        <span className="section-heading__label">{label}</span>
      </div>
      <div className="section-heading__content">
        <h2 id={id} className="section-heading__title">
          {title}
        </h2>
        {description ? (
          <p className="section-heading__description">{description}</p>
        ) : null}
      </div>
    </header>
  );
}
