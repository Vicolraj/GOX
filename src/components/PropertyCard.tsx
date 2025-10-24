import { Card, CardContent } from "@/components/ui/card";

interface PropertyCardProps {
  name: string;
  description: string;
  image: string;
}

const PropertyCard = ({ name, description, image }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-border">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${name} - furnished rental in Knoxville`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-foreground">{name}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
