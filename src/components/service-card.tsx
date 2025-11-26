import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
  href = '/contact'
}: ServiceCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary/50 group">
      <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
        <Icon className="w-8 h-8 text-secondary" />
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Button asChild variant="outline" className="w-full group-hover:bg-secondary group-hover:text-white group-hover:border-secondary">
        <Link href={href}>Learn More</Link>
      </Button>
    </div>
  );
}
