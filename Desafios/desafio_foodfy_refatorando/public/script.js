const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function() {
        const recipesId = card.getAttribute("id");
        window.location.href = `/recipes/${recipesId}`;
    });
};


function showHide1() {
    var sh = document.getElementById("showing1");
    if (sh.style.display === "none") {
        sh.style.display = "block";
    } else {
        sh.style.display = "none";
    }

    const btn = document.getElementById("myBtn1");
    if (btn.value == "ESCONDER") {
        btn.value = "MOSTRAR"
    } else {
        btn.value = "ESCONDER"
    }
}

function showHide2() {
    var sh = document.getElementById("showing2");
    if (sh.style.display === "none") {
        sh.style.display = "block";
    } else {
        sh.style.display = "none";
    }

    const btn = document.getElementById("myBtn2");
    if (btn.value == "ESCONDER") {
        btn.value = "MOSTRAR"
    } else {
        btn.value = "ESCONDER"
    }
}

function showHide3() {
    var sh = document.getElementById("showing3");
    if (sh.style.display === "none") {
        sh.style.display = "block";
    } else {
        sh.style.display = "none";
    }

    const btn = document.getElementById("myBtn3");
    if (btn.value == "ESCONDER") {
        btn.value = "MOSTRAR"
    } else {
        btn.value = "ESCONDER"
    }
}