import { motion } from 'motion/react';
import { ServiceCard } from './service-card';
import windowCleaningImage from 'figma:asset/2bc2e546e3fa7ac717c02d833b99fdec7166aea5.png';
import interiorWindowImage from 'figma:asset/ae4c2b70749b41efb37b4aec776649aa6dd47718.png';
import screenCleaningImage from 'figma:asset/7027b1ad002627514ca6ca1d2e0249502dc53da7.png';
import skylightCleaningImage from 'figma:asset/28599dba92dd7aace354ca6fa32855e627a1d8ed.png';
import powerWashingImage from 'figma:asset/c8ea79bea63d8da910bb8fdff3767efc9f3ed2e3.png';

export function Services() {
  const services = [
    {
      icon: '🪟',
      title: 'Exterior Window Cleaning',
      description: 'Sparkling clean windows that let the light shine through. We remove dirt, grime, and hard water stains.',
      image: windowCleaningImage,
      objectPosition: 'object-[center_65%]',
    },
    {
      icon: '',
      title: 'Interior Window Cleaning',
      description: 'Streak-free interior windows that make your home feel bright and welcoming.',
      image: interiorWindowImage,
    },
    {
      icon: '',
      title: 'Screen Cleaning',
      description: 'Professional screen cleaning and repair service to improve air flow and visibility.',
      image: screenCleaningImage,
      objectPosition: 'object-[center_65%]',
    },
    {
      icon: '',
      title: 'Skylight Cleaning',
      description: 'Safe and effective skylight cleaning that brightens up your entire home.',
      image: skylightCleaningImage,
    },
    {
      icon: '',
      title: 'Power Washing',
      description: 'Transform your driveway, siding, and deck with our professional pressure washing services.',
      image: powerWashingImage,
    },
    {
      icon: '',
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