import { motion } from 'motion/react';

const ABOUT_IMAGE = '/images/About_Team.png';

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet Blake and Joey, the team behind Whirly Wash
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={ABOUT_IMAGE}
              alt="Blake and Joey, founders of Whirly Wash"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
              width={620}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 text-gray-700 leading-relaxed"
          >
            <p>
              At Whirly Wash, we believe a service business should be about more than clean windows; it should be about
              trust. We (Blake and Joey) started Whirly Wash as young entrepreneurs with old school values, and one simple
              goal in mind: to become the company that changes your perspective and raises the bar for home service
              contractors. We chose to skip the traditional path of college and instead bet on ourselves, building a
              business centered around integrity, craftsmanship, and genuine relationships.
            </p>
            <p>
              Every service we provide is built around professionalism, attention to detail, and treating every property
              with the same level of care we would want for our own. Our mission is to make maintenance easy for you, and
              we're committed to earning long-term relationships, not just completing one-time jobs. That means showing up
              when we say we will, communicating clearly, standing behind our work, and always looking for ways to exceed
              expectations.
            </p>
            <p>
              As a locally owned company, we take pride in serving the communities we live and work in. Every customer is a
              neighbor, and every project is an opportunity to strengthen the trust that allows local businesses to thrive.
            </p>
            <p>
              Our vision extends beyond simply cleaning homes. We want to build a company known for integrity,
              craftsmanship, and genuine service&mdash;a company customers confidently recommend to their friends, family,
              and neighbors for years to come. Thank you for choosing to support us on this journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
