import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center mb-5">Terms & Conditions</h1>

      <p className="mb-4">
        Welcome to <strong>Dubai Uniform</strong>. By accessing and using this website
        (dubaiuniform.com), you agree to comply with and be bound by the following
        terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Site</h2>
      <p className="mb-4">
        The content on this site is for your general information and use only. It is
        subject to change without notice. Unauthorized use of this website may give
        rise to a claim for damages and/or be a criminal offense.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
      <p className="mb-4">
        All content, trademarks, logos, and images on this website are the property
        of Dubai Uniform or its content suppliers and are protected by international
        copyright laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Product Information</h2>
      <p className="mb-4">
        We strive to ensure accuracy in our product descriptions, pricing, and
        availability. However, errors may occur, and we reserve the right to correct
        them without prior notice.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Order & Payment</h2>
      <p className="mb-4">
        All orders are subject to availability and confirmation. We reserve the right
        to refuse or cancel any order. Payment must be made in full before order
        processing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Delivery & Returns</h2>
      <p className="mb-4">
        Delivery timelines are estimates and not guaranteed. Returns are accepted
        within 7 days of delivery for unused, undamaged products with original tags.
        Custom-made items are non-returnable.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Privacy Policy</h2>
      <p className="mb-4">
        We are committed to protecting your privacy. Please refer to our{' '}
        <a href="/privacy-policy" className="text-blue-600 underline">
          Privacy Policy
        </a>{' '}
        for details on how we collect, use, and safeguard your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">
        Dubai Uniform is not liable for any indirect, incidental, or consequential
        damages arising from your use of this site or any products purchased through
        it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or modify these Terms & Conditions at any time
        without prior notice. Continued use of the website implies acceptance of the
        revised terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms & Conditions, please contact us at:{' '}
        <a href="mailto:support@dubaiuniform.com" className="text-blue-600 underline">
          support@dubaiuniform.com
        </a>
      </p>

      <p className="mt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Dubai Uniform. All Rights Reserved.
      </p>
    </div>
  );
};

export default TermsAndConditions;
