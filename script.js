document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add smooth scrolling for the "Explore Courses" button
    const exploreCoursesButton = document.getElementById("explore-courses");
    exploreCoursesButton.addEventListener("click", function () {
        // Scroll to the courses section smoothly
        const coursesSection = document.getElementById("courses");
        coursesSection.scrollIntoView({ behavior: "smooth" });
    });
});
