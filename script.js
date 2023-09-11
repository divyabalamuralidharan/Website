let list = [
  {
    item: "Murukku",
    img: "image/Rectangle 336.png",
  },
  {
    item: "Paniyaram",
    img: "image/Rectangle 336 (1).png",
  },
  {
    item: "Seeval Murukku",
    img: "image/Rectangle 336 (2).png",
  },
  {
    item: "Mixture",
    img: "image/Rectangle 336 (3).png",
  },
  {
    item: "Veg Soup",

    img: "image/Rectangle 336 (4).png",
  },
  {
    item: "Gulab Jamun",
    img: "image/Rectangle 339.png",
  },
  {
    item: "Porivellangai Urundai",
    img: "image/Rectangle 340.png",
  },
  {
    item: "Jangri",
    img: "image/Rectangle 341.png",
  },
  {
    item: "lattu",
    img: "image/Rectangle 342.png",
  },
  {
    item: "halwa",

    img: "image/Rectangle 343.png",
  },
];
function fnBindHTML() {
  let html = "";
  list.map((e, i) => {
    html =
      html +
      `<div>
      <img src='${e.img}' width:50px;height:50px id="five1" class="cols">
      <div id="content" class="six1"> ${e.item}</div>
      
      <button class="bot1">Order Now</button>
       </div>`;
  });

  console.log("Html ==>", html);
  document.getElementById("parent-div").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  fnBindHTML();
});
