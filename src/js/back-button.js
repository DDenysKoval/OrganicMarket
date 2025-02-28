const btn = document.querySelector("#backToTop");

// Отслеживание прокрутки страницы
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.classList.add("show"); // Добавляем класс
  } else {
    btn.classList.remove("show"); // Убираем класс
  }
});

// Кнопка прокрутки вверх
btn.addEventListener("click", function (e) {
  e.preventDefault();

  // Плавная прокрутка
  window.scrollTo({ top: 0, behavior: "smooth" });
});
