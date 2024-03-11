import React from "react";

const Footer=()=>{
    return(
        <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between items-center">
            <div class="w-full md:w-auto mb-6 md:mb-0">
                <a href="#" class="text-xl font-bold">Real Estate Co.</a>
                <p class="text-gray-400 text-sm">© 2024 Real Estate Co., All rights reserved.</p>
            </div>
            <div class="w-full md:w-auto">
                <ul class="flex flex-wrap items-center space-x-4">
                    <li><a href="#" class="hover:text-gray-300">Home</a></li>
                    <li><a href="#" class="hover:text-gray-300">About</a></li>
                    <li><a href="#" class="hover:text-gray-300">Properties</a></li>
                    <li><a href="#" class="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
            <div class="w-full md:w-auto">
                <ul class="flex flex-wrap items-center space-x-4">
                    <li><a href="#" class="hover:text-gray-300"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" class="hover:text-gray-300"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" class="hover:text-gray-300"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#" class="hover:text-gray-300"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

    );

};

export default Footer;