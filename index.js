
function add() {
   let txt1 = document.querySelector(".txt1");
   let txt2 = document.querySelector(".txt2");
   let btn = document.querySelector(".txt3");

   let last = txt2.lastElementChild;
   // console.log(last);

   txt1.insertBefore(last,txt1.children[0]);
}

