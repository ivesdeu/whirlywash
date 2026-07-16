import { ArrowRight, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ChecklistItem {
  text: string;
  included: boolean;
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: React.ReactNode;
  image?: string;
  fallbackImage?: string;
  objectPosition?: string;
  badge?: string;
  reserveBadgeSpace?: boolean;
  descriptionClassName?: string;
  checklist?: ChecklistItem[];
  footerNote?: string;
  highlighted?: boolean;
  scrollTarget?: string;
  ctaLabel?: string;
}

export function ServiceCard({ 
  icon, 
  title, 
  description, 
  image, 
  fallbackImage, 
  objectPosition = 'object-[center_30%]',
  badge,
  reserveBadgeSpace = false,
  descriptionClassName = '',
  checklist,
  footerNote,
  highlighted = false,
  scrollTarget = 'estimate',
  ctaLabel,
}: ServiceCardProps) {
  const scrollToSection = () => {
    const element = document.getElementById(scrollTarget);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={image}
            fallbackSrc={fallbackImage}
            alt={title}
            className={`w-full h-full object-cover ${objectPosition} group-hover:scale-105 transition-transform duration-300`}
            width={400}
            height={192}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mx-[0px] mt-[100px] mb-[0px]" />
          <div className="absolute bottom-4 left-4 text-4xl">{icon}</div>
        </div>
      )}
      
      <div className={`p-6 flex flex-col flex-grow ${!image ? 'pt-4' : ''}`}>
        <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 mb-2 ${reserveBadgeSpace ? 'min-h-[28px]' : ''}`}>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {badge ? (
            <span className="inline-block bg-[#1F3C88] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {badge}
            </span>
          ) : null}
        </div>
        <p className={`text-gray-600 mb-4 ${descriptionClassName}`}>{description}</p>
        
        {checklist && checklist.length > 0 && (
          <div className="space-y-2 mb-4">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                {item.included ? (
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                )}
                <span className={item.included ? 'text-gray-900' : 'text-gray-700'}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        )}
        
        {footerNote && (
          <div className={`text-sm mb-4 px-3 py-2 rounded-lg ${
            highlighted 
              ? 'bg-green-50 text-green-800 font-semibold' 
              : 'bg-gray-50 text-gray-600'
          }`}>
            {footerNote}
          </div>
        )}
        
        {ctaLabel ? (
          <div className="mt-auto">
            <Button
              variant="ghost"
              className="text-[#1F3C88] hover:text-[#152a5e] p-0 h-auto"
              onClick={scrollToSection}
            >
              {ctaLabel}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}