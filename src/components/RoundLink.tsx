import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RoundLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function RoundLink({ href, children, className = "" }: RoundLinkProps) {
  return (
    <Link href={href} className={`circle-link focus-ring ${className}`}>
      <span>{children}</span>
      <ArrowRight className="ml-1 h-5 w-5" strokeWidth={1.3} />
    </Link>
  );
}
