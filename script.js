document.addEventListener("DOMContentLoaded", function () {
  // Проверить размер экрана
  if (window.innerWidth <= 1400) {
    // Получить все элементы с классами .cust-header-call .custom-header-phone__link и .cust-header-search__link
    var callElements = document.querySelectorAll(".cust-header-call .custom-header-phone__link");
    var searchElements = document.querySelectorAll(".cust-header-search__link");

    var allElements = [...callElements, ...searchElements];

    // Добавить отслеживание события клика по каждому из них
    allElements.forEach(function (element) {
      element.addEventListener("click", function (event) {
        // Предотвратить действие по умолчанию
        event.preventDefault();

        // Переключить класс 'active'
        this.classList.toggle('active');

        // Удалить класс 'active' у всех других элементов
        allElements.forEach(function (otherElement) {
          if (otherElement !== element) {
            otherElement.classList.remove('active');
          }
        });
      });
    });

    // Получить все элементы с классом .top-search-close
    var closeElements = document.querySelectorAll(".top-search-close");

    // Добавить отслеживание события клика по каждому из них
    closeElements.forEach(function (element) {
      element.addEventListener("click", function (event) {
        // Предотвратить действие по умолчанию
        event.preventDefault();

        // Найти ближайший родительский элемент с классом .cust-header-call или .cust-header-search
        var parentCall = this.closest(".cust-header-call");
        var parentSearch = this.closest(".cust-header-search");

        // Найти внутри него элементы с классом .custom-header-phone__link или .cust-header-search__link
        var linkCall = parentCall ? parentCall.querySelector(".custom-header-phone__link") : null;
        var linkSearch = parentSearch ? parentSearch.querySelector(".cust-header-search__link") : null;

        // Удалить у найденных элементов класс 'active'
        if (linkCall) linkCall.classList.remove('active');
        if (linkSearch) linkSearch.classList.remove('active');
      });
    });
  }
});
