import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '1000+', label: 'Partner Farmers' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-5xl font-serif font-bold coffee-dark mb-6">
              Rooted in <span className="coffee-gold">Excellence</span>
            </h3>
            <p className="text-lg warm-gray mb-6 leading-relaxed">
              For over two decades, Habeshan Great Coffee has been Ethiopia's premier coffee export company, connecting international markets with the world's finest coffee beans from the birthplace of coffee.
            </p>
            <p className="text-lg warm-gray mb-8 leading-relaxed">
              Our commitment to sustainable farming practices, direct farmer relationships, and rigorous quality control has established us as a trusted partner for premium coffee importers worldwide.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={leftVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <div className="text-4xl font-bold coffee-gold mb-2">{stat.number}</div>
                  <div className="warm-gray">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hover-lift"
          >
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Ethiopian coffee farmers in plantation"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
