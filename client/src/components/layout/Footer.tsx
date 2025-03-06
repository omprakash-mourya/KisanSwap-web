import { 
  SiWhatsapp, 
  SiYoutube, 
  SiInstagram, 
  SiFacebook, 
  SiX 
} from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  const socialLinks = [
    { icon: SiWhatsapp, href: "https://whatsapp.com", label: "WhatsApp" },
    { icon: SiYoutube, href: "https://youtube.com", label: "YouTube" },
    { icon: SiInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: SiFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: SiX, href: "https://x.com", label: "X (formerly Twitter)" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KisanSwap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}