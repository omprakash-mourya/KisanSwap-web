import { Helmet } from 'react-helmet';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - KisanSwap</title>
        <meta name="description" content="KisanSwap's Privacy Policy - Learn how we protect and manage your data." />
      </Helmet>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-muted-foreground">Last updated: March 2024</p>
            
            <h2>Information We Collect</h2>
            <p>
              When you use KisanSwap, we collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Equipment listing details</li>
              <li>Communication preferences</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you important updates</li>
              <li>Improve our platform</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Other users (for equipment listings)</li>
              <li>Service providers</li>
              <li>Legal authorities when required</li>
            </ul>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our contact form.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
