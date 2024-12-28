const ourProductsPop = [
  {
    id: "6",
    name: "Black mini bag",
    title:
      "Mini shoulder bag with soft design. Made of technical fabric. One compartment with magnetic front flap. Adjustable shoulder strap",
    price: 50.0,
    image: "/bag-1.jpeg",
  },
  {
    id: "7",
    name: "Carabiner mini bag",
    title:
      "Main compartment with zip. Small zipped pocket inside. Front zipped pocket. Handle on one side",
    price: 40.0,
    image: "/bag-2.jpeg",
  },
  {
    id: "8",
    name: "Louis Vuitton mini bag",
    title:
      " The main compartment closes with a zipper. Inside there is a small pocket with a zipper. In the front there is a medium-sized pocket with a zipper. Flat pockets on the sides.",
    price: 90.0,
    image: "/bag-3.jpeg",
  },
  {
    id: "9",
    name: "Louis Vuitton bag",
    title:
      "Embossed backpack. Semi-rigid construction. Main compartment with zip and small inner pocket. Medium-sized zip pocket at front. Padded back with strap for attaching to suitcases. Top handle and two",
    price: 150.0,
    image: "/bag-4.jpeg",
  },
  {
    id: "10",
    name: "Louis Vuitton bag",
    title:
      "Rubberised crossbody bag. Main compartment with zip closure. Zip pocket on the inside. Front pocket with press-stud closure.",
    price: 85.0,
    image: "/bag-5.jpeg",
  },
  {
    id: "11",
    name: "Prune mini bag",
    title:
      "Rubberised crossbody bag. Main compartment with zip closure. Zip pocket on the inside. Front pocket with press-stud closure.",
    price: 50.0,
    image: "/bag-6.jpeg",
  },
];

const newProducts = [
  {
    id: "1",
    name: "Nylon mini bag",
    title:
      "Mini shoulder bag with soft design. Made of technical fabric. One compartment with magnetic front flap. Adjustable shoulder strap",
    price: 39.0,
    category: "bag",
    image:
      "https://static.zara.net/assets/public/74e7/565e/dda94099b761/b380e2284923/13906420800-e1/13906420800-e1.jpg?ts=1722414313493&w=250",
  },
  {
    id: "2",
    name: "SIMPLE NON-SUCKING BAG",
    title:
      "Main compartment with zip. Small zipped pocket inside. Front zipped pocket. Handle on one side",
    price: 55.0,
    category: "bag",
    image:
      "https://static.zara.net/assets/public/0a38/a280/53cf4e66ba03/f460d71f6cdd/13702420800-e1/13702420800-e1.jpg?ts=1722351485045&w=250",
  },
  {
    id: "3",
    name: "Rubberized backpack",
    title:
      "Backpack with rubberized trim. The main compartment closes with a zipper. Inside there is a small pocket with a zipper. In the front there is a medium-sized pocket with a zipper. Flat pockets on the sides.",
    price: 129.0,
    category: "bag",
    image:
      "https://static.zara.net/assets/public/b1a5/9c36/01c44dbb80e1/9ed6687c549e/13216420800-e1/13216420800-e1.jpg?ts=1722356340056&w=250",
  },
  {
    id: "4",
    name: "EMBOSSED BACKPACK",
    title:
      "Embossed backpack. Semi-rigid construction. Main compartment with zip and small inner pocket. Medium-sized zip pocket at front. Padded back with strap for attaching to suitcases. Top handle and two",
    price: 139,
    category: "bag",
    image:
      "https://static.zara.net/assets/public/1987/7dea/da664c098bdd/84c04171141a/13209420800-e2/13209420800-e2.jpg?ts=1722351493989&w=250",
  },
  {
    id: "5",
    name: "REGULAR TRAVEL SUITCASE",
    title:
      "REGULAR TRAVEL SUITCASE Travel suitcase. Main compartment with zip. Large interior with side zip pocket. Front pocket with magnetic closure. Adjustable and removable shoulder strap.",
    price: 159.0,
    category: "bag",
    image:
      "https://static.zara.net/assets/public/eadb/9487/7af0485fba44/69b71a49d49a/13107420800-e1/13107420800-e1.jpg?ts=1722351481852&w=250",
  },
  {
    id: "6",
    name: "RUBBERISED CROSSBODY BAG",
    title:
      "Rubberised crossbody bag. Main compartment with zip closure. Zip pocket on the inside. Front pocket with press-stud closure.",
    price: 159.0,
    category: "bag",
    image:
      "https://static.zara.net/assets/public/f830/03df/356a4bb880d6/675a0f53bef2/13544420800-e1/13544420800-e1.jpg?ts=1728570441454&w=250",
  },
];

let cart = [];

const cartElement = document.getElementById("cart");
const totalElement = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

function updateCart() {
  if (!cartElement || !totalElement) {
    console.error("Cart or total element not found.");
    return;
  }

  cartElement.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("cart-item");
    li.innerHTML = `
      <div class="bg-white rounded-lg shadow-md p-4 mb-4">
  <h5 class="text-lg font-semibold text-gray-800 mb-2">${item.name}</h5>
  <p class="text-base text-gray-600 mb-1">${item.price} $</p>
  <p class="text-base text-gray-500 mb-3">Count: ${item.count}</p>
  <div class="flex items-center gap-4">
    <button class="remove-btn flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition duration-300" data-id="${item.id}" aria-label="Удалить">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    </button>
    <button class="increase-btn btn-count flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow hover:bg-green-600 transition duration-300" data-id="${item.id}" aria-label="Увеличить">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </button>
    <button class="decrease-btn btn-count flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow hover:bg-yellow-600 transition duration-300" data-id="${item.id}" aria-label="Уменьшить">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </button>
  </div>
</div>

    `;
    cartElement.appendChild(li);
    li.querySelector(".remove-btn").addEventListener("click", () =>
      removeFromCart(item.id)
    );
    li.querySelector(".increase-btn").addEventListener("click", () =>
      changeQuantity(item.id, 1)
    );
    li.querySelector(".decrease-btn").addEventListener("click", () =>
      changeQuantity(item.id, -1)
    );
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
  totalElement.textContent = `Result: ${total.toFixed(2)} $`;
  cartCount.textContent = cart.length;
}

function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.count += 1;
  } else {
    cart.push({ ...product, count: 1 });
  }

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

function changeQuantity(id, delta) {
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.count = Math.max(item.count + delta, 1);
    updateCart();
  }
}
const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalButton.onclick = function () {
  modal.style.display = "flex";
};

closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const newProductsList = document.querySelector(".new-products");
newProducts.forEach((product) => {
  const productElement = document.createElement("li");
  productElement.classList.add("product-item");
  productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="p-[0px_50px_0px_50px]">
    <h4 class="text-[20px] font-normal text-dark mt-[24px] mb-[8px]">${product.name}</h4>
    <p class="text-[18px] font-normal text-dark">${product.title}</p>
    <p class="text-[18px] font-normal text-dark">${product.price} $</p>
    </div>
    <img class="basket bg-slate-400 w-[50px] h-[50px] rounded-full p-[10px] text-center absolute top-3 left-5 z-50 cursor-pointer" src="/basket.png" alt="Basket" />
  `;
  newProductsList.appendChild(productElement);

  productElement
    .querySelector(".basket")
    .addEventListener("click", () => addToCart(product));
});

const popProducts = document.querySelector(".pop-products");
ourProductsPop.forEach((product) => {
  const popProductElement = document.createElement("li");
  popProductElement.classList.add("popProduct-item");
  popProductElement.innerHTML = `
    <img class="imgProduct" src="${product.image}" alt="${product.name}" />
    <div>
    <h4 class="text-[20px] font-normal text-dark mt-[24px] mb-[8px]">${product.name}</h4>
    <p class="text-[18px] font-normal text-dark">${product.title}</p>
    <p class="text-[18px] font-normal text-dark">${product.price} $</p>
    </div>
    <img class="basket bg-slate-400 w-[50px] h-[50px] rounded-full p-[10px] text-center absolute top-3 left-5 z-50 cursor-pointer" src="/basket.png" alt="Basket" />
  `;
  popProducts.appendChild(popProductElement);
  popProductElement
    .querySelector(".basket")
    .addEventListener("click", () => addToCart(product));
});
