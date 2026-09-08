/* =========================
   SHOPPING CART
========================= */

let cartCount = 0;

const cartCounter =
  document.getElementById("cartCount");

const addCartButtons =
  document.querySelectorAll(".add-cart");

addCartButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    cartCount++;

    cartCounter.textContent = cartCount;

    const productName =
      button.getAttribute("data-product");

    button.textContent = "Added ✓";

    setTimeout(function() {
      button.textContent = "Add To Cart";
    }, 1500);

    alert(productName + " was added to your cart!");

  });

});


/* =========================
   FAVORITE BUTTONS
========================= */

const favoriteButtons =
  document.querySelectorAll(".favorite");

favoriteButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    if (button.textContent === "♡") {

      button.textContent = "♥";

    } else {

      button.textContent = "♡";

    }

  });

});


/* =========================
   PRODUCT FILTER
========================= */

const filterButtons =
  document.querySelectorAll(".filter");

const products =
  document.querySelectorAll(".product-card");

filterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    filterButtons.forEach(function(item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const category =
      button.getAttribute("data-category");

    products.forEach(function(product) {

      const productCategory =
        product.getAttribute("data-category");

      if (
        category === "all" ||
        category === productCategory
      ) {

        product.style.display = "block";

      } else {

        product.style.display = "none";

      }

    });

  });

});


/* =========================
   SEARCH
========================= */

const searchButton =
  document.getElementById("searchButton");

const searchArea =
  document.getElementById("searchArea");

const searchInput =
  document.getElementById("searchInput");

searchButton.addEventListener(
  "click",
  function() {

    searchArea.classList.toggle("active");

    if (searchArea.classList.contains("active")) {

      searchInput.focus();

    }

  }
);


searchInput.addEventListener(
  "input",
  function() {

    const searchTerm =
      searchInput.value.toLowerCase();

    products.forEach(function(product) {

      const productName =
        product
        .getAttribute("data-name")
        .toLowerCase();

      if (
        productName.includes(searchTerm)
      ) {

        product.style.display = "block";

      } else {

        product.style.display = "none";

      }

    });

  }
);


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
  document.querySelector(".newsletter-form");

newsletterForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();

    alert(
      "Thank you for subscribing to LUXEWEAR!"
    );

    newsletterForm.reset();

  }
);
