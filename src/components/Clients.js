import React from "react";
import Crina from "../images/clients/Crina.png";
import TeodorSocea from "../images/clients/TeodorSocea.png";
import Inosuke from "../images/clients/Inosuke.png";

const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
};

const Clients = () => {
  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Some of our clients.
          </h2>
        </div>

        <div className="-mt-4 p-16" data-aos="fade-in" data-aos-delay="600">
          <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div
                style={clientImage}
                className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6"
              >
                <img src={Crina} alt="client" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-700 italic">
                  "Thanks to their amazing video editing services, my TikToks
                  have never looked better! Their creativity and attention to
                  detail helped me gain over 4,000 followers in no time. Highly
                  recommend!"
                </p>
                <span className="block mt-2 text-sm text-gray-500">
                  - Cretu Crina
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div
                style={clientImage}
                className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
              >
                <img src={Inosuke} alt="client" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-700 italic">
                  "I couldn't be happier with my Inosuke swords! The
                  craftsmanship is incredible, and they complete my cosplay
                  perfectly. These swords are exactly what I needed to bring my
                  character to life!"
                </p>
                <span className="block mt-2 text-sm text-gray-500">
                  - Luca David
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div
                style={clientImage}
                className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
              >
                <img src={TeodorSocea} alt="client" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-700 italic">
                  ""I bought Nanami's Cursed Tool for my cosplay, and it’s
                  awesome! The detail is spot on, and it feels really well made.
                  It’s not too heavy, so it's comfortable to carry around at
                  conventions. I’ve gotten a lot of compliments on how accurate
                  it looks. Definitely recommend it if you’re cosplaying as
                  Nanami!
                </p>
                <span className="block mt-2 text-sm text-gray-500">
                  - Teodor Socea
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
