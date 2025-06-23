// Footer Component
document.addEventListener('DOMContentLoaded', function() {
    const footer = `
    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                <!-- Company Info -->
                <div>
                    <h3 class="text-xl font-bold mb-4 border-b border-gray-700 pb-2">The Innovative Times</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        Your trusted source for EIS and SEIS investment insights and opportunities.
                    </p>
                    <div class="mt-6 flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <i class="fab fa-linkedin text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <i class="fab fa-twitter text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <i class="fab fa-instagram text-lg"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-bold mb-6 relative">
                        Quick Links
                        <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500"></div>
                    </h4>
                    <ul class="space-y-3">
                        <li><a href="ino-times.html" class="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                        <li><a href="about.html" class="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                        <li><a href="eis-explained.html" class="text-gray-400 hover:text-white transition-colors duration-300">What is EIS</a></li>
                        <li><a href="community.html" class="text-gray-400 hover:text-white transition-colors duration-300">Community</a></li>
                        <li><a href="contact.html" class="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>

                <!-- Legal -->
                <div>
                    <h4 class="text-lg font-bold mb-6 relative">
                        Legal
                        <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500"></div>
                    </h4>
                    <ul class="space-y-3">
                        <li><a href="privacy-policy.html" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                        <li><a href="terms-of-service.html" class="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                        <li><a href="cookie-policy.html" class="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                        <li><a href="investment-disclaimer.html" class="text-gray-400 hover:text-white transition-colors duration-300">Investment Disclaimer</a></li>
                        <li><a href="regulatory-information.html" class="text-gray-400 hover:text-white transition-colors duration-300">Regulatory Information</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h4 class="text-lg font-bold mb-6 relative">
                        Contact
                        <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500"></div>
                    </h4>
                    <div class="bg-white bg-opacity-5 p-4 rounded-lg">
                        <p class="text-gray-400 flex items-center">
                            <i class="fas fa-envelope mr-3 text-blue-400"></i>
                            info@theinnovativetimes.com
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-12 pt-8 border-t border-gray-800">
                <p class="text-gray-400 text-sm text-center">
                    © ${new Date().getFullYear()} The Innovative Times. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
    `;

    // Insert the footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', footer);
}); 