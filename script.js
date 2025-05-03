window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
});


const counters = document.querySelectorAll('.count');

const options = {
  threshold: 0.5
};

const animateCount = (el) => {
  const target = +el.getAttribute('data-target');
  const speed = 100; // lower = faster

  const update = () => {
    const current = +el.innerText;
    const increment = Math.ceil(target / speed);

    if (current < target) {
      el.innerText = current + increment;
      setTimeout(update, 20);
    } else {
      el.innerText = target + "+";
    }
  };

  update();
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});


