import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function ServiceArea() {
  const locations = [
    'Lake Forest',
    'Highland Park',
    'Libertyville',
    'Gurnee',
    'Vernon Hills',
    'Mundelein',
    'Deerfield',
    'Lincolnshire',
    'Buffalo Grove',
    'Lake Bluff',
    'Lake Zurich',
    'Wauconda',
  ];

  return (
    <section id="service-area" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Area</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proudly serving Lake County and surrounding areas
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#1F3C88] mx-auto mb-4" />
                  <p className="text-2xl font-bold text-[#1F3C88]">Lake County, IL</p>
                  <p className="text-gray-600 mt-2">& Surrounding Areas</p>
                </div>
              </div>
            </motion.div>

            {/* Cities List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cities We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[#1F3C88] rounded-full" />
                    <span>{location}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                Don't see your city listed? Give us a call! We may still be able to serve your area.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
