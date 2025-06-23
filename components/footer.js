// Footer Component
document.addEventListener('DOMContentLoaded', function() {
    const footer = `
    <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div>
                    <h4 class="font-lora text-xl font-bold mb-4">The Innovative Times</h4>
                    <p class="text-gray-400 text-base">
                        Your trusted source for EIS and SEIS investment insights and opportunities.
                    </p>
                    <div class="mt-4 flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-linkedin text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-twitter text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-facebook text-lg"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-instagram text-lg"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-lora text-xl font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="index.html" class="text-gray-400 hover:text-white transition text-base">Home</a></li>
                        <li><a href="about.html" class="text-gray-400 hover:text-white transition text-base">About</a></li>
                        <li><a href="eis-explained.html" class="text-gray-400 hover:text-white transition text-base">What is EIS</a></li>
                        <li><a href="community.html" class="text-gray-400 hover:text-white transition text-base">Community</a></li>
                        <li><a href="insights.html" class="text-gray-400 hover:text-white transition text-base">Insights</a></li>
                        <li><a href="contact.html" class="text-gray-400 hover:text-white transition text-base">Contact</a></li>
                    </ul>
                </div>

                <!-- Legal -->
                <div>
                    <h4 class="font-lora text-xl font-bold mb-4">Legal</h4>
                    <ul class="space-y-2">
                        <li><a href="privacy-policy.html" class="text-gray-400 hover:text-white transition text-base">Privacy Policy</a></li>
                        <li><a href="terms-of-service.html" class="text-gray-400 hover:text-white transition text-base">Terms of Service</a></li>
                        <li><a href="cookie-policy.html" class="text-gray-400 hover:text-white transition text-base">Cookie Policy</a></li>
                        <li><a href="investment-disclaimer.html" class="text-gray-400 hover:text-white transition text-base">Investment Disclaimer</a></li>
                        <li><a href="regulatory-information.html" class="text-gray-400 hover:text-white transition text-base">Regulatory Information</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h4 class="font-lora text-xl font-bold mb-4">Contact</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li class="text-base"><i class="fas fa-envelope mr-2 text-lg"></i>info@theinnovativetimes.com</li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-base">
                <p>&copy; 2025 The Innovative Times. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // Create a container for the footer
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footer;

    // Append the footer to the body
    document.body.appendChild(footerContainer.firstElementChild);
}); 