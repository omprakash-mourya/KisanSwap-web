import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - KisanSwap</title>
        <meta name="description" content="Learn about KisanSwap's mission to empower farmers through technology and innovation in agricultural equipment trading." />
      </Helmet>

      <div className="container py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About KisanSwap</h1>

          <div className="prose prose-lg">
            <p className="text-xl text-muted-foreground mb-6">
              At KisanSwap, we're on a mission to empower farmers through technology,
              making it easier than ever to access and trade agricultural equipment.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              We believe that every farmer should have access to the right equipment
              at the right time. By creating a transparent and efficient marketplace,
              we're helping farmers across the country modernize their operations
              and increase productivity.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose KisanSwap?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Direct connection between buyers and sellers</li>
              <li>Transparent pricing and negotiation</li>
              <li>Verified listings with detailed information</li>
              <li>Easy-to-use platform designed for farmers</li>
              <li>Support for local farming communities</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p>
              We envision a future where every farmer has easy access to modern
              agricultural equipment, enabling them to improve their yields and
              grow their businesses sustainably.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}