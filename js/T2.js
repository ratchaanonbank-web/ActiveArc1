var color1 = document.getElementById("color1-T2");
var color2 = document.getElementById("color2-T2");
var color3 = document.getElementById("color3-T2");

var selectedColor = "";


color1.addEventListener("click", function () {

    if (selectedColor == "color1-T2") {

        color1.style.borderColor = "transparent";
        selectedColor = "";

    } else {

        color1.style.borderColor = "#00CCFF";
        color2.style.borderColor = "transparent";
        color3.style.borderColor = "transparent";

        selectedColor = "color1-T2";
    }

});


color2.addEventListener("click", function () {

    if (selectedColor == "color2-T2") {

        color2.style.borderColor = "transparent";
        selectedColor = "";

    } else {

        color1.style.borderColor = "transparent";
        color2.style.borderColor = "#00CCFF";
        color3.style.borderColor = "transparent";

        selectedColor = "color2-T2";
    }

});


color3.addEventListener("click", function () {

    if (selectedColor == "color3-T2") {

        color3.style.borderColor = "transparent";
        selectedColor = "";

    } else {

        color1.style.borderColor = "transparent";
        color2.style.borderColor = "transparent";
        color3.style.borderColor = "#00CCFF";

        selectedColor = "color3-T2";
    }

});

var sizeS = document.getElementById("sizeS-T2");
var sizeM = document.getElementById("sizeM-T2");
var sizeL = document.getElementById("sizeL-T2");
var sizeXL = document.getElementById("sizeXL-T2");
var selectedSize = "";

sizeS.addEventListener("click", function () {

    if (selectedSize == "S") {

        sizeS.style.borderColor = "";
        selectedSize = "";

    } else {

        sizeS.style.borderColor = "blue";
        sizeM.style.borderColor = "";
        sizeL.style.borderColor = "";
        sizeXL.style.borderColor = "";

        selectedSize = "S";
    }

});


sizeM.addEventListener("click", function () {

    if (selectedSize == "M") {

        sizeM.style.borderColor = "";
        selectedSize = "";

    } else {

        sizeS.style.borderColor = "";
        sizeM.style.borderColor = "blue";
        sizeL.style.borderColor = "";
        sizeXL.style.borderColor = "";

        selectedSize = "M";
    }

});


sizeL.addEventListener("click", function () {

    if (selectedSize == "L") {

        sizeL.style.borderColor = "";
        selectedSize = "";

    } else {

        sizeS.style.borderColor = "";
        sizeM.style.borderColor = "";
        sizeL.style.borderColor = "blue";
        sizeXL.style.borderColor = "";

        selectedSize = "L";
    }

});


sizeXL.addEventListener("click", function () {

    if (selectedSize == "XL") {

        sizeXL.style.borderColor = "";
        selectedSize = "";

    } else {

        sizeS.style.borderColor = "";
        sizeM.style.borderColor = "";
        sizeL.style.borderColor = "";
        sizeXL.style.borderColor = "blue";

        selectedSize = "XL";
    }

});
