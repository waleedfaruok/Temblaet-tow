let icon = document.querySelector(".icon");
let overvloy = document.querySelector(".overvloy");
let ex = document.querySelector(".ex");

icon.addEventListener("click",function(){
    overvloy.classList.toggle("add");
})
ex.onclick = function(){
    overvloy.classList.remove("add"); 
}

let spasne = document.querySelector(".spasne");
let list2 = document.querySelector(".list2");

spasne.addEventListener("click",function(){
    list2.classList.toggle("open");
})



