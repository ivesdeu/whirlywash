import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
}

export function ServiceCard({ icon, title, description, image, objectPosition = 'object-[center_30%]' }: ServiceCardProps) {
  const scrollToEstimate = () => {
    const element = document.getElementById('estimate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${objectPosition} group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mx-[0px] mt-[100px] mb-[0px]" />
        <div className="absolute bottom-4 left-4 text-4xl">{icon}</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Button
          variant="ghost"
          className="text-[#1F3C88] hover:text-[#152a5e] p-0 h-auto"
          onClick={scrollToEstimate}
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}