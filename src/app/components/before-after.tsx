import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import beforeAfterImage from 'figma:asset/39e2340f7aa6994865d43f4392da9012f6cd3189.png';

export function BeforeAfter() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const comparisons = [
    {
      before: beforeAfterImage,
      after: beforeAfterImage,
      title: 'Professional Window Cleaning',
      hasTag: true,
    },
    {
      before: 'https://images.unsplash.com/photo-1771079258782-b7212c442141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHJlc2lkZW50aWFsJTIwd2luZG93cyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjMwNDc0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      after: 'https://images.unsplash.com/photo-1771970472769-8038fd7309c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHdpbmRvd3MlMjBjbGVhbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIzMDQ3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Power Washing & Window Service',
      hasTag: false,
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % comparisons.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + comparisons.length) % comparisons.length);
  };

  return (
    <section id="before-after" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See the Difference Professional Cleaning Makes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Drag the slider to compare before and after results
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Comparison Container */}
            <div
              className="relative w-full h-[500px] rounded-2xl overflow-hidden cursor-ew-resize"
              onMouseMove={handleMouseMove}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                const rect = e.currentTarget.getBoundingClientRect();
                const x = touch.clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                setSliderPosition(Math.max(0, Math.min(100, percentage)));
              }}
            >
              {/* After Image (Background) */}
              <img
                src={comparisons[currentSlide].after}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Foreground with clip) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={comparisons[currentSlide].before}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-gray-700 absolute left-2" />
                  <ChevronRight className="w-4 h-4 text-gray-700 absolute right-2" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                After
              </div>
            </div>

            {/* Navigation Buttons */}
            {comparisons.length > 1 && (
              <div className="flex justify-center gap-4 mt-6">
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
            )}

            <p className="text-center mt-4 text-gray-700 font-semibold">
              {comparisons[currentSlide].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}