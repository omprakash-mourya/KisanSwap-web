import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Tractor } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 pl-4">
          <Tractor className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">KisanSwap</span>
        </Link>

        <div className="flex gap-6 ml-auto pr-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}