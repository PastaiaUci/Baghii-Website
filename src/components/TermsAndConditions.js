import React from "react";
import ScrollToTop from "./ScrollToTop";
import "./css/TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <ScrollToTop>
      <div
        className="container mx-auto px-4 lg:px-10 lg:max-w-screen-2xl"
        data-aos="fade-up"
      >
        <div className="bg-white p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <h1 className="terms-title text-blue-900 text-4xl font-bold mb-6 text-center">
            Terms and Conditions
          </h1>

          <section className="terms-section" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Welcome to <strong>Baghii</strong>! These terms and conditions
              outline the rules and regulations for the use of{" "}
              <strong>BGH Labs</strong>’s Website, located at{" "}
              <strong>www.baghii.com</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              By accessing this website, we assume you accept these terms and
              conditions. Do not continue to use <strong>BGH Labs</strong> if
              you do not agree to all of the terms and conditions stated on this
              page.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              2. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Unless otherwise stated, <strong>Baghii</strong> and/or its
              licensors own the intellectual property rights for all material on{" "}
              <strong>BGH Labs</strong>. All intellectual property rights are
              reserved. You may access this from <strong>BGH Labs</strong> for
              your own personal use, subject to restrictions set in these terms
              and conditions.
            </p>
            <ul className="list-disc ml-6 text-lg leading-relaxed mb-4">
              <li>Republish material from BGH Labs</li>
              <li>Sell, rent, or sub-license material from BGH Labs</li>
              <li>Reproduce, duplicate or copy material from BGH Labs</li>
              <li>Redistribute content from BGH Labs</li>
            </ul>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              3. User Content
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              "User Content" means any audio, video, text, images, or other
              material you choose to display on this Website. By displaying User
              Content, you grant <strong>Baghii</strong> a non-exclusive,
              worldwide irrevocable, sub-licensable license to use, reproduce,
              adapt, publish, translate, and distribute it in any and all media.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              User Content must be your own and must not infringe on any third
              party’s rights. <strong>Baghii</strong> reserves the right to
              remove any User Content from this Website at any time without
              notice.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              4. Privacy
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Please review our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                Privacy Policy
              </a>{" "}
              for details on how we collect, use, and protect your information.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              In no event shall <strong>Baghii</strong>, nor any of its
              officers, directors, and employees, be held liable for anything
              arising out of or in any way connected with your use of this
              Website, whether such liability is under contract.{" "}
              <strong>Baghii</strong>, including its officers, directors, and
              employees, shall not be held liable for any indirect,
              consequential, or special liability arising out of or in any way
              related to your use of this website.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              6. Disclaimer
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The materials on <strong>BGH Labs</strong>’s website are provided
              on an 'as is' basis. <strong>Baghii</strong> makes no warranties,
              expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of
              rights.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Further, <strong>Baghii</strong> does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              7. Governing Law
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              These terms and conditions are governed by and construed in
              accordance with the laws of <strong>Romania</strong> and you
              irrevocably submit to the exclusive jurisdiction of the courts in
              that location.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              8. Changes to Terms
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <strong>Baghii</strong> reserves the right to revise or replace
              these terms and conditions at any time. Your continued use of the
              website will signify your acceptance of any adjustments made to
              these terms.
            </p>
          </section>

          <section
            className="terms-section"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h2 className="text-3xl font-semibold text-blue-900 mb-3">
              9. Contact Information
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please
              contact us at:
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

export default TermsAndConditions;
