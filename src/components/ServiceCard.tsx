import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
