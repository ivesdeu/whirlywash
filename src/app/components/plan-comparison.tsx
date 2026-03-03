import { motion } from 'motion/react';
import { ServiceCard } from './service-card';

const pricingPlans = [
  {
    icon: '',
    title: 'ONE-TIME SERVICE',
    description: 'Single visit exterior cleaning with no recurring benefits or loyalty incentives.',
    badge: 'PRIMARY SERVICE',
    checklist: [
      { text: 'No discount', included: false },
      { text: 'No free RainBlock technology', included: false },
      { text: 'No 7-day rain guarantee', included: false },
      { text: 'No free hard water removal (5 panes)', included: false },
    ],
    footerNote: 'No discount. No bonus benefits.',
    highlighted: false,
    scrollTarget: 'estimate',
  },
  {
    icon: '',
    title: 'BI-ANNUAL PLAN',
    description: 'Twice-per-year professional service with seasonal maintenance savings.',
    badge: 'PRIMARY SERVICE',
    checklist: [
      { text: '$50 off service', included: true },
      { text: 'Free RainBlock technology not included', included: false },
      { text: '7-day rain guarantee not included', included: false },
      { text: 'Free hard water removal (5 panes)', included: false },
    ],
    footerNote: 'Discount included. No bonus services.',
    highlighted: false,
    scrollTarget: 'estimate',
  },
  {
    icon: '',
    title: 'QUARTERLY PLAN',
    description: 'Routine quarterly service designed for maximum protection, consistency, and premium maintenance benefits.',
    badge: 'PRIMARY SERVICE',
    checklist: [
      { text: '$100 off service', included: true },
      { text: 'Free RainBlock technology', included: true },
      { text: '7-day rain guarantee', included: true },
      { text: 'Free hard water removal', included: true },
    ],
    footerNote: 'Discount + bonus benefits included.',
    highlighted: true,
    scrollTarget: 'estimate',
  },
];

export function PlanComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          id="pricing-comparison"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Plans Comparison</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs and budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
