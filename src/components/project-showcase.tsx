import { MapPin, Clock, Ruler } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectShowcaseProps {
  title: string;
  location: string;
  category: string;
  duration: string;
  squareFootage?: string;
  description: string;
  imageSrc?: string;
  tags?: string[];
}

export function ProjectShowcase({
  title,
  location,
  category,
  duration,
  squareFootage,
  description,
  imageSrc = '/placeholder-project.jpg',
  tags = []
}: ProjectShowcaseProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative h-64 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/60 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/90">{category}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="font-semibold">
            Completed
          </Badge>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            <div>
              <div className="text-xs text-muted-foreground">Location</div>
              <div className="text-sm font-semibold">{location}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-secondary" />
            <div>
              <div className="text-xs text-muted-foreground">Duration</div>
              <div className="text-sm font-semibold">{duration}</div>
            </div>
          </div>

          {squareFootage && (
            <div className="flex items-center gap-2">
              <Ruler className="w-4 h-4 text-secondary" />
              <div>
                <div className="text-xs text-muted-foreground">Size</div>
                <div className="text-sm font-semibold">{squareFootage}</div>
              </div>
            </div>
          )}
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
