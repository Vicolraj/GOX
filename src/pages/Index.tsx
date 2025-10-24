import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PropertyCard from "@/components/PropertyCard";
import { CheckCircle2, Heart, Home, Key, Shield, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-home.jpg";
import goxLogo from "@/assets/gox-logo.png";
import rubyImage from "@/assets/ruby-property.jpg";
import clementineImage from "@/assets/clementine-property.jpg";
import sageImage from "@/assets/sage-property.png";
import blueImage from "@/assets/blue-property.png";
import ownerPhoto from "@/assets/owner-photo.jpg";

const Index = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  const scrollToProperties = () => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form and close dialog
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    setIsContactDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(38, 42, 28, 0.5), rgba(38, 42, 28, 0.4)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-6 mb-8">
              <img 
                src={goxLogo} 
                alt="GOX Logo" 
                className="w-24 sm:w-32 lg:w-36 flex-shrink-0 invert"
              />
              <div className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                GOX Property Management & Rentals
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stay Somewhere That Feels Like Home
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Furnished mid-term rentals in Knoxville — designed for traveling nurses, relocating families, and professionals who value comfort, convenience, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToProperties}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                Explore Our Properties
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setIsContactDialogOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Welcome to Generation of Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We're more than property management — we're a locally rooted brand committed to providing travelers with exceptional housing that blends warmth, style, and purpose. Each stay with us supports the greater Knoxville community, enhancing neighborhoods and uplifting others through service and excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <Home className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Comfort First</h3>
                <p className="text-muted-foreground text-center">Every property is thoughtfully designed to feel like home from day one.</p>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Community Care</h3>
                <p className="text-muted-foreground text-center">Your stay strengthens Knoxville through local partnerships and support.</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Trusted Service</h3>
                <p className="text-muted-foreground text-center">Professional management with local expertise and personal care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Featured Properties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each property is uniquely designed to provide comfort, style, and all the amenities you need for a seamless stay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PropertyCard
              name="The Ruby of Central Knoxville"
              description="A spacious 3-bedroom home offering modern comfort and convenience near downtown, with stylish furnishings and easy access to hospitals and local dining."
              image={rubyImage}
            />
            <PropertyCard
              name="The Clementine"
              description="A cozy, minimalist studio offering peace and simplicity for solo travelers or professionals on the go."
              image={clementineImage}
            />
            <PropertyCard
              name="The Sage"
              description="A serene one-bedroom retreat that balances modern design with natural comfort — perfect for rest and renewal."
              image={sageImage}
            />
            <PropertyCard
              name="Chill St. Blue"
              description="A contemporary two-bedroom apartment featuring cool tones, open spaces, and all the amenities of home."
              image={blueImage}
            />
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-foreground">
              Everything You Need, Ready From Day One
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Key, text: "Fully furnished and move-in ready" },
                { icon: CheckCircle2, text: "All utilities included" },
                { icon: Wifi, text: "High-speed Wi-Fi" },
                { icon: Home, text: "In-unit washer/dryer" },
                { icon: CheckCircle2, text: "Flexible lease terms (30+ days)" },
                { icon: Heart, text: "Prime locations near hospitals and downtown" },
                { icon: Shield, text: "Professionally managed with local support" },
                { icon: Home, text: "Quality linens and kitchen essentials" },
              ].map((amenity, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <amenity.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{amenity.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section id="community-impact" className="py-20 bg-gradient-to-b from-card to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              More Than Property Management
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Generation of Excellence is about community care. Each stay contributes to maintaining quality housing, supporting local outreach, and strengthening Knoxville through connection and hospitality.
            </p>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-foreground italic">
                  "When you stay with us, you're not just renting a place — you're becoming part of a mission to uplift and enhance our Knoxville community."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Owner Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-foreground">
              Meet Your Hosts
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src={ownerPhoto} 
                  alt="Cassandra Credle and Horace Credle" 
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Cassandra Credle, Owner
                </h3>
                <h4 className="text-xl font-semibold mb-6 text-muted-foreground">
                  & Horace Credle, Property Manager
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi! I'm Cassandra, of Generation Of Excellence LLC. I partner with my husband Horace and we enjoy providing our guest with a resort style atmosphere. We like to travel and love to have that at home feeling when we are away from home. So we went through great efforts to provide that same experience in our properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-foreground">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "This place made my 13-week assignment so much easier. It was peaceful, spotless, and close to the hospital — I could truly relax after long shifts and felt completely at home."
                </p>
                <p className="font-semibold text-foreground">— Amy D., Traveling Nurse</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Everything was ready when I arrived, and the space was even better than the photos. The neighborhood was quiet, and the hosts went above and beyond to make sure I had everything I needed for my stay."
                </p>
                <p className="font-semibold text-foreground">— Marie F., Traveling Nurse</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "I travel often for work, and this has been one of my best rental experiences. The apartment was clean, well-furnished, and perfectly located — I'll definitely be booking again next time I'm in Knoxville."
                </p>
                <p className="font-semibold text-foreground">— James R., Traveling Professional</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "I stayed here for a couple of months while on assignment, and it truly felt like a home away from home. The space was peaceful, spotless, and spacious — the perfect place to unwind after long workdays, and I look forward to returning on my next contract."
                </p>
                <p className="font-semibold text-foreground">— Efraim C., Traveling Professional</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "This was a wonderful place to stay — clean, comfortable, and well-maintained throughout. The owners were friendly and quick to respond, and I appreciated the extra touches like the workout equipment and the amount of space for the price."
                </p>
                <p className="font-semibold text-foreground">— Trevelyn L., Relocating Professional</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Horace and Cassandra were amazing hosts who made my transition smooth and stress-free. I couldn't have chosen a better place to stay while waiting for my new apartment to be ready!"
                </p>
                <p className="font-semibold text-foreground">— McKenzie G., Relocating Professional</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience comfort, connection, and community — the Generation of Excellence way.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setIsContactDialogOpen(true)}
            className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            Contact Us to Learn More
          </Button>
          
          <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Contact for Information</DialogTitle>
                <DialogDescription>
                  Please provide your contact information and we'll get back to you soon.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    maxLength={255}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    maxLength={20}
                  />
                </div>
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beige text-beige-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Generation of Excellence</h3>
              <p className="opacity-80">Property Management</p>
              <p className="opacity-80">& Rentals</p>
              <p className="opacity-80 mt-2">Knoxville, Tennessee</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Properties</h4>
              <ul className="space-y-2 opacity-80">
                <li>The Ruby of Central Knoxville</li>
                <li>The Clementine</li>
                <li>The Sage</li>
                <li>Chill St. Blue</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="opacity-80 mb-2">Email: stay@rentgox.com</p>
              <p className="opacity-80 mb-2">Phone: (757) 305-4532</p>
              <p className="opacity-80">8116 Nutmeg Cir<br />Suite B<br />Knoxville, TN 37938</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center opacity-80">
            <p>&copy; {new Date().getFullYear()} Generation of Excellence Property Management & Rentals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
