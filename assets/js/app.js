let cl = console.log;

let sportAccessories = document.getElementById('accessories');
let searchItems = document.getElementById('search');


let accessoriesArray = [
  {
    img:"./assets/img/badmenton.jpg",
    name:"Racket",
    prize:"300 Rs"
  },
  {
    img:"./assets/img/balls-set.jpg",
    name:"Balls Set",
    prize:"50 to 300 Rs"
  },
  {
    img:"./assets/img/bat.jpg",
    name:"Cricket Bat",
    prize:"700 Rs"
  },
  {
    img:"./assets/img/gym1.jpg",
    name:"GYM Accessories",
    prize:"1000 Rs"
  },
  {
    img:"./assets/img/sportswear.jpg",
    name:"Sports Wear",
    prize:"300 Rs"
  },
  {
    img:"./assets/img/cricket-kit.jpg",
    name:"Cricket-kit",
    prize:"300 Rs"
  },
  {
    img:"./assets/img/football.jpg",
    name:"Football",
    prize:"700 Rs"
  },
  {
    img:"./assets/img/tennis.jpg",
    name:"Tennis Ball",
    prize:"70 Rs"
  },
  {
    img:"./assets/img/golf.jpg",
    name:"Golf Ball",
    prize:"250 Rs"
  },
  {
    img:"./assets/img/wollyball.jpg",
    name:"basket Ball",
    prize:"400 Rs"
  },
  {
    img:"./assets/img/cricket-ball.jpg",
    name:"Cricket Ball",
    prize:"300 Rs"
  },
  {
    img:"./assets/img/gym-bag.webp",
    name:"GYM Bag",
    prize:"850 Rs"
  },
];


function forPrintAcceseries(array){
    array.forEach(ele=>{
   sportAccessories.innerHTML+=`
   <div class='col-md-4'>
   <img src="${ele.img}">
   <h3>${ele.name}</h3>
   <h5>${ele.prize}</h5>
   </div>`;
  });
}

forPrintAcceseries(accessoriesArray);




searchItems.addEventListener('keyup', findAccessories);

function findAccessories(ele){
    sportAccessories.innerHTML = "";
    ele.target.value.toLowerCase();
    let newaccessories = accessoriesArray.filter(e =>{
       let a = ele.target.value;
      return e.name.toLowerCase().match(/[a-z0-9]+/g).includes(a);
     })
    //  cl(newaccessories);
    //  accessoriesArray = newaccessories;
    forPrintAcceseries(newaccessories);
 }



