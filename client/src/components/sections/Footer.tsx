import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Our Coffee', id: 'products' },
    { label: 'Export Services', id: 'services' },
    { label: 'Quality Standards', id: 'quality' },
    { label: 'Contact', id: 'contact' },
  ];

  const supportLinks = [
    'Export Documentation',
    'Shipping Information',
    'Sample Requests',
    'Terms & Conditions',
    'Privacy Policy',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-[var(--coffee-dark)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="text-2xl font-serif font-bold mb-4">
              <span className="coffee-gold">Habeshan</span> Great Coffee
            </h5>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Ethiopia's premier coffee export company, connecting the world to the finest coffee beans from the birthplace of coffee.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-[var(--coffee-gold)]/20 hover:bg-[var(--coffee-gold)] hover:text-[var(--coffee-dark)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h6 className="font-semibold coffee-gold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-[var(--coffee-gold)] transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h6 className="font-semibold coffee-gold mb-4">Support</h6>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[var(--coffee-gold)] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-[var(--coffee-brown)] pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Habeshan Great Coffee. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-4 md:mt-0">
              Proudly exporting Ethiopian coffee excellence worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
