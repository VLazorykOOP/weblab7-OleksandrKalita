const body = document.getElementById("body");

body.onload = () => {
    alert("сторінка завантажилась!");
};
body.onerror = () => {
    console.error("Під час завантаження сторінки виникла помилка");
} 
body.onresize = () => {
    console.log("Ширина вікна: " + window.innerWidth + "px");
}

const h1 = document.getElementsByTagName("h1");

for (let i = 0; i < h1.length; i++) {
    h1[i].onclick = () => {
        h1[i].style = "color: red;";
    }
}
for (let i = 0; i < h1.length; i++) {
    h1[i].ondblclick = () => {
        h1[i].style = "visibility: hidden;";
    }
}
for (let i = 0; i < h1.length; i++) {
    h1[i].onmouseover = () => {
        h1[i].style = `font-size: 25px;`;
    }
}

