export const rootMargin = '0px 0px -15% 0px';

export const onInView = (entries, observer) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
};

const InView = (elementSelector) => {
  const blocks = document.querySelectorAll(elementSelector);

  if (blocks) {
    [...blocks].map((block) => {
      const observer = new IntersectionObserver(onInView, { rootMargin });
      observer.observe(block);
    });
  }
};

export default InView;
