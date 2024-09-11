import React from "react";
import ScrollToTop from "./ScrollToTop";
import "./css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <ScrollToTop>
      <div
        className="container mx-auto px-4 lg:px-10 lg:max-w-screen-2xl"
        data-aos="fade-up"
      >
        <div className="bg-white p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <h1 className="terms-title text-blue-900 text-4xl font-bold mb-6 text-center">
            Privacy Policy
          </h1>

          <section className="terms-section" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Welcome to <strong>Baghii</strong>! This Privacy Policy explains
              how we collect, use, and protect your personal data when you visit
              our website at <strong>www.baghii.com</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              By using this website, you agree to the collection and use of
              information in accordance with this policy. If you do not agree
              with this policy, please do not use our site.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We collect several types of information to provide and improve our
              services to you. This includes:
            </p>
            <ul className="list-disc ml-6 text-lg leading-relaxed mb-4">
              <li>
                Personal Data: Information such as name, email address, and
                phone number that you provide to us voluntarily.
              </li>
              <li>
                Usage Data: Information automatically collected, including IP
                addresses, browser type, and pages you visited on our website.
              </li>
              <li>
                Cookies: Small data files stored on your device to improve your
                browsing experience and enable specific website functionality.
              </li>
            </ul>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We use the collected data to:
            </p>
            <ul className="list-disc ml-6 text-lg leading-relaxed mb-4">
              <li>Provide and maintain our services.</li>
              <li>Notify you about changes to our services or policies.</li>
              <li>Respond to your inquiries and offer customer support.</li>
              <li>Analyze usage and trends to improve our website.</li>
              <li>Ensure the security of our website and prevent fraud.</li>
            </ul>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              4. Sharing Your Information
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We do not sell or share your personal information with third
              parties, except:
            </p>
            <ul className="list-disc ml-6 text-lg leading-relaxed mb-4">
              <li>When required by law or government authorities.</li>
              <li>
                To trusted service providers who help us operate our website
                (under strict confidentiality agreements).
              </li>
              <li>To prevent fraud or protect our legal rights.</li>
            </ul>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              5. Your Data Protection Rights
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              As a user, you have the following rights regarding your personal
              data:
            </p>
            <ul className="list-disc ml-6 text-lg leading-relaxed mb-4">
              <li>
                Access: You have the right to request a copy of the information
                we hold about you.
              </li>
              <li>
                Correction: You can request that we correct any inaccurate or
                incomplete data.
              </li>
              <li>
                Deletion: You have the right to request that we delete your
                personal data under certain conditions.
              </li>
              <li>
                Restriction: You have the right to restrict the processing of
                your personal data.
              </li>
            </ul>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              6. Security of Your Data
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We take data security seriously and use industry-standard security
              measures to protect your personal data. However, no method of
              transmission over the internet or method of electronic storage is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and you will be notified via email or
              a prominent notice on our website before the change becomes
              effective.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              8. Contact Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <strong>Baghii</strong> <br />
              support@baghii.com <br />
              +40 0758525733 <br />
              Floresti, Cluj, Strada Tautiului, 89e
            </p>
          </section>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default PrivacyPolicy;
