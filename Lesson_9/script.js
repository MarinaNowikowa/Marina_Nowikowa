// const visitors = [
//   { name: "gregory", surname: "vlasov", isWelcome: true },
//   { name: "gregory", surname: "vlasov", isWelcome: false },
//   { name: "gregory", surname: "vlasov", isWelcome: false },
//   { name: "gregory", surname: "vlasov", isWelcome: false },
//   { name: "gregory", surname: "vlasov", isWelcome: true },
// ];

// let list = document.getElementById("visitor");

// visitors.forEach((item) => {
//   let newAdd = document.createElement("li");

//   if (item.isWelcome === true) {
//     newAdd.innerHTML = item.name;
//     newAdd.style.color = "green";
//     newAdd.style.fontSize = "25px";
//     newAdd.style.textTransform = "uppercase";
//   } else {
//     newAdd.innerHTML = item.name;
//     newAdd.style.color = "red";
//     newAdd.style.fontSize = "25px";
//     newAdd.style.textTransform = "lowercase";
//   }

//   list.appendChild(newAdd);
// });

// Задание из презентации

let data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];

data.forEach((item) => {
  let tr = document.createElement("tr");
  document.getElementById("list").append(tr);

  let td = document.createElement("td");
  td.innerText = item.firstName;
  td.style.fontSize = "30px";

  let td2 = document.createElement("td");
  td2.innerText = item.lastName;
  td2.style.fontSize = "30px";

  let td3 = document.createElement("td");
  td3.innerText = item.age;
  td3.style.fontSize = "30px";

  tr.append(td);
  tr.append(td2);
  tr.append(td3);
});

let clickAddUser = document.querySelector(".add-user");
let getWindow = document.querySelector(".modal");

let userform = document.querySelector(".popap-form");
let firstName = document.querySelector("input[name=first-name]");
let lastName = document.querySelector("input[name=last-name]");
let age = document.querySelector("input[name=age]");
let text = document.querySelector(".empty");

clickAddUser.addEventListener("click", () => {
  getWindow.style.display = "block";
});

function closeModalWindow() {
  getWindow.style.display = "none";
}

userform.onsubmit = function (e) {
  if (firstName.value === "" || lastName.value === "" || age.value === "") {
    e.preventDefault();
    text.textContent = "Все поля должны быть заполнены!";
  }
};

userform.addEventListener("submit", () => {
  alert(`
    First Name: ${firstName.value}
    Last Name: ${lastName.value}
    Age: ${age.value}`);
});

// const mouseTarget = document.getElementsByTagName("td");

// for (let e of mouseTarget) {
//   mouseTarget.addEventListener("mouseenter", (e) => {});
// }

// ДЗ с табами
//выбирем все кнопки с конкретным классом
const tabsBtn = document.querySelectorAll(".tabs__container-btn");

// выбираем все объекты из массива содержимого
const tabsItems = document.querySelectorAll(".tabs__item");

//  проходимся по кнопкам и вешаем обработчик события
tabsBtn.forEach((item) => {
  item.addEventListener("click", () => {
    // Переключение самих табов
    let currentBtn = item;

    tabsBtn.forEach((item) => {
      item.classList.remove("active");
    });
    currentBtn.classList.add("active");

    // Переключение содержимого
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsItems.forEach((item) => {
      item.classList.remove("active");
    });
    currentTab.classList.add("active");
  });
});

// Удаление таба и содержимого
const closeBtn = document.querySelectorAll(".closeBtn");

closeBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    debugger;
    tabsItems.forEach(({ id }, index) => {
      if (id == tabsBtn.value) {
        tabsBtn[index].style.display = "none";
        tabsItems[id].style.display = "none";
      } else {
        false;
      }
    });
  });
});
