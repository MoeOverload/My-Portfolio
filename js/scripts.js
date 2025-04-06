document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Scroll animations
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if (entry.intersectionRatio < 0.4){
                entry.target.classList.remove('visible');
                entry.target.classList.add('fade-out');

            }
            else{
                entry.target.classList.add('visible');
                entry.target.classList.remove('fade-out');
            }
        });    
    }, {
        threshold: 0.4
    });
    sections.forEach(el => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load
});
