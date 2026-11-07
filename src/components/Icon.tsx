export type IconName =
  | "arrow-right"
  | "arrow-up"
  | "arrow-up-right"
  | "check"
  | "close"
  | "code"
  | "copy"
  | "download"
  | "external"
  | "github"
  | "linkedin"
  | "mail"
  | "map-pin"
  | "menu";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const brandIcons = new Set<IconName>(["github", "linkedin"]);

export function Icon({ name, size = 18, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    focusable: "false",
    className,
  } as const;

  if (brandIcons.has(name)) {
    return (
      <svg {...common} fill="currentColor">
        {name === "github" ? (
          <path d="M12 .7a11.3 11.3 0 0 0-3.57 22.03c.57.1.78-.25.78-.55v-2.1c-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.2-1.27-5.2-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .95-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.17-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.68 5.33-5.21 5.62.41.35.77 1.04.77 2.1v3.12c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
        ) : (
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
        )}
      </svg>
    );
  }

  return (
    <svg
      {...common}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {name === "arrow-right" && (
        <>
          <path d="M4 12h15" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
      {name === "arrow-up" && (
        <>
          <path d="M12 20V5" />
          <path d="m6 11 6-6 6 6" />
        </>
      )}
      {name === "arrow-up-right" && (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      )}
      {name === "check" && <path d="m4.5 12.5 5 5 10-11" />}
      {name === "close" && (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </>
      )}
      {name === "code" && (
        <>
          <path d="m8.5 8.5-4 3.5 4 3.5" />
          <path d="m15.5 8.5 4 3.5-4 3.5" />
          <path d="m13.5 5-3 14" />
        </>
      )}
      {name === "copy" && (
        <>
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
        </>
      )}
      {name === "download" && (
        <>
          <path d="M12 4v11" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 20h14" />
        </>
      )}
      {name === "external" && (
        <>
          <path d="M14 4h6v6" />
          <path d="m20 4-9 9" />
          <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
        </>
      )}
      {name === "mail" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 7 8.5 6 8.5-6" />
        </>
      )}
      {name === "map-pin" && (
        <>
          <path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
      {name === "menu" && (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}
