
// const div = document.querySelector('div');

// let divX = 250;
// let divY = 250;

// div.style.top = `${divX}px`;
// div.style.left = `${divY}px`;

// let active = false;

// let wewX;
// let wewY;

// div.addEventListener("mousedown", (e) => {
//     div.style.backgroundColor = "orange";
//     active = !active;
//     wewX = e.offsetX;
//     wewY = e.offsetY;

// })

// div.addEventListener("mousemove", (e) => {
//     if (active) {
//         divX = e.clientX - wewX;
//         divY = e.clientY - wewY;

//         div.style.left = `${divX}px`;
//         div.style.top = `${divY}px`;
//     }
// })


// div.addEventListener("mouseup", () => {
//     div.style.backgroundColor = "black";
//     active = !active;
// })

// const tab = ['Marcin', 'Ania', 'Agnieszka'];
// tab.forEach(function (el, i, arr) {
//     console.log(`Aktualny element to ${el}, a długość tablicy to ${arr.length} a index to ${i}`);
// });

// const imiona = {
//     pierwsze: "Marcin",
//     drugie: "krzysiek"
// }
// function siema({ pierwsze, drugie }) {
//     console.log(`co tam powiesz ${pierwsze}`);
// }
// siema(imiona)

// const tabs = [1, 2, 3, 4];
// console.log(...tabs.join(','));

// const tabs2 = [...tabs];
// console.log(tabs2);

// const fullTab = [-1, 0, ...tabs, 5, 6];
// console.log(fullTab);
// console.log(Math.max(...fullTab));

// function zwierzaki(...args) {
//     const tab = args.map(el => el.toUpperCase());
//     return tab.join(',');
// }
// console.log(zwierzaki("pet", "krowa"))

// const allEven = tabs.some(el => el % 2 === 0);
// console.log(allEven);


// const taab = [1, 2, 3, 4];
// const result = taab.reduce((a, b) => a + b);
// console.log(result);

// const txt = "jestem zwyciezca"
// console.log(txt.substr(4, 5));
// console.log(txt.substring(4, 5));
// console.log(txt.slice(4, 5));
// console.log(txt.split());

// const btn = document.querySelector('p');
// btn.innerHTML = "<span>Nie klikaj mnie!</span>"

// console.log(btn.textContent);
// console.log(btn.innerHTML);
// console.log(btn.tagName);
// console.log(btn.getAttribute('id'));

const pierwszy = document.querySelector('.pierwszy');
pierwszy.style.backgroundColor = "green";
const drugi = document.createElement('div');
pierwszy.appendChild(drugi);
drugi.style.width = '50px';
drugi.style.height = '50px';
drugi.style.backgroundColor = "yellow";
drugi.style.marginLeft = '20px'

drugi.innerText = "działa";
drugi.classList.add('drugi');

const div = document.querySelector(".div-test-replace")
const btn = document.querySelector("#replaceTest");

btn.addEventListener("click", function () {
    const oldItem = div.querySelector("span");

    const newItem = document.createElement("strong");
    newItem.innerText = "Jestem nowym elementem";

    div.replaceChild(newItem, oldItem);
});

// const element = document.querySelector('.button-move');

// setInterval(function () {
//     element.style.setProperty('--ml', Math.random() * 300 + "px");
// }, 300)

// ŁADNY PRZYCISK

const element2 = document.querySelector('.button-test');

element2.addEventListener('mousemove', function (e) {
    this.style.setProperty('--left', e.pageX - this.offsetLeft + "px");
    this.style.setProperty('--top', e.pageY - this.offsetTop + "px");
})


function Car(name, color) {
    this.age = 0;
    this.name = name;
    this.color = color;

    this.print = function () {
        console.log(this.name + ' koloru ' + this.color);
    }
}
const maluch = new Car(" maluch", "rudy");
maluch.print();

const ob = {
    time: 2000,
    pets: ["pies", "kot", "chomik"],
    print: function () {
        setTimeout(function () {
            for (const pet of this.pets) {
                console.log(pet.toUpperCase());
            }
        }.bind(this), this.time)
    }
}
ob.print();