import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Leaf, Handshake, Award, Shield } from 'lucide-react';

export default function Quality() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();
  const { ref: certsRef, isVisible: certsVisible } = useScrollReveal();

  const qualityChecks = [
    'Professional cupping and sensory evaluation',
    'Moisture content and water activity testing',
    'Physical defect analysis and grading',
    'Microbiological safety verification',
  ];

  const certifications = [
    {
      icon: Leaf,
      title: 'Organic Certified',
      subtitle: 'USDA & EU Organic Standards',
    },
    {
      icon: Handshake,
      title: 'Fair Trade',
      subtitle: 'Certified Fair Trade Partner',
    },
    {
      icon: Award,
      title: 'SCA Standards',
      subtitle: 'Specialty Coffee Association',
    },
    {
      icon: Shield,
      title: 'HACCP',
      subtitle: 'Food Safety Management',
    },
  ];

  return (
    <section id="quality" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-5xl font-serif font-bold coffee-dark mb-6">
            Quality <span className="coffee-gold">Standards</span>
          </h3>
          <p className="text-xl warm-gray max-w-3xl mx-auto">
            Our commitment to excellence is demonstrated through rigorous quality control processes and international certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hover-lift"
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional coffee cupping session"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-4xl font-serif font-bold coffee-dark mb-6">
              Rigorous Testing Process
            </h4>
            <p className="text-lg warm-gray mb-6 leading-relaxed">
              Every batch undergoes comprehensive quality evaluation including cupping sessions, moisture content analysis, and defect assessment to ensure consistent excellence.
            </p>
            <div className="space-y-4">
              {qualityChecks.map((check, index) => (
                <motion.div
                  key={check}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={rightVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <div className="bg-[var(--coffee-gold)] w-6 h-6 rounded-full flex items-center justify-center mr-4">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="warm-gray">{check}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={certsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={certsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <motion.div
                key={cert.title}
                className="bg-white rounded-2xl p-8 text-center hover-lift shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={certsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-[var(--coffee-gold)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="coffee-gold" />
                </div>
                <h5 className="font-semibold coffee-dark mb-2">{cert.title}</h5>
                <p className="text-sm warm-gray">{cert.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
