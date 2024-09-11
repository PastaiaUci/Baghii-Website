import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block with gray box */}
            <div className="col-span-12 lg:col-span-4 flex flex-col items-center">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80">
                <h3 className="font-bold text-4xl mb-4">Baghii</h3>
                <div className="text-md font-medium text-gray-600">
                  <h5>Frange ossa eorum</h5>
                  <p>Tăuțiului Florești,</p>
                  <p>Cluj,</p>
                  <p>România.</p>
                </div>
              </div>

              {/* Social media links aligned */}
              <div className="text-center mt-8 w-full">
                <h6 className="text-xl font-bold uppercase text-blue-900">
                  Social Media Links.
                </h6>
                <p className="text-md font-medium mb-6">
                  Follow us on social media.
                </p>
                <div className="flex justify-center">
                  <ul className="flex space-x-4">
                    <li>
                      <Link
                        to="#"
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="Twitter"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                        </svg>
                      </Link>
                    </li>
                    {/* TikTok */}
                    <li>
                      <a
                        href="https://www.tiktok.com/@brichetecool.ro"
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="TikTok"
                      >
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 16 18"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transform: "scale(0.8)" }}
                        >
                          <path
                            d="M8.02 0H11s-.17 3.82 4.13 4.1v2.95s-2.3.14-4.13-1.26l.03 6.1a5.52 5.52 0 11-5.51-5.52h.77V9.4a2.5 2.5 0 101.76 2.4L8.02 0z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </li>
                    {/* Instagram */}
                    <li>
                      <Link
                        to="#"
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="Instagram"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 7.6c2.3 0 2.6 0 3.6.1 1.2.1 1.8.2 2.2.4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.3 1 .4 2.2.1 1 .1 1.3.1 3.6s0 2.6-.1 3.6c-.1 1.2-.2 1.8-.4 2.2-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1 .3-2.2.4-1 .1-1.3.1-3.6.1s-2.6 0-3.6-.1c-1.2-.1-1.8-.2-2.2-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.3-1-.4-2.2-.1-1-.1-1.3-.1-3.6s0-2.6.1-3.6c.1-1.2.2-1.8.4-2.2.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.3 2.2-.4 1-.1 1.3-.1 3.6-.1m0-1.6c-2.4 0-2.7 0-3.7.1-1.2.1-2 .2-2.7.5-.7.3-1.4.7-2 1.4-.6.6-1 1.3-1.4 2-.3.7-.5 1.5-.5 2.7-.1 1-.1 1.3-.1 3.7s0 2.7.1 3.7c.1 1.2.2 2 .5 2.7.3.7.7 1.4 1.4 2 .6.6 1.3 1 2 1.4.7.3 1.5.5 2.7.5 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c1.2-.1 2-.2 2.7-.5.7-.3 1.4-.7 2-1.4.6-.6 1-1.3 1.4-2 .3-.7.5-1.5.5-2.7.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7c-.1-1.2-.2-2-.5-2.7-.3-.7-.7-1.4-1.4-2-.6-.6-1.3-1-2-1.4-.7-.3-1.5-.5-2.7-.5-1-.1-1.3-.1-3.7-.1zM16 12.1a3.9 3.9 0 100 7.8 3.9 3.9 0 000-7.8zm0 6.3a2.4 2.4 0 110-4.7 2.4 2.4 0 010 4.7zm6.4-6.5a.9.9 0 100-1.8.9.9 0 000 1.8z" />
                        </svg>
                      </Link>
                    </li>
                    {/* LinkedIn */}
                    <li>
                      <Link
                        to="#"
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 12h5v2.7c.7-1.2 2-2.5 4.2-2.5 3.3 0 4.8 2.2 4.8 5.2V24h-5v-5.7c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.3-.1.2-.1.5-.1.7V24h-5v-12zm-6 0h5v12H6zm5-5c0 1.7-1.3 3-3 3S5 8.7 5 7s1.3-3 3-3 3 1.3 3 3z" />
                        </svg>
                      </Link>
                    </li>
                    {/* YouTube */}
                    <li>
                      <Link
                        to="#"
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="YouTube"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transform: "scale(0.8)" }}
                        >
                          <path d="M31.4 9.6c-.4-1.7-1.7-3-3.3-3.4C25.5 6 16 6 16 6s-9.5 0-12.1.2c-1.6.4-2.9 1.7-3.3 3.4C.1 11.9 0 15 0 15s0 3.1.6 5.4c.4 1.7 1.7 3 3.3 3.4 2.6.2 12.1.2 12.1.2s9.5 0 12.1-.2c1.6-.4 2.9-1.7 3.3-3.4.6-2.3.6-5.4.6-5.4s0-3.1-.6-5.4zM12.7 19.9V10.1l8.6 4.9-8.6 4.9z" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="/about"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/contact"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Video Editing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    3D Modelling
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    3D Printing
                  </Link>
                </li>
              </ul>
            </div>

            {/* New block: Informații */}
            <div className="col-span-6 md:col-span-6 lg:col-span-3 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                Informații
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="/terms-and-conditions"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/privacy-policy"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/contact"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-2">
                  <a
                    href="https://anpc.ro/ce-este-sal/"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ANPC Soluționarea alternativă a litigiilor
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Soluționarea online a litigiilor
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-gray-900">
                  Baghii Enterprises
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
