let carts = document.querySelectorAll(".add_cart_btn span");

let products = [];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", (e) => {
    cartNumbers(e, i);

    totalCost(e, i);
  });
}

function cartNumbers(e, i) {
  let numberOfProducts = localStorage.getItem("cartNumbers");
  numberOfProducts = parseInt(numberOfProducts);

  if (numberOfProducts) {
    localStorage.setItem("cartNumbers", numberOfProducts + 1);
    document.querySelector(".cart-badge-home").textContent =
      numberOfProducts + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart-badge-home").textContent = 1;
  }

  setItems(e, i);
}
function onLoadCartNumber() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart-badge-home").textContent = productNumbers;
  } else {
    document.querySelector(".cart-badge-home").textContent = 0;
  }
}

function setItems(e, i) {
  let cartItems = localStorage.getItem("productsIncart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[i] == undefined) {
      // new item clicked
      cartItems = {
        ...cartItems,
        [i]: {
          id: i + 1,
          name:
            e.target.parentElement.parentElement.parentElement.children[1]
              .children[0].textContent,
          price:
            e.target.parentElement.parentElement.parentElement.children[1]
              .children[1].children[0].textContent,
          inCart: 1,
        },
      };
    } else {
      cartItems[i].inCart += 1;
    }
  } else {
    cartItems = {
      [i]: {
        id: i + 1,
        name:
          e.target.parentElement.parentElement.parentElement.children[1]
            .children[0].textContent,
        price:
          e.target.parentElement.parentElement.parentElement.children[1]
            .children[1].children[0].textContent,
        inCart: 1,
      },
    };
  }
  localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}

function onloadSignin() {
  let isSignedIn = JSON.parse(localStorage.getItem("isSignedIn"));
  let logtext = document.querySelector(".log-text");
  console.log(isSignedIn);
  if (isSignedIn) {
    logtext.innerHTML = ` <a class="nav-link" 
    ><button onclick="changetexttosignin()" type="button" class="btn btn-sm btn-outline-success">
     Logout
    </button></a
  >`;
  } else {
    logtext.innerHTML = ` <a class="nav-link" href="./login/login.html"
    ><button type="button" class="btn btn-sm btn-outline-primary">
      Sign In
    </button></a
  >`;
  }
}

function changetexttosignin() {
  localStorage.setItem("isSignedIn", false);
  onloadSignin();
}
function totalCost(e) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);

    localStorage.setItem(
      "totalCost",
      cartCost +
        parseInt(
          e.target.parentElement.parentElement.parentElement.children[1]
            .children[1].children[0].children[0].textContent
        )
    );
  } else {
    localStorage.setItem(
      "totalCost",
      e.target.parentElement.parentElement.parentElement.children[1].children[1]
        .children[0].children[0].textContent
    );
  }
}

onLoadCartNumber();
onloadSignin();
// let item = {
//   id: i + 1,
//   name:
//     e.target.parentElement.parentElement.parentElement.children[1]
//       .children[0].textContent,
//   price:
//     e.target.parentElement.parentElement.parentElement.children[1]
//       .children[1].children[0].textContent,
//   inCart: 1,
// };
