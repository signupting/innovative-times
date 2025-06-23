document.addEventListener("DOMContentLoaded", function() {
    const backgroundElement = document.querySelector('.relative.overflow-hidden');
    if (backgroundElement) {
        const image = backgroundElement.querySelector('img');
        const video = backgroundElement.querySelector('video:not(#hero-video)');

        if (image) {
            if (image.complete) {
                document.body.classList.remove('preloader');
            } else {
                image.addEventListener('load', () => {
                    document.body.classList.remove('preloader');
                });
            }
        } else if (video) {
            if (video.readyState >= 3) { // HAVE_FUTURE_DATA
                document.body.classList.remove('preloader');
            } else {
                video.addEventListener('canplaythrough', () => {
                    document.body.classList.remove('preloader');
                });
            }
        } else {
            document.body.classList.remove('preloader');
        }
    } else {
        document.body.classList.remove('preloader');
    }
});
