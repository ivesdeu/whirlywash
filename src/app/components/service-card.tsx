import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({ icon, title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-4xl">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button
          variant="ghost"
          className="text-[#4A9FF5] hover:text-[#3B7FD9] p-0 h-auto"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}