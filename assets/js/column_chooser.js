const omnifit = {
    radius: null,

    maxVolume: null,
    maxHeight: null,
    calculatedVolume: null,
    caluatedHeight: null



}
const hiScale_16_20 = {
    card: document.querySelector("#hiscale_16_20"),
    colName: "HiScale 16/20",
    radius: null,
    diameter: 16,
    maxVolume: 40,
    minHeight: 0,
    maxHeight: 20,
    calculatedVolume: null,
    caluatedHeight: null,


}

const cardParentDiv = document.querySelector(".columns-section");

// cardParentDiv.addEventListener("click", () => {
//     alert("I got clicked")
// })

const test = document.querySelector("#test");

// Use to get the id of the sub element clicked
// test.addEventListener("click", (e) => {
//     console.log(this);
//     console.log(e.srcElement);
//     console.log(e.srcElement.parentElement.id);
//     console.log(e.parentElement.id);
//     console.log(e.target.parentElement.id);

// })

hiScale_16_20.card.querySelector(".diameter span").innerText = hiScale_16_20.diameter;

hiScale_16_20.card.addEventListener("click", () => {
    alert("I got clicked first card")
})