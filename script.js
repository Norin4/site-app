document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Появление блоков при скролле
    let sections = document.querySelectorAll("section");

    function checkScroll() {
        let scrollPos = window.scrollY;
        sections.forEach((section) => {
            let sectionTop = section.offsetTop - window.innerHeight / 1.3;
            if (scrollPos > sectionTop) {
                section.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);

 // 🔹 Плавный скроллинг при нажатии на кнопки в хедере
 let menuLinks = document.querySelectorAll(".nav-links a, .btn-contact, .btn");

 menuLinks.forEach(link => {
     link.addEventListener("click", function (event) {
         event.preventDefault(); // Предотвращаем стандартный переход
         let targetId = this.getAttribute("href").substring(1); // Получаем id секции
         let targetSection = document.getElementById(targetId);

         if (targetSection) {
             window.scrollTo({
                 top: targetSection.offsetTop - 60, // Учитываем высоту хедера
                 behavior: "smooth" // Плавная прокрутка
             });
         }
     });
 });
});

    // 🔹 Обработка формы
    let contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        alert("Спасибо! Ваше сообщение отправлено.");
        contactForm.reset();
    });