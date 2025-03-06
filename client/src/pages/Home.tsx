import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, MessageCircle, BarChart3 } from "lucide-react";
import { Helmet } from 'react-helmet';

export default function Home() {
  const features = [
    {
      icon: Upload,
      title: "Easy Listings",
      description: "Upload your agricultural equipment with photos and videos in minutes",
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Connect directly with buyers and sellers through WhatsApp",
    },
    {
      icon: BarChart3,
      title: "Transparency",
      description: "Monitor your product views and engagement metrics",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kisan Swap - Empowering Farmers</title>
        <meta name="description" content="Welcome to Kisan Swap - Your marketplace for agricultural equipment. Buy and sell farm equipment easily." />
      </Helmet>

      <section className="py-20 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Kisan Swap – Empowering Farmers
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your trusted marketplace for buying and selling agricultural equipment
          </p>
          <Link href="/features">
            <Button size="lg" className="font-semibold">
              Explore Features
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
