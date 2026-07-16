import { motion } from 'motion/react';
import { ServiceCard } from './service-card';

// Service images: stored in public/images/, loaded via URL (same as logo/hero)
const windowCleaningImage = '/images/Exterior_window_cleaning.png';
const interiorWindowImage = '/images/Interior_window_cleaning.png';
const screenCleaningImage = '/images/screen_cleaning.png';
const trackDetailingImage = '/images/Skylight_cleaning.png';
const gutterCleaningImage = '/images/Powerwashing.png';

// Fallback images for preview (will use your real images on Netlify)
const windowCleaningFallback = 'https://images.unsplash.com/photo-1761689502577-0013be84f1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyMHdpbmRvdyUyMGNsZWFuaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjQ3NTYxNnww&ixlib=rb-4.1.0&q=80&w=1080';
const interiorWindowFallback = 'https://images.unsplash.com/photo-1762500825301-569628303acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHdpbmRvdyUyMGNsZWFuaW5nJTIwaG9tZXxlbnwxfHx8fDE3NzI0NzU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const screenCleaningFallback = 'https://images.unsplash.com/photo-1607355298884-7663019fa61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBzY3JlZW4lMjBjbGVhbmluZyUyMG1lc2h8ZW58MXx8fHwxNzcyNDc1NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080';
const trackDetailingFallback = 'https://images.unsplash.com/photo-1527270997612-014349a46e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lsaWdodCUyMHdpbmRvdyUyMGNsZWFuaW5nJTIwcm9vZnxlbnwxfHx8fDE3NzI0NzU2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const gutterCleaningFallback = 'https://images.unsplash.com/photo-1735399588751-3cdd6effeac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzc3VyZSUyMHdhc2hpbmclMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjQ3NTYyMXww&ixlib=rb-4.1.0&q=80&w=1080';

export function Services() {
  const services = [
    {
      icon: '',
      title: 'Exterior Window Cleaning',
      description:
        'Remove dirt, grime, paint splatter, and buildup to restore crystal-clear windows, enhance curb appeal, and maximize natural light.',
      image: windowCleaningImage,
      objectPosition: 'object-[center_65%]',
      fallbackImage: windowCleaningFallback,
    },
    {
      icon: '',
      title: 'Interior Window Cleaning',
      description:
        'Remove dust, smudges, fingerprints, and everyday buildup for streak-free windows, brighter rooms, and a clearer view.',
      image: interiorWindowImage,
      fallbackImage: interiorWindowFallback,
    },
    {
      icon: '',
      title: 'Track Detailing',
      description:
        'Deep clean window tracks to remove dirt, pollen, and grime for smoother operation and a cleaner, better-maintained home.',
      image: trackDetailingImage,
      fallbackImage: trackDetailingFallback,
    },
    {
      icon: '',
      title: 'Screen Cleaning',
      description:
        'Remove dust, pollen, cobwebs, and debris to improve quality airflow, enhance your view, and help keep your home cleaner.',
      image: screenCleaningImage,
      objectPosition: 'object-[center_65%]',
      fallbackImage: screenCleaningFallback,
    },
    {
      icon: '',
      title: 'Gutter Cleaning',
      description:
        'Clear leaves, debris, and clogs to restore proper water flow and help protect your roof, foundation, and landscaping from water damage.',
      image: gutterCleaningImage,
      fallbackImage: gutterCleaningFallback,
      badge: 'Seasonal Service',
    },
    {
      icon: '',
      title: 'Holiday Lighting',
      description:
        'Professional holiday light installation, maintenance, and removal for a stress-free season. Includes a FREE custom design consultation and mock-up.',
      image:
        'https://images.unsplash.com/photo-1765242115312-7a27f513ec03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpZGF5JTIwbGlnaHRpbmclMjBjaHJpc3RtYXMlMjBob3VzZXxlbnwxfHx8fDE3NzIzMDQ3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Seasonal Service',
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
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
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
                <ServiceCard {...service} reserveBadgeSpace />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
