function removeHighlight() {
    let spans = document.querySelectorAll('#history span');
    spans.forEach(span => span.classList.remove("highlight"));
}

function cong() {
    let a = Number(document.getElementById("a1").value);
    let b = Number(document.getElementById("b1").value);
    let kq = a + b;
    document.getElementById("kq1").value = kq;

    removeHighlight();
    let history = document.getElementById("history");
    let span = document.createElement("span");
    span.classList.add("highlight");
    span.innerText = `PHÉP CỘNG ${a}+${b}=${kq}`;
    history.appendChild(span);
}

function tru() {
    let a = Number(document.getElementById("a2").value);
    let b = Number(document.getElementById("b2").value);
    let kq = a - b;
    document.getElementById("kq2").value = kq;

    removeHighlight();
    let history = document.getElementById("history");
    let span = document.createElement("span");
    span.classList.add("highlight");
    span.innerText = `PHÉP TRỪ ${a}-${b}=${kq}`;
    history.appendChild(span);
}

function nhan() {
    let a = Number(document.getElementById("a3").value);
    let b = Number(document.getElementById("b3").value);
    let kq = a * b;
    document.getElementById("kq3").value = kq;

    removeHighlight();
    let history = document.getElementById("history");
    let span = document.createElement("span");
    span.classList.add("highlight");
    span.innerText = `PHÉP NHÂN ${a}*${b}=${kq}`;
    history.appendChild(span);
}

function chia() {
    let a = Number(document.getElementById("a4").value);
    let b = Number(document.getElementById("b4").value);
    let kq = b !== 0 ? (a / b).toFixed(2) : "∞";
    document.getElementById("kq4").value = kq;

    removeHighlight();
    let history = document.getElementById("history");
    let span = document.createElement("span");
    span.classList.add("highlight");
    span.innerText = `PHÉP CHIA ${a}/${b}=${kq}`;
    history.appendChild(span);
}

function troLai() {
    window.location.href = "index.html";
}
