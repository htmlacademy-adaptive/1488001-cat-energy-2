// БУРГЕР-МЕНЮ
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

nav.classList.add('nav--closed');

navToggle.addEventListener('click', ()=> {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--opened');
});

// СЛАЙДЕР СО ШТОРКОЙ



// // КАРТА С ПОЛЬЗОВАТЕЛЬСКОЙ МЕТКОЙ
// // Инициализация карты
// function initMap() {
//   // Координаты центра карты
//   const mapCenter = { lat: 59.938631, lng: 30.323037 }; // Большая Конюшенная д 19/8, Санкт-Петербург

//   // Создание карты
//   const map = new google.maps.Map(document.getElementById('map'), {
//     center: mapCenter,
//     zoom: 14, // Масштаб карты
//   });

//   // Параметры пользовательской метки
//   const customIcon = {
//     url: 'https://example.com/custom-icon.png', // URL вашей картинки
//     scaledSize: new google.maps.Size(50, 50),  // Размер изображения
//     origin: new google.maps.Point(0, 0),      // Точка начала
//     anchor: new google.maps.Point(25, 50),    // Точка привязки
//   };

//   // Добавление метки на карту
//   new google.maps.Marker({
//     position: mapCenter, // Координаты метки
//     map: map,            // Ссылка на карту
//     icon: customIcon,    // Пользовательская иконка
//     title: 'Это пользовательская метка!', // Подсказка
//   });
// }

// // Запуск карты
// google.maps.event.addDomListener(window, 'load', initMap);

