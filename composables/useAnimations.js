import { onMounted } from "vue";

export const useAnimations = () => {
  // Intersection Observer for animations
  const setupIntersectionObserver = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      ".animate-fade-in, .animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right, .animate-stagger-in"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return observer;
  };

  // Setup animations on mount
  onMounted(() => {
    setupIntersectionObserver();
  });

  return {
    setupIntersectionObserver,
  };
};
