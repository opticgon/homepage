"use strick";


class program {

  static run() {
    this.spinOff();
  }

  static spinOff(dela = "1000") {

    setTimeout(() => {
      
      document.querySelector("#loader").classList.add("hide");
      document.querySelector("#coreSet").classList.remove("hide");
      document.querySelector("#footerItem").classList.remove("hide");


    }, dela);




    
  }

}




program.run();