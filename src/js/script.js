//1 ER CODE
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color = "red"
'red'

//2 EME CODE
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
enRougeSuiteAClick.addEventListener("click", (evt) => {
    enRougeSuiteAClick.style.color = "red"
});

//3 EME CODE 
const collH2 = document.querySelectorAll("h2")
collH2.forEach((elm) => {
    elm.addEventListener("click", (evt) => {
        evt.target.style.color = "red";
    });
});