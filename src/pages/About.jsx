import React from "react";
 const About=()=>
 {
    return(
        <body class="bg-gray-100 text-gray-900 tracking-wider leading-normal">

<div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
        <svg class="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
            <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div class="text-center">
            <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                About Real Estate Co.
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Discover our journey and the values that drive us to deliver exceptional real estate experiences.
            </p>
        </div>
    </div>
</div>

<div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <p class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Our Mission</p>
            <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to buy and sell real estate
            </h3>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Since our inception in 1995, we've been passionate about providing the best real estate services with integrity and innovation at our core.
            </p>
        </div>

        <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l-5.5 9h11z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v17m0 0h-5.5m5.5 0H17" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l-5.5 9h11z" />
                            </svg>
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Global Reach</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                        Our network spans across the globe, ensuring you have access to properties worldwide.
                    </dd>
                </div>

                <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a2 2 0 011-1.73l.51-.29h.98l.51.29A2 2 0 017 4" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14h16" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16" />
                            </svg>
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Trusted by Thousands</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                        Thousands of clients trust us to navigate their real estate journey, whether buying, selling, or renting.
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</div>

<div class="bg-gray-800">
    <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white">Meet Our Team</h2>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
                <img class="w-32 h-32 mx-auto rounded-full" src="/images/team-member-1.jpg" alt="Team member"/>
                <h3 class="mt-4 text-lg leading-6 font-medium text-white">Jane Cooper</h3>
                <p class="mt-2 text-base text-indigo-200">CEO & Founder</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900">What Our Clients Say</h2>
        <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            <div class="group relative">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="agent1.png" alt="Client photo" class="w-full h-full object-center object-cover"/>
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                    <a href="#">
                        <span class="absolute inset-0"></span>
                        Emily Selman
                    </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">"Real Estate Co. helped me find my dream home. Their dedication and expertise made the process a breeze!"</p>
            </div>
        </div>
    </div>
</div>

</body>
    );
 };

 export default About;
