import { motion } from 'motion/react';
import { Star, Award, Home, ShieldCheck } from 'lucide-react';

export function SocialProof() {
  const stats = [
    {
      icon: Star,
      value: '5.0',
      label: 'Google Rating',
      subtext: '20+ Reviews',
    },
    {
      icon: Award,
      value: '2+',
      label: 'Years Experience',
      subtext: 'Trusted Local Business',
    },
    {
      icon: Home,
      value: '100+',
      label: 'Homes Serviced',
      subtext: 'In Lake County',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Satisfaction',
      subtext: 'Guaranteed.',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-[#1F3C88]" />
              </div>
              <div className="text-3xl font-bold text-[#1F3C88] mb-1">
                {stat.value}
              </div>
              <div className="text-gray-900 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}