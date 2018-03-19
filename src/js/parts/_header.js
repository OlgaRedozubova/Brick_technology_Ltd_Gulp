var isDropDown = document.querySelector('.isDropDown');
var dropDown = document.getElementsByClassName('dropDown')[0];

var colGood=0;

isDropDown.addEventListener('click',
  function(e){
    dropDown.classList.toggle('visible');
  }
);

function addGoods() {
  colGood++;
  if (colGood>0) {
    document.querySelector('.buy_img').setAttribute('src', '../img/buy_full.png');
    console.log(document.querySelector('.buy_img'));
  }
  document.querySelector('.colGoods').innerHTML = colGood;
}