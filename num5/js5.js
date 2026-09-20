const alert = document.querySelector('.alert');
const button = document.querySelector('.btn');
const close = document.querySelector('.alert-box');
console.log(close)

button.onclick = () => {
    showAlertBox();
    timer = setTimeout(function () {
        closeAlertBox();
    }, 4000);
}

close.onclick = () => {
    closeAlertBox();
    clearTimeout(timer);
}

function showAlertBox() {
    alert.classList.remove('hidden');
}
function closeAlertBox() {
    alert.classList.add('hidden');
}