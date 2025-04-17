function validateForm() {
    let ho = document.forms["regForm"]["ho"].value.trim();
    let ten = document.forms["regForm"]["ten"].value.trim();
    let sdt = document.forms["regForm"]["sdt"].value.trim();
    let error = "";

    if (ho === "") {
        error += "Vui lòng nhập Họ.\n";
    }
    if (ten === "") {
        error += "Vui lòng nhập Tên.\n";
    }
    if (!/^\d{10}$/.test(sdt)) {
        error += "Số điện thoại phải gồm đúng 10 chữ số.\n";
    }

    if (error) {
        alert(error);
        return false;
    }
    return true;
}

function goBack() {
    window.location.href = "index.html";
}

window.onload = function() {
    let ngay = document.getElementById("ngay");
    let thang = document.getElementById("thang");
    let nam = document.getElementById("nam");

    for (let i = 1; i <= 31; i++) {
        ngay.innerHTML += `<option value="${i}">${i}</option>`;
    }
    for (let i = 1; i <= 12; i++) {
        thang.innerHTML += `<option value="${i}">${i}</option>`;
    }
    for (let i = 1980; i <= 2024; i++) {
        nam.innerHTML += `<option value="${i}">${i}</option>`;
    }
}
