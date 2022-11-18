let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

//
const setGlasses = () => {
  let html = dataGlasses.reduce((total, element) => {
    total += `
        <div class="col-4">
        <button ><img class="img-fluid ${element.id}" src="${element.src}" alt=""></img></button>
            </div>
        `;
    return total;
  }, "");
  document.getElementById("vglassesList").innerHTML = html;
};
setGlasses();

// const handlePlus = (id) => {
//   for(let i in dataGlasses){
//     if(dataGlasses[i].id == id){
//       document.getElementById(id).innerHTML = `
//       <img class="img-fluid" src="${dataGlasses[i].virtualImg}" alt=""></img>`
//     }
//   }
// };


document.querySelectorAll(".img-fluid")[0].addEventListener("click", (e) => {
  for (let i in dataGlasses) {
    if (e.path[0].classList[1] === dataGlasses[i].id) {
      document.getElementById("avatar").innerHTML = `
      <img src="${dataGlasses[i].virtualImg}" alt=""></img>
      `;
      document.getElementById("glassesInfo").style.display = "block";
      document.getElementById("glassesInfo").innerHTML = `
      <h5>${dataGlasses[i].name} - ${dataGlasses[i].brand} ( ${dataGlasses[i].color})</h5>
      <p><span>${dataGlasses[i].price}</span> Stocking</p>
      <p>${dataGlasses[i].description}</p>
      `
    }
  }
});
document.querySelectorAll(".img-fluid")[1].addEventListener("click", (e) => {
  for (let i in dataGlasses) {
    if (e.path[0].classList[1] === dataGlasses[i].id) {
      document.getElementById("avatar").innerHTML = `
      <img src="${dataGlasses[i].virtualImg}" alt=""></img>
      `;
      document.getElementById("glassesInfo").style.display = "block";
      document.getElementById("glassesInfo").innerHTML = `
      <h5>${dataGlasses[i].name} - ${dataGlasses[i].brand} ( ${dataGlasses[i].color})</h5>
      <p><span>${dataGlasses[i].price}</span> Stocking</p>
      <p>${dataGlasses[i].description}</p>
      `
    }
  }
});
document.querySelectorAll(".img-fluid")[2].addEventListener("click", (e) => {
  for (let i in dataGlasses) {
    if (e.path[0].classList[1] === dataGlasses[i].id) {
      document.getElementById("avatar").innerHTML = `
      <img src="${dataGlasses[i].virtualImg}" alt=""></img>
      `;
      document.getElementById("glassesInfo").style.display = "block";
      document.getElementById("glassesInfo").innerHTML = `
      <h5>${dataGlasses[i].name} - ${dataGlasses[i].brand} ( ${dataGlasses[i].color})</h5>
      <p><span>${dataGlasses[i].price}</span> Stocking</p>
      <p>${dataGlasses[i].description}</p>
      `
    }
  }
});
document.querySelectorAll(".img-fluid")[3].addEventListener("click", (e) => {
  for (let i in dataGlasses) {
    if (e.path[0].classList[1] === dataGlasses[i].id) {
      document.getElementById("avatar").innerHTML = `
      <img src="${dataGlasses[i].virtualImg}" alt=""></img>
      `;
      document.getElementById("glassesInfo").style.display = "block";
      document.getElementById("glassesInfo").innerHTML = `
      <h5>${dataGlasses[i].name} - ${dataGlasses[i].brand} ( ${dataGlasses[i].color})</h5>
      <p><span>${dataGlasses[i].price}</span> Stocking</p>
      <p>${dataGlasses[i].description}</p>
      `
    }
  }
});
document.querySelectorAll(".img-fluid")[4].addEventListener("click", (e) => {
  for (let i in dataGlasses) {
    if (e.path[0].classList[1] === dataGlasses[i].id) {
      document.getElementById("avatar").innerHTML = `
      <img src="${dataGlasses[i].virtualImg}" alt=""></img>
      `;
      document.getElementById("glassesInfo").style.display = "block";
      document.getElementById("glassesInfo").innerHTML = `
      <h5>${dataGlasses[i].name} - ${dataGlasses[i].brand} ( ${dataGlasses[i].color})</h5>
      <p><span>${dataGlasses[i].price}</span> Stocking</p>
      <p>${dataGlasses[i].description}</p>
      `
    }
  }
});
document.querySelectorAll(".img-fluid")[5].addEventListener("click", (e) => {
  for (let i in dataGlasses) {
    if (e.path[0].classList[1] === dataGlasses[i].id) {
      document.getElementById("avatar").innerHTML = `
      <img src="${dataGlasses[i].virtualImg}" alt=""></img>
      `;
      document.getElementById("glassesInfo").style.display = "block";
      document.getElementById("glassesInfo").innerHTML = `
      <h5>${dataGlasses[i].name} - ${dataGlasses[i].brand} ( ${dataGlasses[i].color})</h5>
      <p><span>${dataGlasses[i].price}</span> Stocking</p>
      <p>${dataGlasses[i].description}</p>
      `
    }
  }
});
document.querySelectorAll(".img-fluid")[6].addEventListener("click", (e) => {
  for (let i in dataGlasses) {
    if (e.path[0].classList[1] === dataGlasses[i].id) {
      document.getElementById("avatar").innerHTML = `
      <img src="${dataGlasses[i].virtualImg}" alt=""></img>
      `;
      document.getElementById("glassesInfo").style.display = "block";
      document.getElementById("glassesInfo").innerHTML = `
      <h5>${dataGlasses[i].name} - ${dataGlasses[i].brand} ( ${dataGlasses[i].color})</h5>
      <p><span>${dataGlasses[i].price}</span> Stocking</p>
      <p>${dataGlasses[i].description}</p>
      `
    }
  }
});
document.querySelectorAll(".img-fluid")[7].addEventListener("click", (e) => {
  for (let i in dataGlasses) {
    if (e.path[0].classList[1] === dataGlasses[i].id) {
      document.getElementById("avatar").innerHTML = `
      <img src="${dataGlasses[i].virtualImg}" alt=""></img>
      `;
      document.getElementById("glassesInfo").style.display = "block";
      document.getElementById("glassesInfo").innerHTML = `
      <h5>${dataGlasses[i].name} - ${dataGlasses[i].brand} ( ${dataGlasses[i].color})</h5>
      <p><span>${dataGlasses[i].price}</span> Stocking</p>
      <p>${dataGlasses[i].description}</p>
      `
    }
  }
});
document.querySelectorAll(".img-fluid")[8].addEventListener("click", (e) => {
  for (let i in dataGlasses) {
    if (e.path[0].classList[1] === dataGlasses[i].id) {
      document.getElementById("avatar").innerHTML = `
      <img src="${dataGlasses[i].virtualImg}" alt=""></img>
      `;
      document.getElementById("glassesInfo").style.display = "block";
      document.getElementById("glassesInfo").innerHTML = `
      <h5>${dataGlasses[i].name} - ${dataGlasses[i].brand} ( ${dataGlasses[i].color})</h5>
      <p><span>${dataGlasses[i].price}</span> Stocking</p>
      <p>${dataGlasses[i].description}</p>
      `
    }
  }
});
