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
        <title>KisanSwap - Empowering Farmers</title>
        <meta name="description" content="Welcome to KisanSwap - Your marketplace for agricultural equipment. Buy and sell farm equipment easily." />
      </Helmet>

      <section 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Welcome to KisanSwap<br />
            <span className="text-3xl md:text-4xl">Empowering Farmers</span>
          </h1>
          <Link href="/features">
            <Button size="lg" className="font-semibold px-8 py-6 text-lg">
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