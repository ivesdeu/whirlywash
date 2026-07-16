import { motion } from 'motion/react';
import { ServiceCard } from './service-card';

const pricingPlans = [
  {
    icon: '',
    title: 'ONE-TIME SERVICE',
    description: 'Single visit for window cleaning services of your choice.',
    badge: undefined,
    checklist: [
      { text: 'Service plan discounts', included: false },
      { text: 'Standard scheduling', included: true },
      { text: 'Free hard water removal', included: false },
    ],
    highlighted: false,
    scrollTarget: 'estimate',
  },
  {
    icon: '',
    title: 'BI-ANNUAL PLAN',
    description:
      'Twice-per-year professional window cleaning service with seasonal maintenance savings.',
    badge: 'MOST POPULAR',
    checklist: [
      { text: '$50 off each visit', included: true },
      { text: 'Priority scheduling', included: true },
      { text: 'Bi-annual maintenance reminders', included: true },
      { text: 'Free hard water removal', included: false },
    ],
    highlighted: false,
    scrollTarget: 'estimate',
  },
  {
    icon: '',
    title: 'QUARTERLY PLAN',
    description:
      'Routine quarterly window cleaning service designed for maximum protection, consistency, and premium maintenance benefits.',
    badge: 'BEST VALUE',
    checklist: [
      { text: '$100 off each visit', included: true },
      { text: 'Priority scheduling', included: true },
      { text: 'Quarterly maintenance reminders', included: true },
      { text: 'Free hard water removal (up to 10 panes)', included: true },
      { text: '10% off select additional services', included: true },
    ],
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
          <h2 className="text-4xl font-bold text-gray-900">Service Plans</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl ring-2 ring-[#1F3C88]"
            >
              <ServiceCard
                {...plan}
                ctaLabel="Learn more"
                reserveBadgeSpace
                descriptionClassName="md:min-h-[112px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
