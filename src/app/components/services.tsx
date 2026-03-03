import { motion } from 'motion/react';
import { ServiceCard } from './service-card';

// Service images: stored in public/images/, loaded via URL (same as logo/hero)
const windowCleaningImage = '/images/Exterior_window_cleaning.png';
const interiorWindowImage = '/images/Interior_window_cleaning.png';
const screenCleaningImage = '/images/screen_cleaning.png';
const skylightCleaningImage = '/images/Skylight_cleaning.png';
const powerWashingImage = '/images/Powerwashing.png';

// Fallback images for preview (will use your real images on Netlify)
const windowCleaningFallback = 'https://images.unsplash.com/photo-1761689502577-0013be84f1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyMHdpbmRvdyUyMGNsZWFuaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjQ3NTYxNnww&ixlib=rb-4.1.0&q=80&w=1080';
const interiorWindowFallback = 'https://images.unsplash.com/photo-1762500825301-569628303acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHdpbmRvdyUyMGNsZWFuaW5nJTIwaG9tZXxlbnwxfHx8fDE3NzI0NzU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const screenCleaningFallback = 'https://images.unsplash.com/photo-1607355298884-7663019fa61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBzY3JlZW4lMjBjbGVhbmluZyUyMG1lc2h8ZW58MXx8fHwxNzcyNDc1NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080';
const skylightCleaningFallback = 'https://images.unsplash.com/photo-1527270997612-014349a46e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lsaWdodCUyMHdpbmRvdyUyMGNsZWFuaW5nJTIwcm9vZnxlbnwxfHx8fDE3NzI0NzU2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const powerWashingFallback = 'https://images.unsplash.com/photo-1735399588751-3cdd6effeac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzc3VyZSUyMHdhc2hpbmclMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjQ3NTYyMXww&ixlib=rb-4.1.0&q=80&w=1080';

export function Services() {
  const services = [
    {
      icon: '',
      title: 'Exterior Window Cleaning',
      description: 'Sparkling clean windows that let the light shine through. We remove dirt, grime, and hard water stains.',
      image: windowCleaningImage,
      objectPosition: 'object-[center_65%]',
      fallbackImage: windowCleaningFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Interior Window Cleaning',
      description: 'Streak-free interior windows that make your home feel bright and welcoming.',
      image: interiorWindowImage,
      fallbackImage: interiorWindowFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Screen Cleaning',
      description: 'Professional screen cleaning and repair service to improve air flow and visibility.',
      image: screenCleaningImage,
      objectPosition: 'object-[center_65%]',
      fallbackImage: screenCleaningFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Skylight Cleaning',
      description: 'Safe and effective skylight cleaning that brightens up your entire home.',
      image: skylightCleaningImage,
      fallbackImage: skylightCleaningFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Power Washing',
      description: 'Transform your driveway, siding, and deck with our professional pressure washing services.',
      image: powerWashingImage,
      fallbackImage: powerWashingFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Holiday Lighting',
      description: 'Professional holiday lighting installation and removal. Make your home shine this season.',
      image: 'https://images.unsplash.com/photo-1765242115312-7a27f513ec03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpZGF5JTIwbGlnaHRpbmclMjBjaHJpc3RtYXMlMjBob3VzZXxlbnwxfHx8fDE3NzIzMDQ3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      scrollTarget: 'pricing-comparison',
    },
  ];

  return (
    <>
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
    </>
  );
}