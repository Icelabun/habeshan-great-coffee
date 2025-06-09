import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Products() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  const products = [
    {
      name: 'Ethiopian Yirgacheffe',
      description: 'Bright, floral, and wine-like with distinctive citrus notes. Our premium grade Yirgacheffe beans offer exceptional clarity and complexity.',
      grade: 'Grade 1 Specialty',
      altitude: 'Altitude: 1,700-2,200m',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      delay: 0,
    },
    {
      name: 'Ethiopian Sidamo',
      description: 'Full-bodied with rich chocolate and spice notes. Our Sidamo beans deliver consistent quality with a smooth, balanced finish.',
      grade: 'Grade 2 Premium',
      altitude: 'Altitude: 1,400-2,000m',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      delay: 0.2,
    },
    {
      name: 'Ethiopian Harrar',
      description: 'Bold and exotic with wine-like characteristics. Our Harrar beans offer a unique dry-processed flavor profile with fruity undertones.',
      grade: 'Grade 4 Commercial',
      altitude: 'Altitude: 1,500-2,100m',
      image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      delay: 0.4,
    },
  ];

  return (
    <section id="products" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-5xl font-serif font-bold coffee-dark mb-6">
            Premium <span className="coffee-gold">Coffee Varieties</span>
          </h3>
          <p className="text-xl warm-gray max-w-3xl mx-auto">
            Discover our exceptional collection of Ethiopian coffee beans, each with unique flavor profiles and characteristics that represent the finest of what Ethiopia has to offer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const { ref, isVisible } = useScrollReveal();
            
            return (
              <motion.div
                key={product.name}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: product.delay }}
              >
                <Card className="glass-morphism rounded-2xl p-8 hover-lift bg-white shadow-lg h-full">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={`${product.name} coffee beans`}
                      className="w-full h-48 object-cover rounded-xl mb-6"
                    />
                    <h4 className="text-2xl font-serif font-bold coffee-dark mb-3">
                      {product.name}
                    </h4>
                    <p className="warm-gray mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="coffee-gold font-semibold">{product.grade}</span>
                      <span className="text-sm warm-gray">{product.altitude}</span>
                    </div>
                    <Button className="w-full bg-[var(--coffee-gold)] text-white py-3 rounded-full font-semibold hover:bg-[var(--coffee-brown)] transition-colors duration-300">
                      Request Sample
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
