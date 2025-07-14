"use strick";





document.querySelector("#aboutUSBTN").addEventListener("click", ()=>{
      document.querySelector("#menu").classList.add("hide");
      document.querySelector("#about").classList.remove("hide");
      document.querySelector("#backBTN").classList.remove("hide");


});


      document.querySelector("#backBTN").addEventListener("click", ()=>{
      document.querySelector("#menu").classList.remove("hide");
      document.querySelector("#about").classList.add("hide");

      document.querySelector("#backBTN").classList.add("hide");



});