class Column {
    constructor(html_id, name, img_src, diameter, maxVol, maxHeight) {
        this.id = html_id;
        this.name = name;
        this.img_src = img_src;
        this.diameter = diameter;

        this.maxVol = maxVol;
        this.maxHeight = maxHeight;
        this.calculatedVolume = null;
        this.caluatedHeight = null;

    }

    getCard() {
        this.card = document.querySelector(`#${this.id}`);
    }
}

const col1 = new Column("abc", "abc", "abc", 25, 250, 12);

// let arraytest = [ one = 1,2,3]
const myArray = [

    new Column("abc", "abc", "abc", 25, 250, 12),
    new Column("def", "def", "def", 25, 250, 12),
]


for (let c of myArray) {
    console.log(c.id)
}

const omnifit = {
    radius: null,

    maxVolume: null,
    maxHeight: null,
    calculatedVolume: null,
    caluatedHeight: null



}
const hiScale_16_20 = {
    card: document.querySelector("#hiscale_16_20"),
    id: "#hiscale_16_20",
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




// utilities

// Use to get the id of the sub element clicked
// test.addEventListener("click", (e) => {
//     console.log(this);
//     console.log(e.srcElement);
//     console.log(e.srcElement.parentElement.id);
//     console.log(e.parentElement.id);
//     console.log(e.target.parentElement.id);

// })


//  Use this to change the inner text of the spans
hiScale_16_20.card.querySelector(".diameter span").innerText = hiScale_16_20.diameter;

// Click listener for one card
hiScale_16_20.card.addEventListener("click", () => {
    alert("I got clicked first card")
})