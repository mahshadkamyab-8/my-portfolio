const alert = document.querySelector('.alert');
const button = document.querySelector('.btn');
const close = document.querySelector('.alert-box');
const message_btn = document.querySelector('#mbtn');
console.log(close)

button.onclick = () => {
    showAlertBox();
    message_btn.classList.remove('hidden');
    timer = setTimeout(function () {
        closeAlertBox();
        message_btn.classList.add('hidden');
    }, 3000);
}

close.onclick = () => {
    closeAlertBox();
    message_btn.classList.add('hidden');
    clearTimeout(timer);
}

function showAlertBox() {
    alert.classList.remove('hidden');

}
function closeAlertBox() {
    alert.classList.add('hidden');
}