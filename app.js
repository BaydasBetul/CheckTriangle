const firstseite = document.querySelector('#side1');
const secondseite = document.querySelector('#side2');
const dritteseite = document.querySelector('#side3');
const prüfenBtn = document.querySelector('#prüfen');
const resultField = document.querySelector('#results');

prüfenBtn.addEventListener('click', checkTrienagle);

function checkTrienagle() {
    s1 = parseInt(firstseite.value);
    s2 = parseInt(secondseite.value);
    s3 = parseInt(dritteseite.value);
    resultField.innerHTML = '';
    if ((s1 >= s2 + s3) || (s2 >= s1 + s3) || (s3 >= s1 + s2)) {
        resultField.innerHTML = 'Das ist kein Dreieck!';
    } else if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
        resultField.innerHTML = 'Ungültiger Wert! Das ist kein Dreieck!';
    } else if (firstseite.value === null || firstseite.value === "", secondseite.value === null || secondseite.value === "", dritteseite.value === null || dritteseite.value === "") {
        resultField.innerHTML = "Bitte füllen Sie alle Pflichtfelder aus";
    } else if ((s1 === s2) && (s2 === s3)) {
        resultField.innerHTML = 'Das Dreieck ist gleichseitig!!!';
    } else if ((s1 !== s2) && (s2 !== s3) && (s1 !== s3)) {
        resultField.innerHTML = 'Das Dreieck ist maßstabsgetreu!!!';
    } else if ((s1 === s2) || (s2 === s3) || (s1 === s3)) {
        resultField.innerHTML = 'Das Dreieck ist gleichschenklig!!!';
    }

}

window.addEventListener("keyup", function (event) {
    if (event.code == "Enter" || event.code == "NumpadEnter") {
        event.preventDefault;
        checkTrienagle(event.code);
    }
});