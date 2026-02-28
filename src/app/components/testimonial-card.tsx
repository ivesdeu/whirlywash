import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
}

export function TestimonialCard({ name, location, rating, review, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-6 flex-grow italic">"{review}"</p>

      {/* Customer Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  );
}
