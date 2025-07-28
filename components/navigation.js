// Global Navigation Component
document.addEventListener('DOMContentLoaded', function() {
    // Get current page for active state
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navigationHTML = `
    <!-- Header Navigation -->
    <header class="header-nav py-4 bg-blue-800" x-data="{ open: false, scrolled: false }" @scroll.window="scrolled = (window.scrollY > 50)" :class="{'bg-opacity-90 backdrop-blur-sm shadow-lg': scrolled}">
        <div class="container mx-auto px-4 md:px-8">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <h1 class="text-2xl md:text-3xl font-bold text-white">
                        <a href="index.html">The Innovative Times</a>
                    </h1>
                </div>
                
                <!-- Desktop Navigation -->
                <nav class="desktop-nav">
                    <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'text-blue-300' : ''}">Home</a>
                    <a href="about.html" class="nav-link ${currentPage === 'about.html' ? 'text-blue-300' : ''}">About</a>
                    <a href="eis-explained.html" class="nav-link ${currentPage === 'eis-explained.html' ? 'text-blue-300' : ''}">What is EIS</a>
                    <div class="relative" x-data="{ open: false }">
                        <button @click="open = !open" @click.away="open = false" class="nav-link flex items-center bg-transparent border-none cursor-pointer ${['innovators.html', 'investors.html', 'community.html'].includes(currentPage) ? 'text-blue-300' : ''}">
                            Community
                            <i class="fas fa-chevron-down ml-1 text-xs transition-transform duration-200" :class="{'rotate-180': open}"></i>
                        </button>
                        <div x-show="open" 
                             x-transition:enter="transition ease-out duration-200" 
                             x-transition:enter-start="opacity-0 transform scale-95" 
                             x-transition:enter-end="opacity-100 transform scale-100" 
                             x-transition:leave="transition ease-in duration-75" 
                             x-transition:leave-start="opacity-100 transform scale-100" 
                             x-transition:leave-end="opacity-0 transform scale-95" 
                             class="absolute left-0 mt-2 w-56 rounded-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 z-50 border border-gray-100">
                            <div class="py-2">
                                <a href="innovators.html" class="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-gray-900 transition-all duration-200">
                                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                                        <i class="fas fa-lightbulb text-blue-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <div class="font-medium">Innovators</div>
                                        <div class="text-xs text-gray-500">For entrepreneurs</div>
                                    </div>
                                </a>
                                <a href="investors.html" class="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-gray-900 transition-all duration-200">
                                    <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors duration-200">
                                        <i class="fas fa-coins text-teal-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <div class="font-medium">Investors</div>
                                        <div class="text-xs text-gray-500">For funding partners</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="insights.html" class="nav-link ${currentPage === 'insights.html' ? 'text-blue-300' : ''}">Insights</a>
                    <a href="contact.html" class="nav-link ${currentPage === 'contact.html' ? 'text-blue-300' : ''}">Contact</a>
                </nav>
                
                <!-- Mobile Menu Button -->
                <button @click="open = !open" class="md:hidden focus:outline-none">
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div x-show="open" class="md:hidden mobile-menu" :class="{'active': open}" @click.away="open = false">
            <div class="flex justify-end mb-8">
                <button @click="open = false" class="focus:outline-none">
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="flex flex-col space-y-4">
                <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'text-blue-300' : ''}" @click="open = false">Home</a>
                <a href="about.html" class="nav-link ${currentPage === 'about.html' ? 'text-blue-300' : ''}" @click="open = false">About</a>
                <a href="eis-explained.html" class="nav-link ${currentPage === 'eis-explained.html' ? 'text-blue-300' : ''}" @click="open = false">What is EIS</a>
                <div x-data="{ communityOpen: false }" class="border-l-2 border-gray-600 pl-4">
                    <button @click="communityOpen = !communityOpen" class="nav-link w-full text-left flex items-center justify-between bg-transparent border-none cursor-pointer ${['innovators.html', 'investors.html', 'community.html'].includes(currentPage) ? 'text-blue-300' : ''}">
                        <span>Community</span>
                        <i class="fas fa-chevron-down ml-1 text-xs transition-transform duration-200" :class="{'rotate-180': communityOpen}"></i>
                    </button>
                    <div x-show="communityOpen" x-transition class="ml-4 mt-3 space-y-3 bg-gray-800 bg-opacity-50 rounded-lg p-3">
                        <a href="innovators.html" class="group flex items-center py-2 text-gray-300 hover:text-white transition-colors duration-200" @click="open = false">
                            <div class="w-6 h-6 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mr-3 group-hover:bg-opacity-40 transition-all duration-200">
                                <i class="fas fa-lightbulb text-blue-400 text-xs"></i>
                            </div>
                            <span class="text-sm font-medium">Innovators</span>
                        </a>
                        <a href="investors.html" class="group flex items-center py-2 text-gray-300 hover:text-white transition-colors duration-200" @click="open = false">
                            <div class="w-6 h-6 bg-teal-600 bg-opacity-20 rounded-full flex items-center justify-center mr-3 group-hover:bg-opacity-40 transition-all duration-200">
                                <i class="fas fa-coins text-teal-400 text-xs"></i>
                            </div>
                            <span class="text-sm font-medium">Investors</span>
                        </a>
                    </div>
                </div>
                <a href="insights.html" class="nav-link ${currentPage === 'insights.html' ? 'text-blue-300' : ''}" @click="open = false">Insights</a>
                <a href="contact.html" class="nav-link ${currentPage === 'contact.html' ? 'text-blue-300' : ''}" @click="open = false">Contact</a>
            </div>
        </div>
    </header>
    `;
    
    // Find the navigation placeholder or existing header and replace it
    const navPlaceholder = document.getElementById('navigation-placeholder');
    const existingHeader = document.querySelector('header');
    
    if (navPlaceholder) {
        navPlaceholder.outerHTML = navigationHTML;
    } else if (existingHeader) {
        existingHeader.outerHTML = navigationHTML;
    } else {
        // Insert at the beginning of body if no placeholder or existing header
        document.body.insertAdjacentHTML('afterbegin', navigationHTML);
    }
});