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
        className="py-20 relative bg-gradient-to-r from-green-900/90 to-green-800/90"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M30 50C45 35 55 35 70 50C55 65 45 65 30 50Z' fill='%23ffffff10'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Welcome to KisanSwap – Empowering Farmers
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Your trusted marketplace for buying and selling agricultural equipment
          </p>
          <Link href="/features">
            <Button size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
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