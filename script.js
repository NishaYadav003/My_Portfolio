document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionsContainer = document.querySelector('.sections-container');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));

            // Scroll to the selected section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Remove active class from all nav links and add to the clicked one
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Event listener for the Explore button
    document.querySelector('.cta').addEventListener('click', function() {
        // Scroll to the About section smoothly
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });

        // Highlight the About link in the navigation
        navLinks.forEach(nav => nav.classList.remove('active'));
        document.getElementById('about-link').classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const projectVideos = document.querySelectorAll('.project-video');
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModal = document.querySelector('.close');

    projectVideos.forEach(video => {
        video.addEventListener('click', function () {
            // Set the source of the modal video to the clicked video's source
            const videoSrc = this.querySelector('source').src;
            modalVideo.querySelector('source').src = videoSrc;
            modalVideo.load(); // Reload the video with the new source
            modalVideo.play(); // Start playing the video
            
            // Display the modal
            modal.style.display = 'flex';
        });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        modalVideo.pause(); // Pause the video
    });

    // Close the modal when clicking anywhere outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.pause(); // Pause the video
        }
    });
});
