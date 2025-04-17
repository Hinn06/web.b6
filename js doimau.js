let daMau = false;

function doiMau() {
    const doan = document.getElementById("doan");
    if (!daMau) {
        doan.style.backgroundColor = "lightblue";
        daMau = true;
    } else {
        doan.style.backgroundColor = "transparent";
        daMau = false;
    }
}

function troLai() {
    window.location.href = "index.html";
}
