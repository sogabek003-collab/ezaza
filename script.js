// header
let header_menu_ul = document.querySelector(".header_menu ul");

function addActive() {
  header_menu_ul.classList.toggle("active");
}

// about
let about_swiper = new Swiper(".about_swiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  grabCursor: true,
  grid: {
    rows: 2,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// partners
let partners_swiper = new Swiper(".partners_swiper", {
  slidesPerView: 2,
  spaceBetween: 12,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

// detail
let products_categories = document.querySelectorAll(".products_category");
let product_cards = document.querySelectorAll(".product_card");

for (let i = 0; i < products_categories.length; i++) {
  products_categories[i].addEventListener("click", function () {
    for (let j = 0; j < products_categories.length; j++) {
      products_categories[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < product_cards.length; k++) {
      product_cards[k].classList.remove("active");
      product_cards[k].classList.add("hide");

      if (
        product_cards[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        product_cards[k].classList.remove("hide");
        product_cards[k].classList.add("active");
      }
    }
  });
}

let product_card_imgs = document.querySelectorAll(".product_cardImg img");

for (let i = 0; i < product_card_imgs.length; i++) {
  product_card_imgs[i].addEventListener("click", function () {
    this.classList.toggle("show");
  });
}

// contacts
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
  let value = e.target.value;

  // Faqat raqamlarni olish
  let numbers = value.replace(/\D/g, "");

  // 998 bilan boshlanayotgan bo'lsa, uni olib tashlash
  if (numbers.startsWith("998")) {
    numbers = numbers.substring(3);
  }

  // Maksimal 9 ta raqam
  numbers = numbers.substring(0, 9);

  // Formatlash
  let formatted = "+998";

  if (numbers.length > 0) {
    formatted += " (" + numbers.substring(0, 2);

    if (numbers.length >= 2) {
      formatted += ")";
    }

    if (numbers.length > 2) {
      formatted += " " + numbers.substring(2, 5);
    }

    if (numbers.length > 5) {
      formatted += "-" + numbers.substring(5, 7);
    }

    if (numbers.length > 7) {
      formatted += "-" + numbers.substring(7, 9);
    }
  }

  e.target.value = formatted;

  // Agar faqat +998 qolgan bo'lsa, cursor oxirida tursin
  if (formatted === "+998") {
    e.target.setSelectionRange(4, 4);
  }
});

// Backspace uchun
phoneInput.addEventListener("keydown", function (e) {
  if (e.key === "Backspace") {
    let cursorPosition = e.target.selectionStart;
    let value = e.target.value;

    // Agar cursor oxirida bo'lsa
    if (cursorPosition === value.length) {
      e.preventDefault();

      // Faqat raqamlarni olish
      let numbers = value.replace(/\D/g, "");
      if (numbers.startsWith("998")) {
        numbers = numbers.substring(3);
      }

      // Oxirgi raqamni o'chirish
      numbers = numbers.substring(0, numbers.length - 1);

      // Qayta formatlash
      let formatted = "+998";

      if (numbers.length > 0) {
        formatted += " (" + numbers.substring(0, 2);

        if (numbers.length >= 2) {
          formatted += ")";
        }

        if (numbers.length > 2) {
          formatted += " " + numbers.substring(2, 5);
        }

        if (numbers.length > 5) {
          formatted += "-" + numbers.substring(5, 7);
        }

        if (numbers.length > 7) {
          formatted += "-" + numbers.substring(7, 9);
        }
      }

      e.target.value = formatted;
    }
  }
});

// Boshlang'ich qiymat
phoneInput.value = "+998";
