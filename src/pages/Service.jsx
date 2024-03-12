import React from "react";
import image1 from '../assets/img/houses/house8lg.png'
const Services = () => {
    return (
        <div className=" min-h-screen p-4">
            <div className="container mx-auto py-8 gap-4">
                <div className="bg-cover  h-96 flex items-center text-black-500 flex-col sm:flex-row gap-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold mb-4">Discover Your Dream Home</h1>
                        <p className="text-lg mb-8">Explore our range of real estate services tailored to meet your needs.</p>
                        <a href="#services" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
                            Explore Properties
                        </a>
                    </div>
                    <div class="mx-auto">
                        <img class="rounded-lg sm:mt-24" src={image1} alt="house photo" />
                    </div>

                </div>

                {/* Services section */}
                <section id="services" className="mt-24">
                    <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
                    <p className="text-gray-600 mb-8">
                        At XYZ Realty, we offer a comprehensive suite of real estate services. Whether you're buying, selling, or investing, we've got you covered.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Property Listings */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">Property Listings</h3>
                            <p className="text-gray-600">
                                Browse our extensive collection of properties for sale or rent. Use our advanced search filters to find your ideal home.
                            </p>
                        </div>
                        {/* Property Valuation */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">Property Valuation</h3>
                            <p className="text-gray-600">
                                Get accurate property valuations based on market trends, property condition, and location. Trust our expertise.
                            </p>
                        </div>
                        {/* Real Estate Consultation */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">Real Estate Consultation</h3>
                            <p className="text-gray-600">
                                Consult with our experts for personalized advice on real estate matters. We're here to guide you every step of the way.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Properties */}
                {/* Include high-resolution property images, details, and a "View Details" button */}

                {/* Client Testimonials */}
                {/* Showcase quotes from satisfied clients */}

                {/* Contact Us */}
                <section className="mt-12">
                    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-8">
                        Ready to take the next step? Reach out to us for a personalized consultation.
                    </p>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Call us:</span>
                        <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                            +1 (234) 567-890
                        </a>
                    </div>
                    {/* Add email, office address, and contact form */}
                </section>
            </div>
        </div>


    );
};
export default Services;