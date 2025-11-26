import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating?: number;
  projectType?: string;
}

export function TestimonialCard({
  name,
  role,
  location,
  quote,
  rating = 5,
  projectType
}: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground mb-4 italic leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
          <span className="text-secondary font-bold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{role} • {location}</div>
          {projectType && (
            <div className="text-xs text-secondary font-medium mt-1">
              {projectType}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
