import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet';
import { 
  Upload, 
  MessageCircle, 
  MapPin, 
  Camera,
  BarChart3 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Upload,
      title: "Easy Product Upload",
      description: "List your agricultural equipment with multiple photos and videos in a few simple steps",
    },
    {
      icon: Camera,
      title: "Rich Media Support",
      description: "Add high-quality photos and videos to showcase your equipment in detail",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integration",
      description: "Connect with sellers directly through WhatsApp for quick communication",
    },
    {
      icon: MapPin,
      title: "Location Services",
      description: "Find equipment near you with Google Maps integration",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track views and impressions for your listed products",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Features - Kisan Swap</title>
        <meta name="description" content="Discover the powerful features of Kisan Swap - Easy uploads, direct communication, and detailed analytics for agricultural equipment trading." />
      </Helmet>

      <div className="container py-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          Our Features
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Everything you need to buy and sell agricultural equipment efficiently
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="flex items-start gap-4 pt-6">
                <feature.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
