function rescale(arg) {
    document.getElementById('svg_icon').style.display = "none";
    hoverOff();
    switch (arg) {
        case 1:
            var two = document.getElementById("quadro");
            var doc = document.getElementById("uno");
            var three = document.getElementById("tres");
            var four = document.getElementById("fo");

            doc.classList.add("active");
            two.classList.remove("active");
            three.classList.remove("active");
            three.classList.remove("active");



            doc.style.width = "90vh";
            doc.style.height = "98vh";
            doc.style.zIndex = "5";
            doc.style.left = "36%";
            doc.style.top = "1%";
            // doc.style.borderRadius = "0%";

            two.style.top = "1%";
            two.style.left = "15%";
            two.style.width = "20vw";
            two.style.height = "30vh";
            two.style.zIndex = "3";

            three.style.left = "15%";
            three.style.top = "35%";
            three.style.width = "20vw";
            three.style.height = "30vh";
            three.style.zIndex = "3";

            four.style.left = "15%";
            four.style.top = "69%";
            four.style.width = "20vw";
            four.style.height = "30vh";
            four.style.zIndex = "3";

            break;
        case 2:
            var two = document.getElementById("quadro");
            var doc = document.getElementById("uno");
            var three = document.getElementById("tres");
            var four = document.getElementById("fo");

            two.classList.add("active");
            doc.classList.remove("active");
            three.classList.remove("active");
            four.classList.remove("active");

            two.style.width = "90vh";
            two.style.height = "98vh";
            two.style.zIndex = "5";
            two.style.left = "36%";
            two.style.top = "1%";
            // two.style.borderRadius = "0%";

            doc.style.top = "1%";
            doc.style.left = "15%";
            doc.style.width = "20vw";
            doc.style.height = "30vh";
            doc.style.zIndex = "3";


            three.style.left = "15%";
            three.style.top = "35%";
            three.style.width = "20vw";
            three.style.height = "30vh";
            three.style.zIndex = "3";

            four.style.left = "15%";
            four.style.top = "69%";
            four.style.width = "20vw";
            four.style.height = "30vh";
            four.style.zIndex = "3";
            break;
        case 3:
            var two = document.getElementById("quadro");
            var doc = document.getElementById("uno");
            var three = document.getElementById("tres");
            var four = document.getElementById("fo");

            three.classList.add("active");
            doc.classList.remove("active");
            two.classList.remove("active");
            four.classList.remove("active");

            three.style.width = "90vh";
            three.style.height = "98vh";
            three.style.zIndex = "5";
            three.style.left = "36%";
            three.style.top = "1%";


            doc.style.top = "1%";
            doc.style.left = "15%";
            doc.style.width = "20vw";
            doc.style.height = "30vh";


            two.style.left = "15%";
            two.style.top = "35%";
            two.style.width = "20vw";
            two.style.height = "30vh";

            four.style.left = "15%";
            four.style.top = "69%";
            four.style.width = "20vw";
            four.style.height = "30vh";
            break;
        case 4:
            var two = document.getElementById("quadro");
            var doc = document.getElementById("uno");
            var three = document.getElementById("tres");
            var four = document.getElementById("fo");

            three.classList.add("active");
            doc.classList.remove("active");
            two.classList.remove("active");
            four.classList.remove("active");

            four.style.width = "90vh";
            four.style.height = "98vh";
            four.style.zIndex = "5";
            four.style.left = "36%";
            four.style.top = "1%";


            doc.style.top = "1%";
            doc.style.left = "15%";
            doc.style.width = "20vw";
            doc.style.height = "30vh";


            two.style.left = "15%";
            two.style.top = "35%";
            two.style.width = "20vw";
            two.style.height = "30vh";

            three.style.left = "15%";
            three.style.top = "69%";
            three.style.width = "20vw";
            three.style.height = "30vh";
            break;

    }
}

function back(arg) {

    var doc = document.getElementById("uno");
    var two = document.getElementById("quadro");
    var three = document.getElementById("tres");
    var four = document.getElementById("fo");


    doc.style.zIndex = "1";
    doc.style.left = "50%";
    doc.style.top = "38%";
    doc.style.width = "15vw";
    doc.style.height = "30vh";
    doc.style.borderTopRightRadius = "50%";
    doc.style.borderBottomRightRadius = "50%";
    // doc.style.borderRadius = "15%";

    two.style.left = "40%";
    two.style.top = "28%";
    two.style.width = "20vw";
    two.style.height = "30vh";
    two.style.borderTopRightRadius = "50%";
    two.style.borderTopLeftRadius = "50%";

    three.style.left = "35%";
    three.style.top = "38%";
    three.style.width = "15vw";
    three.style.height = "30vh";
    three.style.borderTopLeftRadius = "50%";
    three.style.borderBottomLeftRadius = "50%";


    four.style.left = "40%";
    four.style.top = "48%";
    four.style.width = "20vw";
    four.style.height = "30vh";
    four.style.borderBottomLeftRadius = "50%";
    four.style.borderBottomRightRadius = "50%";

}

function wider(arg) {

    var doc = document.getElementById("uno");
    var two = document.getElementById("quadro");
    var three = document.getElementById("tres");
    var four = document.getElementById("fo");

    doc.style.left = "61%";
    doc.style.top = "40%";
    doc.style.width = "20vw";
    doc.style.height = "30vh";
    doc.style.borderRadius = "0";
    // doc.style.borderRadius = "15%";

    two.style.left = "40%";
    two.style.top = "25%";
    two.style.width = "20vw";
    two.style.height = "30vh";
    two.style.borderRadius = "0";

    three.style.left = "19%";
    three.style.top = "40%";
    three.style.width = "20vw";
    three.style.height = "30vh";
    three.style.borderRadius = "0";


    four.style.left = "40%";
    four.style.top = "65%";
    four.style.width = "20vw";
    four.style.height = "30vh";
    four.style.borderRadius = "0";



}

function firstLoad() {

    document.getElementById('uno').addEventListener("mouseout", back, true);
    document.getElementById('uno').addEventListener("mouseover", wider, true);

    document.getElementById('uno').addEventListener("mouseout", back, true);
    document.getElementById('uno').addEventListener("mouseover", wider, true);

    document.getElementById('quadro').addEventListener("mouseout", back, true);
    document.getElementById('quadro').addEventListener("mouseover", wider, true);

    document.getElementById('tres').addEventListener("mouseout", back, true);
    document.getElementById('tres').addEventListener("mouseover", wider, true);

    document.getElementById('fo').addEventListener("mouseout", back, true);
    document.getElementById('fo').addEventListener("mouseover", wider, true);

    document.getElementById('uno').addEventListener("click", function() { rescale(1) });
    document.getElementById('quadro').addEventListener("click", function() { rescale(2) });
    document.getElementById('tres').addEventListener("click", function() { rescale(3) });
    document.getElementById('fo').addEventListener("click", function() { rescale(4) });
}

function hoverOff() {
    document.getElementById('uno').removeEventListener("mouseout", back, true);
    document.getElementById('uno').removeEventListener("mouseover", wider, true);

    document.getElementById('quadro').removeEventListener("mouseout", back, true);
    document.getElementById('quadro').removeEventListener("mouseover", wider, true);

    document.getElementById('tres').removeEventListener("mouseout", back, true);
    document.getElementById('tres').removeEventListener("mouseover", wider, true);

    document.getElementById('fo').removeEventListener("mouseout", back, true);
    document.getElementById('fo').removeEventListener("mouseover", wider, true);
}