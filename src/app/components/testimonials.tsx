import { motion } from 'motion/react';
import { TestimonialCard } from './testimonial-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Lake Forest, IL',
      rating: 5,
      review: 'Whirly Wash did an amazing job on our windows! They were professional, on time, and the results were incredible. Our windows haven\'t looked this good in years. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRpc2ZpZWQlMjBjdXN0b21lciUyMHdvbWFufGVufDF8fHx8MTc3MjMwNDc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Chen',
      location: 'Highland Park, IL',
      rating: 5,
      review: 'I\'ve used several window cleaning services over the years, but Whirly Wash is by far the best. They\'re thorough, reliable, and their prices are very reasonable. Will definitely use them again.',
      image: 'https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODgwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Jennifer Martinez',
      location: 'Libertyville, IL',
      rating: 5,
      review: 'The power washing service was fantastic! Our driveway and siding look brand new. The team was respectful of our property and cleaned up everything when they were done. Very impressed!',
      image: 'https://images.unsplash.com/photo-1618301304694-0d529807c8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGhvbWVvd25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjMwNDc0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
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
                  index === currentIndex ? 'bg-[#4A9FF5]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}