import { Star, ExternalLink } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  image?: string;
  link?: string;
}

export function TestimonialCard({ name, location, rating, review, link }: TestimonialCardProps) {
  const content = (
    <>
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-6 flex-grow italic overflow-y-auto min-h-0">"{review}"</p>

      {/* Customer Info - no photo */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        {link && (
          <ExternalLink className="w-4 h-4 text-gray-400" />
        )}
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-2xl p-8 shadow-lg h-full min-h-0 flex flex-col hover:shadow-xl transition-shadow cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg h-full min-h-0 flex flex-col">
      {content}
    </div>
  );
}