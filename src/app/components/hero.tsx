import { motion } from 'motion/react';
import { Phone, ArrowRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToEstimate = () => {
    const element = document.getElementById('estimate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crystal Clear Windows. A Cleaner Home. Zero Hassle.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional window cleaning & exterior washing serving Lake County.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                onClick={scrollToEstimate}
                className="bg-[#4A9FF5] hover:bg-[#3B7FD9] text-white rounded-full px-8 py-6 text-lg"
              >
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-[#4A9FF5] text-[#4A9FF5] hover:bg-[#4A9FF5] hover:text-white"
                asChild
              >
                <a href="tel:+15551234567">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Fully Insured</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Local & Owner-Operated</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">100% Satisfaction Guarantee</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771079258782-b7212c442141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHJlc2lkZW50aWFsJTIwd2luZG93cyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjMwNDc0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clean residential windows"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                <p className="text-sm font-semibold text-[#4A9FF5]">Before & After</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}