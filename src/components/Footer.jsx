import React from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
const Footer = () => {
  return( 
    
    <footer class="bg-gray-900 text-white p-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <h5 class="text-xl font-bold mb-3">Real Estate Co.</h5>
            <p class="text-gray-400">Providing top-notch real estate solutions since 1995. We help you find the perfect property or buyer with ease.</p>
            <p class="text-gray-400 mt-4">© 2024 Real Estate Co.</p>
        </div>
        <div>
            <h5 class="text-xl font-bold mb-3">Quick Links</h5>
            <ul class="space-y-2">
                <li><a href="#" class="hover:text-gray-300">Home</a></li>
                <li><a href="#" class="hover:text-gray-300">About Us</a></li>
                <li><a href="#" class="hover:text-gray-300">Properties</a></li>
                <li><a href="#" class="hover:text-gray-300">Testimonials</a></li>
                <li><a href="#" class="hover:text-gray-300">Contact</a></li>
            </ul>
        </div>
        <div>
            <h5 class="text-xl font-bold mb-3">Get in Touch</h5>
            <p class="hover:text-gray-300"><i class="fas fa-envelope mr-2"></i>contact@realestateco.com</p>
            <p class="hover:text-gray-300"><i class="fas fa-phone mr-2"></i>+1 555-REALESTATE</p>
            <p class="hover:text-gray-300"><i class="fas fa-map-marker-alt mr-2"></i>123 Real Estate St., Property City</p>
        </div>
        <div>
            <h5 class="text-xl font-bold mb-3">Follow Us</h5>
            <div class="flex space-x-4">
                <a href="#" class="hover:text-gray-300"><BiLogoFacebook/></a>
                <a href="#" class="hover:text-gray-300"><BiLogoTwitter/></a>
                <a href="#" class="hover:text-gray-300"><BiLogoInstagram/></a>
                <a href="#" class="hover:text-gray-300"><BiLogoLinkedin/></a>
            </div>
        </div>
    </div>
</footer>



  );
};

export default Footer;
