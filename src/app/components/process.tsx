import { motion } from 'motion/react';
import { ClipboardCheck, CalendarCheck, Sparkles } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: ClipboardCheck,
      number: '1',
      title: 'Request Estimate',
      description: 'Fill out our quick form or give us a call. We\'ll provide a free, no-obligation quote within 24 hours.',
    },
    {
      icon: CalendarCheck,
      number: '2',
      title: 'Schedule Service',
      description: 'Choose a time that works for you. We offer flexible scheduling including evenings and weekends.',
    },
    {
      icon: Sparkles,
      number: '3',
      title: 'Enjoy a Spotless Property',
      description: 'Sit back and relax while our professional team transforms your home. 100% satisfaction guaranteed.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to a cleaner, brighter home
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (desktop only) */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#4A9FF5] via-[#4A9FF5] to-[#4A9FF5]" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl p-8 shadow-lg"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#4A9FF5] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                <step.icon className="w-8 h-8 text-[#4A9FF5]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}