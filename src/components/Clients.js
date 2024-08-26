import React from 'react';
import Crina from '../images/clients/Crina.png';
import BGHOnlyFans from '../images/clients/BGHOnlyFans.png';
import Inosuke from '../images/clients/Inosuke.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2>
                    </div>

                    <div className="-mt-4 p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">  
                            <div style={clientImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                                <img src={Crina} alt="client" />
                            </div>
                            <div className="mt-4 text-center">  
                                <p className="text-gray-700 italic">"Thanks to their amazing video editing services, my TikToks have never looked better! Their creativity and attention to detail helped me gain over 3,000 followers in no time. Highly recommend!"</p>  
                                <span className="block mt-2 text-sm text-gray-500">- Cretu Crina</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                <img src={Inosuke} alt="client" />
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-gray-700 italic">"I couldn't be happier with my Inosuke swords! The craftsmanship is incredible, and they complete my cosplay perfectly. These swords are exactly what I needed to bring my character to life!"</p>
                                <span className="block mt-2 text-sm text-gray-500">- Luca David</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                <img src={BGHOnlyFans} alt="client" />
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-gray-700 italic">"Our new website has transformed our business! It's sleek, easy to navigate, and has significantly increased our online sales. The team's expertise and dedication really show in every detail. We couldn't be more pleased!"</p>
                                <span className="block mt-2 text-sm text-gray-500">- BGHOnlyFans</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;