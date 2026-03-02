import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  label: string;
  title: string;
  description: string;
  features: PlanFeature[];
  footerNote: string;
  highlighted?: boolean;
}

export function FlagshipServices() {
  const plans: Plan[] = [
    {
      label: 'Primary Service',
      title: 'One-Time Service',
      description: 'Single visit exterior cleaning with no recurring benefits or loyalty incentives.',
      features: [
        { text: 'No discount', included: false },
        { text: 'Free RainBlock technology', included: false },
        { text: '7-day rain guarantee', included: false },
        { text: 'Free hard water removal (5 panes)', included: false },
      ],
      footerNote: 'No discount. No bonus benefits.',
    },
    {
      label: 'Primary Service',
      title: 'Bi-Annual Plan',
      description: 'Twice-per-year professional service with seasonal maintenance savings.',
      features: [
        { text: '$50 off service', included: true },
        { text: 'Free RainBlock technology', included: false },
        { text: '7-day rain guarantee', included: false },
        { text: 'Free hard water removal (5 panes)', included: false },
      ],
      footerNote: 'Discount included. No bonus services.',
    },
    {
      label: 'Primary Service',
      title: 'Quarterly Plan',
      description: 'Routine quarterly service designed for maximum protection, consistency, and premium maintenance benefits.',
      features: [
        { text: '$100 off service', included: true },
        { text: 'Free RainBlock technology', included: true },
        { text: '7-day rain guarantee', included: true },
        { text: 'Free hard water removal', included: true },
      ],
      footerNote: 'Discount + bonus benefits included.',
      highlighted: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Flagship Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium recurring service plans designed for long-term property care
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-white rounded-lg border-2 p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 ${
                plan.highlighted
                  ? 'border-[#1F3C88] shadow-md'
                  : 'border-gray-200 hover:border-[#1F3C88]'
              }`}
            >
              {/* Eyebrow Label */}
              <div className="inline-block px-3 py-1 bg-[#1F3C88]/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-[#1F3C88] uppercase tracking-wide">
                  {plan.label}
                </span>
              </div>

              {/* Main Heading */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-[#1F3C88]" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                        <X className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-gray-700 text-base' : 'text-gray-400 text-base line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer Note */}
              <p className={`text-sm mb-8 ${plan.highlighted ? 'text-[#1F3C88] font-semibold' : 'text-gray-500'}`}>
                {plan.footerNote}
              </p>

              {/* CTA Button */}
              <a href="#estimate">
                <Button 
                  className="w-full sm:w-auto bg-[#1F3C88] hover:bg-[#1F3C88]/90 text-white px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}