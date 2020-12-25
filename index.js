console.log("xxx")

// 1) Создать массив с числами сгенерированные рандомно, массив length >= 1000

let arr = [];
let leng = 1000;
for (let i = 0; i < leng; i++) {
    arr.push(Math.floor(Math.random() * 1001));
}

 console.log(arr);

// 2) Разработать функции поиска минимального, максимального и медианы массива - соответсвенно найти для 1.

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 1; i < leng; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}

console.log("Min = " + min);
console.log("Max = " + max);
console.log("Median = " + (max - min) / 2);

// 3) Реализовать алгоритм Быстрой сортировки на языке JavaScript. Применить для 1.

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    if (arr.length > 1) {
        let index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

let result = quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:");
console.log(result)

// 4) Подсчитать и отобразить количество используемых тегов на странице вашего портфолио. Например: а - 10, div - 4, и т.д.

document.addEventListener('DOMContentLoaded', loadDOM);

function loadDOM() {
    console.log("количество тегов li: " + document.getElementsByTagName('li').length);
    console.log("количество тегов div: " + document.getElementsByTagName('div').length);
    console.log("количество тегов p: " + document.getElementsByTagName('p').length);
    
    // lab 6 
    function createGallery() {
        let photoGallery = document.querySelector('.photo_gallery')
        let mainPhoto = photoGallery.querySelector('.photo_gallery__main')
        let thumbnails = photoGallery.querySelectorAll('.photo_gallery__thumbnail')
        
        let addThumbnailClickHandler = function (photo, i) {
            thumbnails[i].addEventListener('click', function () {
                mainPhoto.src = photo;
            });
        };
        
        for (let i = 0; i < thumbnails.length; ++i) {
            addThumbnailClickHandler(thumbnails[i].src, i)
        }
    }
    
    createGallery()
    
        function createPopup() {
            let popup = document.querySelector('.popup');
            let openPopupButton = document.querySelector('.button__open');
            let closePopupButton = popup.querySelector('.button__close')
            let show = 'popup--show'
        
            openPopupButton.addEventListener('click', function (evt) {
                evt.preventDefault();
                popup.classList.add(show)
            });
        
            closePopupButton.addEventListener('click', function (evt) {
                popup.classList.remove(show);
            });
        }
        
        createPopup()

     // lab 7
     
     let word = {
        first: [
            "Интересный",
            "Смешной",
            "Грустный",
            "Глупый",
            "Умный",
        ],
        second: [
            "человек",
            "компьютер",
            "врач",
            "животное",
            "пришелец",
        ],
        third: [
            "сидел",
            "читал",
            "работал",
            "приехал",
            "пел",
        ]
    }

function init_chat(){

    let input = document.getElementById("chat_input");
    let btn = document.getElementById("chat_btn");

    btn.onclick = () => {
        let msg = input.value.trim();
        if(msg !== ""){
            input.value = "";
            send(msg, "You", true);
            send(answer(), "Bot", false);
        }
    }
}

function answer(){
    let first = word.first;
    let second = word.second;
    let third = word.third;

        let answer = `${first[Math.floor(Math.random()*5)]} ${second[Math.floor(Math.random()*5)]} ${third[Math.floor(Math.random()*5)]}`
        return answer
}

function send(text, sender, isYour){
    let template = document.querySelector("#msg_tmpl").content.children[0]
    let msg = template.cloneNode(true)
    let chat = document.getElementById("chat")

    msg.children[0].children[0].textContent = sender
    msg.children[1].children[0].textContent = text
    msg.children[0].children[1].onclick = () => {msg.parentNode.removeChild(msg)}

    if (isYour) msg.classList.add("youth_msg")
    else msg.classList.add("answer_msg")

    chat.appendChild(msg)
}


init_chat()
send("Привет.", "Bot", false)
}
