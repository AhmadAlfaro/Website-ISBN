function isValidISBN10(isbn) {
    isbn = isbn.replace(/-/g, "");
    if (isbn.length !== 10) return false;

    let total = 0;
    for (let i = 0; i < 9; i++) {
        if (isNaN(isbn[i])) return false;
        total += parseInt(isbn[i]) * (10 - i);
    }

    let last = isbn[9];
    if (last === "X") {
        total += 10;
    } else if (!isNaN(last)) {
        total += parseInt(last);
    } else {
        return false;
    }

    return total % 11 === 0;
}

function isValidISBN13(isbn) {
    isbn = isbn.replace(/-/g, "");
    if (isbn.length !== 13 || isNaN(isbn)) return false;

    let total = 0;
    for (let i = 0; i < 13; i++) {
        total += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
    }

    return total % 10 === 0;
}

function cekISBN() {
    let isbn = document.getElementById("isbn").value.trim();
    let hasil = document.getElementById("hasil");

    if (isbn === "") {
        hasil.textContent = "Masukkan ISBN!";
        hasil.style.color = "firebrick";
        return;
    }

    if (isValidISBN10(isbn)) {
        hasil.textContent = "ISBN Valid (ISBN-10)";
        hasil.style.color = "blue";
    } 
    else if (isValidISBN13(isbn)) {
        hasil.textContent = "ISBN Valid (ISBN-13)";
        hasil.style.color = "green";
    } 
    else {
        hasil.textContent = "ISBN Tidak Valid!";
        hasil.style.color = "firebrick";
    }
}