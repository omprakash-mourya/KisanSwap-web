import { Helmet } from 'react-helmet';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - KisanSwap</title>
        <meta name="description" content="KisanSwap's Terms and Conditions - Understanding our service agreement." />
      </Helmet>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

          <div className="prose prose-lg">
            <p className="text-muted-foreground">Last updated: March 2024</p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using KisanSwap, you agree to be bound by these Terms and Conditions.
            </p>

            <h2>User Accounts</h2>
            <p>
              You must:
            </p>
            <ul>
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
              <li>Not share account credentials</li>
              <li>Be at least 18 years old</li>
            </ul>

            <h2>Listing Rules</h2>
            <p>
              When listing equipment, you must:
            </p>
            <ul>
              <li>Provide accurate descriptions</li>
              <li>Use authentic images</li>
              <li>Set fair prices</li>
              <li>Respond to inquiries promptly</li>
            </ul>

            <h2>Prohibited Activities</h2>
            <p>
              Users may not:
            </p>
            <ul>
              <li>Post fraudulent listings</li>
              <li>Harass other users</li>
              <li>Manipulate prices</li>
              <li>Violate any applicable laws</li>
            </ul>

            <h2>Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of KisanSwap
              after changes constitutes acceptance of the modified terms.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these Terms and Conditions, please contact us through our contact form.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}