"use strict";
//* Напиши скрипт, який об'єднує всі елементи массива в один рядок.  Елементів може бути довільна кількість. Нехай елементи массива  в рядку будут розділені комою.
//- Спочатку через for
//- Потім через join()

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
/* for (let h = 0; h < friends.length; ) {
    let string ='';
} */
console.log(friends.join(" ,"));

//*Працюємо з колекцією карток в trello.  Метод splice() (можна використати інші методи)
let cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
//видаляємо
cards = cards.splice(0, 3);
console.log(cards);

let card = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
//ДОДАЄМО
card.push = "Карточка-6";
console.log(card);

// Оновити