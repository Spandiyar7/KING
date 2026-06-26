import Link from "next/link";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
};

export function PillLink({ href, children, className = "", download }: PillLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={`pill-link focus-ring ${className}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`pill-link focus-ring ${className}`} download={download}>
      {children}
    </Link>
  );
}
