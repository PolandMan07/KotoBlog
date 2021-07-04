let przycisk1 = document.querySelector("#a");
let przycisk2 = document.querySelector("#b");
let przycisk3 = document.querySelector("#c");
let przycisk4 = document.querySelector("#d");
let przycisk5 = document.querySelector("#e");
let przycisk6 = document.querySelector("#f");
let przycisk7 = document.querySelector("#g");
let przycisk8 = document.querySelector("#h");
let przycisk9 = document.querySelector("#i");
let któryGracz = "1";

przycisk1.addEventListener("click", function klik(coś) {
  if (któryGracz == "0") {
    przycisk1.classList.add("o")
    któryGracz = (któryGracz == '1') ? '0' : '1';  } 
    else {
    przycisk1.classList.add("x")
    któryGracz = (któryGracz == '0') ? '1' : '0';
  }
}
);
przycisk2.addEventListener("click", function klik(coś) {
  if (któryGracz == "0") {
    przycisk2.classList.add("o")
    któryGracz = "1"
  } else {
    przycisk2.classList.add("x")
    któryGracz = (któryGracz == '0') ? '1' : '0';
  }
}
);
przycisk3.addEventListener("click", function klik(coś) {
  if (któryGracz == "0") {
    przycisk3.classList.add("o")
    któryGracz = (któryGracz == '1') ? '0' : '1';
  } else {
    przycisk3.classList.add("x")
    któryGracz = (któryGracz == '0') ? '1' : '0';
  }
}
);
przycisk4.addEventListener("click", function klik(coś) {
  if (któryGracz == "0") {
    przycisk4.classList.add("o")
    któryGracz = "1"
  } else {
    przycisk4.classList.add("x")
    któryGracz = (któryGracz == '0') ? '1' : '0';
  }
}
);
przycisk5.addEventListener("click", function klik(coś) {
  if (któryGracz == "0") {
    przycisk5.classList.add("o")
    któryGracz = "1"
  } else {
    przycisk5.classList.add("x")
    któryGracz = (któryGracz == '0') ? '1' : '0';
  }
}
);
przycisk6.addEventListener("click", function klik(coś) {
  if (któryGracz == "0") {
    przycisk6.classList.add("o")
    któryGracz = "1"
  } else {
    przycisk6.classList.add("x")
    któryGracz = (któryGracz == '0') ? '1' : '0';
  }
}
);
przycisk7.addEventListener("click", function klik(coś) {
  if (któryGracz == "0") {
    przycisk7.classList.add("o")
    któryGracz = "1"
  } else {
    przycisk7.classList.add("x")
    któryGracz = (któryGracz == '0') ? '1' : '0';
  }
}
);
przycisk8.addEventListener("click", function klik(coś) {
  if (któryGracz == "0") {
    przycisk8.classList.add("o")
    któryGracz = "1"
  } else {
    przycisk8.classList.add("x")
    któryGracz = (któryGracz == '0') ? '1' : '0';
  }
}
);
przycisk9.addEventListener("click", function klik(coś) {
  if (któryGracz == "0") {
    przycisk9.classList.add("o")
    któryGracz = "1"
  } else {
    przycisk9.classList.add("x")
    któryGracz = (któryGracz == '0') ? '1' : '0';
  }
}
);
if (przycisk1.classList.contains('x')) {
  let nowyElement = document.querySelector("h2")
  nowyElement.innerText = "Gracz X wygrał!"
}