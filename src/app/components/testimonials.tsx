import { motion } from 'motion/react';
import { TestimonialCard } from './testimonial-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Stacia Clemens',
      location: 'Lake County, IL',
      rating: 5,
      review: 'The guys from Whirly Wash did an awesome job cleaning my windows, gutters and deck! They made everything look like new again. The windows were crystal clear when they were done with them. They were also very polite and professional. I would recommend to anyone in the area!',
      image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcyMjc5NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://share.google/GHTLKHPrqlHfkEDcO',
    },
    {
      name: 'Lyn Morton',
      location: 'Lake County, IL',
      rating: 5,
      review: 'Whirly Wash did an amazing job power washing our tall two story home. It was very clean!! They also did our concrete sidewalk and apron, which both turned out great as well. I would highly recommend them and we will definitely be using them again in the future.',
      image: 'https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MjIzMTcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://share.google/GHTLKHPrqlHfkEDcO',
    },
    {
      name: 'Tom Morrison',
      location: 'Lake County, IL',
      rating: 5,
      review: 'Guys were on time, courteous and professional. Did a great job cleaning our windows.',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjIzNDE1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://share.google/GHTLKHPrqlHfkEDcO',
    },
    {
      name: 'Pamela Chun-Ganske',
      location: 'Lake County, IL',
      rating: 5,
      review: 'Blake was thorough and fantastic! I will continue to use the services of Whirly Wash! Thank you so much Blake! Aloha and Mahalo, Drean and Pam',
      image: 'https://images.unsplash.com/photo-1758686254593-7c4cd55b2621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMHBvcnRyYWl0JTIwZnJpZW5kbHl8ZW58MXx8fHwxNzcyMzExNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://share.google/GHTLKHPrqlHfkEDcO',
    },
    {
      name: 'Alison Miller',
      location: 'Lake County, IL',
      rating: 5,
      review: 'My porch windows were in bad shape and Joey and Blake made them sparkle like new again! Thank you!',
      image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzcyMjc5NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://share.google/GHTLKHPrqlHfkEDcO',
    },
    {
      name: 'Stephen Palade',
      location: 'Lake County, IL',
      rating: 5,
      review: 'The Whirly Wash boys did a great job! We were happy with the price and work they did.',
      image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjMwNzI2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://share.google/GHTLKHPrqlHfkEDcO',
    },
    {
      name: 'Barbara Purcell',
      location: 'Lake County, IL',
      rating: 5,
      review: 'Blake and Joey did a thorough job cleaning my outside windows and screens. I recommend Whirly Wash!!!',
      image: 'https://images.unsplash.com/photo-1758686254593-7c4cd55b2621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMHBvcnRyYWl0JTIwZnJpZW5kbHl8ZW58MXx8fHwxNzcyMzExNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://share.google/GHTLKHPrqlHfkEDcO',
    },
    {
      name: 'Healthyums',
      location: 'Lake County, IL',
      rating: 5,
      review: 'Blake and Joey did a great job washing the windows. They are efficient, hardworking, and professional. Glad to support a small business, like Whirly Wash.',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjIzNDE1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      link: 'https://share.google/GHTLKHPrqlHfkEDcO',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Show multiple cards on larger screens
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: Single Card */}
          <div className="block lg:hidden">
            <TestimonialCard {...testimonials[currentIndex]} />
          </div>

          {/* Desktop: Three Cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#1F3C88]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}