let checkStatus = true;
const dropdownnButton = document.querySelector("#drpdwn-btn").addEventListener('click', function(e) {
    var navigation = document.querySelector("nav")
    var img = document.querySelector("#image")
    var rasvetaBox = document.querySelector("#rasveta-box")

    if (checkStatus) {
        navigation.classList.remove("reverse-slide")
        navigation.classList.add("slide")
        img.setAttribute(
            'src',
            '/kontrola/assets/up-arrow.png',
        )
        checkStatus = !checkStatus;

    } else if (!checkStatus) {
        navigation.classList.remove("slide")
        navigation.classList.add("reverse-slide")
        img.setAttribute(
            'src',
            '/kontrola/assets/down-arrow.png',
        );
        checkStatus = !checkStatus;
    }

})
let settingsWindow = ""
const rasveta = document.querySelector("#rasveta").addEventListener('click', function(e) {
    settingsWindow = "rasveta"
    var navigation = document.querySelector("nav")
    var img = document.querySelector("#image")
    var rasvetaBox = document.querySelector("#rasveta-box")
    var dropdownnButton = document.querySelector("#drpdwn-btn")

    navigation.classList.remove("slide")
    navigation.classList.add("reverse-slide")
    rasvetaBox.classList.remove("display")
    dropdownnButton.addEventListener('click', function(e) {
        console.log(checkStatus)
        if (checkStatus == false) {
            rasvetaBox.classList.add("display")
        } else {
            rasvetaBox.classList.remove("display")
        }
    })
    img.setAttribute(
        'src',
        '/kontrola/assets/down-arrow.png',
    );
    checkStatus = !checkStatus;

})


const grejanje = document.querySelector("#grejanje").addEventListener('click', function(e) {
    settingsWindow = "grejanje"
    console.log(settingsWindow)
    var navigation = document.querySelector("nav")
    var img = document.querySelector("#image")
    navigation.classList.remove("slide")
    navigation.classList.add("reverse-slide")
    img.setAttribute(
        'src',
        '/kontrola/assets/down-arrow.png',
    );
    checkStatus = !checkStatus;
})


const susara = document.querySelector("#susara").addEventListener('click', function(e) {
    var navigation = document.querySelector("nav")
    var img = document.querySelector("#image")
    navigation.classList.remove("slide")
    navigation.classList.add("reverse-slide")
    img.setAttribute(
        'src',
        '/kontrola/assets/down-arrow.png',
    );
    checkStatus = !checkStatus;
})

//input or change
const dnevnaSobaSlide = document.querySelector("#dnevna-soba-slide").addEventListener("input", function(e) {
    var dnevnaSoba = document.querySelector("#dnevna-soba")
    dnevnaSoba.innerHTML = this.value + '%'
})
const kupatiloSlide = document.querySelector("#kupatilo-slide").addEventListener("input", function(e) {
    var kupatilo = document.querySelector("#kupatilo")
    kupatilo.innerHTML = this.value + '%'
})
const hodnikSlide = document.querySelector("#hodnik-slide").addEventListener("input", function(e) {
    var hodnik = document.querySelector("#hodnik")
    hodnik.innerHTML = this.value + '%'
})
const stepeniceSlide = document.querySelector("#stepenice-slide").addEventListener("input", function(e) {
    var stepenice = document.querySelector("#stepenice")
    stepenice.innerHTML = this.value + '%'
})
const soba1Slide = document.querySelector("#soba1-slide").addEventListener("input", function(e) {
    var soba1 = document.querySelector("#soba1")
    soba1.innerHTML = this.value + '%'
})
const soba2Slide = document.querySelector("#soba2-slide").addEventListener("input", function(e) {
    var soba2 = document.querySelector("#soba2")
    soba2.innerHTML = this.value + '%'
})