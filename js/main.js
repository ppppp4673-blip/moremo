document.addEventListener("DOMContentLoaded", () => {
  let hotswiper = new Swiper(".hot-deals-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".hot-deals-swiper .swiper-pagination",
      clickable: true,
    },
  });

  let sectionSwiper = new Swiper(".insta-swiper", {
    slidesPerView: "auto",
    loop: true,
    observeParents: true,
    observe: true,
    spaceBetween: 30,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    navigation: {
      nextEl: ".instagram-section .swiper-button-next",
      prevEl: ".instagram-section .swiper-button-prev",
    },
    pagination: {
      el: ".instagram-section .swiper-pagination",
    },
  });

  const rightImgs = document.querySelectorAll(".side-main-image ul li");
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((E, key) => {
    E.addEventListener("click", (e) => {
      // Remove active from all menu items and images
      menuItems.forEach((item) => item.classList.remove("active"));
      rightImgs.forEach((img) => img.classList.remove("active"));

      // Add active to the clicked menu item (use the element reference E)
      E.classList.add("active");

      // Add active to the corresponding image (match by index)
      if (rightImgs[key]) {
        rightImgs[key].classList.add("active");
      }
    });
  });
});
