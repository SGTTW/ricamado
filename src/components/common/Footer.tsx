// src/components/common/Footer.tsx
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const SOCIAL_LINKS = [
  { 
    icon: Facebook, 
    href: 'https://facebook.com/ricamado',
    label: 'Facebook'
  },
  { 
    icon: Twitter, 
    href: 'https://twitter.com/ricamado',
    label: 'Twitter'
  },
  { 
    icon: Instagram, 
    href: 'https://instagram.com/ricamado',
    label: 'Instagram'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/company/ricamado',
    label: 'LinkedIn'
  }
];

const FOOTER_LINKS = {
  'Discover': [
    { label: 'Why Ricamado', href: '/why' },
    { label: 'Our Mission', href: '/about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Success Stories', href: '/stories' }
  ],
  'Support': [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Buyer\'s Guide', href: '/guide' },
    { label: 'Terms of Service', href: '/terms' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Branding & Mission */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Ricamado</h2>
            <p className="text-gray-300 mb-4">
              Transforming lives through intentional living spaces. 
              More than real estate—a pathway to your best self.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>hello@ricamado.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+234 (0) 123 456 7890</span>
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
          <div>
            <h3 className="font-semibold mb-4 text-lg">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-300 mb-2">
                Join our community of purposeful living
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white"
                />
                <button className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
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
            © {new Date().getFullYear()} Ricamado. All Rights Reserved.
            Crafted with purpose, designed for transformation.
          </p>
        </div>
      </div>
    </footer>
  );
}