
const paragraph = document.getElementById("paragraph");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

// English version
const original = `
    <h4 class="fw-bold mb-4">
        Hello, and welcome to my portfolio website.
    </h4>
    This website was created using HTML, CSS, Bootstrap and JavaScript.
    I created this site to showcase my projects, skills, and experience.
    Here, you can view the projects I have worked on. Thank you for visiting!
`;

// Persian version
const persian = `
    <h4 class="fw-bold mb-4">
        سلام، به وب‌سایت نمونه‌کارهای من خوش آمدید.
    </h4>
    این وب‌سایت با استفاده از HTML، CSS ، Bootstrap و JavaScript ساخته شده است.
    من این سایت را برای نمایش پروژه‌ها، مهارت‌ها و تجربیاتم ایجاد کردم.
    در اینجا می‌توانید پروژه‌هایی را که روی آن‌ها کار کرده‌ام مشاهده کنید.
    از بازدید شما متشکرم!
`;

// Translate to Persian
btn2.addEventListener("click", function () {
    paragraph.innerHTML = persian;
    paragraph.style.direction = "rtl";
    paragraph.style.textAlign = "right";
    paragraph.style.marginTop = '35px';
    paragraph.style.marginRight = '20px';
});

// Back to English
btn3.addEventListener("click", function () {
    paragraph.innerHTML = original;
    paragraph.style.direction = "ltr";
    paragraph.style.textAlign = "left";
    paragraph.style.marginTop = '35px';
});
