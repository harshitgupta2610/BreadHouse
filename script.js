const searchIcon= document.querySelector(".search-icons");
const searchFrom = document.querySelector(".search-form");
searchIcon.addEventListener("click",() => {
    searchFrom.classList.add("active");
    cartItmesContainer.classList.remove("active");
});



const cartIcon= document.querySelector(".cart-icons");
const cartItmesContainer = document.querySelector(".cart-items-container");
cartIcon.addEventListener("click",() => {
    cartItmesContainer.classList.add("active");
    searchFrom.classList.remove("active");
});