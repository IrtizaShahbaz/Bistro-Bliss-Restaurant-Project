const activepage = window.location.pathname;

if (activepage === '/index' || activepage === '/') {
    document.getElementById('home-btn').classList.add('active');
} else if (activepage === '/about') {
    document.getElementById('about-btn').classList.add('active');
} else if (activepage === '/reservation') {
    document.getElementById('home-btn').classList.add('active');
} else if (activepage === '/menu') {
    document.getElementById('menu-btn').classList.add('active');
} else if (activepage === '/pages') {
    document.getElementById('pages-btn').classList.add('active');
} else if (activepage === '/pages' || activepage.startsWith('/pages/blog-')) {
    document.getElementById('pages-btn').classList.add('active');
} else if (activepage === '/contact') {
    document.getElementById('contact-btn').classList.add('active');
}
const bars = document.getElementById('bars');
const mobMenu = document.querySelector('.mob-nav-menu');

function toggleMenu() {
    if (bars) {
        mobMenu.classList.toggle('show');
    }
}



const menuData = [
    {
        id: 1,
        img: "img/dish-1.png",
        category: "breakfast",
        price: 9.99,
        name: "Fried Eggs",
        description: "Made with eggs, lettuce, salt, oil, and other ingredients."
    },
    {
        id: 2,
        img: "img/dish-2.png",
        category: "mainDishes",
        price: 15.99,
        name: "Hawaiian Pizza",
        description: "Made with pineapple, ham, cheese, and tomato sauce."
    },
    {
        id: 3,
        img: "img/dish-3.png",
        category: "drinks",
        price: 7.25,
        name: "Martinez Cocktail",
        description: "A classic cocktail made with gin, vermouth, maraschino liqueur, and bitters."
    },
    {
        id: 4,
        img: "img/dish-4.png",
        category: "desserts",
        price: 20.99,
        name: "Butterscotch Cake",
        description: "A rich butterscotch-flavored cake topped with butterscotch frosting."
    },
    {
        id: 5,
        img: "img/dish-5.png",
        category: "drinks",
        price: 5.89,
        name: "Mint Lemonade",
        description: "A refreshing lemonade with a hint of mint."
    },
    {
        id: 6,
        img: "img/dish-6.png",
        category: "desserts",
        price: 18.99,
        name: "Chocolate Ice Cream",
        description: "Creamy chocolate ice cream made with high-quality cocoa."
    },
    {
        id: 7,
        img: "img/dish-7.png",
        category: "mainDishes",
        price: 12.25,
        name: "Cheese Burger",
        description: "A juicy burger topped with melted cheese, lettuce, and tomato."
    },
    {
        id: 8,
        img: "img/dish-8.png",
        category: "desserts",
        price: 12.99,
        name: "Classic Waffles",
        description: "Crispy waffles served with syrup and butter."
    }
];

let menuDishCards = document.querySelector(".menu-dishes");
let menuLinks = document.querySelectorAll(".menu-links ul li a");

window.addEventListener('DOMContentLoaded', () => {
    displayMenuData(menuData);
    document.querySelector(".menu-links ul li a[data-id='all']").classList.add("dish-link-active");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        menuLinks.forEach((link) => link.classList.remove("dish-link-active"));
        e.target.classList.add("dish-link-active");

        let category = e.target.dataset.id;
        let menuCategory = menuData.filter(function (data) {
            if (data.category === category) {
                return data;
            }
        });
        console.log(menuCategory);

        if (category === "all") {
            displayMenuData(menuData);
        } else {
            displayMenuData(menuCategory);
        }
    });
});

function displayMenuData(menu) {
    let displayData = menu.map(function (items) {
        return `<div class="dish-card">
                    <img class="img" src="${items.img}" alt="${items.name}">
                <div class="menu-dish-card-content">
                    <span class="price">$${items.price}</span>
                    <h3 class="name">${items.name}</h3>
                    <p class="description">${items.description}</p>
                </div>
                </div>`;
    });
    displayData = displayData.join("");
    menuDishCards.innerHTML = displayData;
}

document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let popup = document.getElementById('popup');
    popup.style.display = 'flex';
    setTimeout(function() {
        popup.classList.add('show');
    }, 10);
});