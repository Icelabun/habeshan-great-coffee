import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Search, IdCard, Package, Truck, Phone } from 'lucide-react';

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const services = [
    {
      icon: Search,
      title: 'Sourcing & Selection',
      description: 'Direct relationships with farmers ensuring premium quality bean selection and sustainable practices.',
      delay: 0,
    },
    {
      icon: IdCard,
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification processes to meet international quality standards.',
      delay: 0.2,
    },
    {
      icon: Package,
      title: 'Custom Packaging',
      description: 'Flexible packaging options including private labeling and custom specifications.',
      delay: 0.4,
    },
    {
      icon: Truck,
      title: 'Global Logistics',
      description: 'Reliable shipping and logistics management ensuring timely delivery worldwide.',
      delay: 0.6,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-5xl font-serif font-bold coffee-dark mb-6">
            Export <span className="coffee-gold">Services</span>
          </h3>
          <p className="text-xl warm-gray max-w-3xl mx-auto">
            Comprehensive coffee export solutions tailored to meet your specific requirements, from sourcing to delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollReveal();
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                ref={ref}
                className="text-center hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: service.delay }}
              >
                <div className="bg-[var(--coffee-gold)]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="coffee-gold" />
                </div>
                <h4 className="text-xl font-semibold coffee-dark mb-4">{service.title}</h4>
                <p className="warm-gray leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          ref={ctaRef}
          className="bg-gradient-to-r from-[var(--coffee-dark)] to-[var(--coffee-brown)] rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-4xl font-serif font-bold mb-6">Ready to Start Your Coffee Journey?</h4>
              <p className="text-xl mb-8 opacity-90">
                Partner with us for reliable, high-quality Ethiopian coffee export services. Our team is ready to discuss your specific requirements and create a customized solution.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-[var(--coffee-gold)] text-[var(--coffee-dark)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 hover-lift"
              >
                <Phone className="mr-2" size={20} />
                Schedule Consultation
              </Button>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Coffee export packaging"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
