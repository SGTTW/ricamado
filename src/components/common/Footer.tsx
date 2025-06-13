// src/components/common/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/61574643453053/",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://x.com/RicamadoUL",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
];

const FOOTER_LINKS = {
  Discover: [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "About Us", href: "/about" },
  ],
  Support: [
    { label: "Contact Us", href: "/contacts" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("subscribedEmails");
    if (stored) {
      setSubscribedEmails(JSON.parse(stored));
    }
  }, []);
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if email already subscribed locally
    if (subscribedEmails.includes(email.toLowerCase())) {
      toast.error("This email is already subscribed to our newsletter.", {
        position: "top-right",
        duration: 5000,
      });
      return;
    }

    setIsSubscribing(true);

    try {
      const response = await fetch("https://formspree.io/f/mblglrkq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "newsletter_subscription",
        }),
      });

      if (response.ok) {
        // Add email to subscribed list and save to localStorage
        const newSubscribedEmails = [...subscribedEmails, email.toLowerCase()];
        setSubscribedEmails(newSubscribedEmails);
        localStorage.setItem(
          "subscribedEmails",
          JSON.stringify(newSubscribedEmails)
        );

        setEmail("");
        toast.success("Successfully subscribed to our newsletter!", {
          position: "top-right",
          duration: 5000,
        });
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-right",
          duration: 5000,
        });
      }
    } catch {
      toast.error("Network error. Please check your connection.", {
        position: "top-right",
        duration: 5000,
      });
    } finally {
      setIsSubscribing(false);
    }
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Branding & Mission */}
          <div>
            <div className="flex items-center flex-shrink mb-2">
              <Image
                src="/images/logo/logo.png"
                alt="Ricamado"
                width={38}
                height={30}
                className="mr-1"
              />
              <h2 className="text-2xl font-bold text-blue-500 flex items-center h-[30px]">
                Ricamado
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming lives through intentional living spaces.
              {/* More than
              real estate—a pathway to your best self. */}
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>info@ricamado.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+234 803 2951 740</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-lg">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter & Social */}
          <div className="md:w-80 lg:w-auto">
            <h3 className="font-semibold mb-4 text-lg">Stay Connected</h3>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-300 mb-2">
                Join our community of purposeful living
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-3 py-2 mr-1  outline-none rounded-l-md bg-gray-800 text-white"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubscribing ? "..." : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Ricamado. All Rights Reserved. Crafted
            with purpose, designed for transformation.
          </p>
        </div>
      </div>
    </footer>
  );
}
