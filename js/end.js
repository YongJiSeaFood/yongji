const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("header nav a");

const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "-80px 0px 0px 0px",
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));
