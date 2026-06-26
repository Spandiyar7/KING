import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type LuxuryLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
};

export function LuxuryLink({ href, children, className = "", download }: LuxuryLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={1.4} />
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={`luxury-link focus-ring ${className}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`luxury-link focus-ring ${className}`} download={download}>
      {content}
    </Link>
  );
}
