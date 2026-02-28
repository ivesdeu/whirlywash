import { motion } from 'motion/react';
import { ServiceCard } from './service-card';

export function Services() {
  const services = [
    {
      icon: '🪟',
      title: 'Exterior Window Cleaning',
      description: 'Sparkling clean windows that let the light shine through. We remove dirt, grime, and hard water stains.',
      image: 'https://images.unsplash.com/photo-1771079258782-b7212c442141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHJlc2lkZW50aWFsJTIwd2luZG93cyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjMwNDc0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: '✨',
      title: 'Interior Window Cleaning',
      description: 'Streak-free interior windows that make your home feel bright and welcoming.',
      image: 'https://images.unsplash.com/photo-1771970472769-8038fd7309c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHdpbmRvd3MlMjBjbGVhbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIzMDQ3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: '🔲',
      title: 'Screen Cleaning',
      description: 'Professional screen cleaning and repair service to improve air flow and visibility.',
      image: 'https://images.unsplash.com/photo-1766943961756-1e3a9a3cb242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JlZW4lMjBjbGVhbmluZyUyMHNlcnZpY2V8ZW58MXx8fHwxNzcyMzA0NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: '🌤️',
      title: 'Skylight Cleaning',
      description: 'Safe and effective skylight cleaning that brightens up your entire home.',
      image: 'https://images.unsplash.com/photo-1709993608671-ce1420744fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lsaWdodCUyMHdpbmRvdyUyMGdsYXNzfGVufDF8fHx8MTc3MjMwNDc0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: '💧',
      title: 'Power Washing',
      description: 'Transform your driveway, siding, and deck with our professional pressure washing services.',
      image: 'https://images.unsplash.com/photo-1769788161278-8dc624a2d537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBjbGVhbmluZyUyMHNlcnZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMzA0NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: '🎄',
      title: 'Holiday Lighting',
      description: 'Professional holiday lighting installation and removal. Make your home shine this season.',
      image: 'https://images.unsplash.com/photo-1765242115312-7a27f513ec03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpZGF5JTIwbGlnaHRpbmclMjBjaHJpc3RtYXMlMjBob3VzZXxlbnwxfHx8fDE3NzIzMDQ3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive exterior cleaning services to make your home shine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
