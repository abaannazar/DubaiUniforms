import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>Dubai Uniform</strong>, we are committed to protecting your personal
        information and your right to privacy. This Privacy Policy explains how we
        collect, use, and protect your data when you visit our website
        (dubaiuniform.com).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, phone
        number, shipping address, and payment details when you:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Place an order</li>
        <li>Fill out a contact or enquiry form</li>
        <li>Subscribe to our newsletter</li>
        <li>Interact with our website</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Process and fulfill your orders</li>
        <li>Respond to your enquiries or requests</li>
        <li>Improve our products, services, and website</li>
        <li>Send promotional emails (only if you opt-in)</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third parties.
        However, we may share your information with trusted service providers who
        assist us in operating our website, conducting business, or servicing you —
        under strict confidentiality agreements.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement security measures to protect your personal information. However,
        no method of transmission over the internet is 100% secure. We cannot
        guarantee absolute security but strive to use the best practices available.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies & Tracking</h2>
      <p className="mb-4">
        We may use cookies and similar tracking technologies to enhance user
        experience and analyze site traffic. You can choose to accept or decline
        cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal data. To
        request changes or ask questions about your data, please email us at{' '}
        <a href="mailto:support@dubaiuniform.com" className="text-blue-600 underline">
          support@dubaiuniform.com
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to other websites. We are not responsible for
        the privacy practices or content of those external sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy occasionally. Changes will be posted on this
        page with an updated effective date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:support@dubaiuniform.com" className="text-blue-600 underline">
          support@dubaiuniform.com
        </a>
      </p>

      <p className="mt-6 text-sm text-gray-500 text-center">
        Effective Date: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
