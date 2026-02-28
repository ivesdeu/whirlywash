import { motion } from 'motion/react';
import { Users, Calendar, DollarSign, Home } from 'lucide-react';

export function WhyChoose() {
  const features = [
    {
      icon: Users,
      title: 'Owner-Operated Quality',
      description: 'Every job is personally supervised by the owner to ensure the highest standards of service and care.',
    },
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      description: 'Book online or call us. We work around your schedule with flexible appointment times.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Get a free, detailed estimate before any work begins.',
    },
    {
      icon: Home,
      title: 'Respect for Your Property',
      description: 'We treat your home like our own. Fully insured and bonded for your peace of mind.',
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-[#4A9FF5] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Whirly Wash?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the difference of working with Lake County's most trusted exterior cleaning company
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}