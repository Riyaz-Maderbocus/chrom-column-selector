class Column {
    constructor(html_id, name, img_src, diameter, minvol, maxVol, minHeight, maxHeight) {
        this.id = html_id;
        this.name = name;
        this.img_src = img_src;
        this.diameter = diameter;
        this.minVol = minvol;
        this.maxVol = maxVol;
        this.minHeight = minHeight;
        this.maxHeight = maxHeight;
        this.calculatedVolume = "";
        this.caluatedHeight = "";

    }

    getCard() {
        this.card = document.querySelector(`#${this.id}`);
    }
}


const all_columns = [
    new Column("axi_100_300", "Axichrom 100/300", "./assets/img/axichrom_stock.png", 100, 790, 2360, 10, 30),
    new Column("axi_100_500", "Axichrom 100/500", "./assets/img/axichrom_stock.png", 100, 2360, 3900, 30, 50),
    new Column("axi_140_300", "Axichrom 140/300", "./assets/img/axichrom_stock.png", 140, 1540, 4620, 10, 30),
    new Column("axi_200_300", "Axichrom 200/300", "./assets/img/axichrom_stock.png", 200, 3140, 9420, 10, 30),
    new Column("axi_70_300", "Axichrom 70/300", "./assets/img/axichrom_stock.png", 70, 390, 1150, 10, 30),
    new Column("bpg_140_950", "BPG 140/950", "./assets/img/bpg_stock.png", 140, 7080, 8400, 46, 55),
    new Column("xk_16_100", "XK 16/100", "./assets/img/xk_stock.png", 16, 136, 191, 68, 95),
    new Column("xk_16_70", "XK 16/70", "./assets/img/xk_stock.png", 16, 76, 147, 38, 65),
    new Column("xk_26_40", "XK 26/40", "./assets/img/xk_stock.png", 26, 45, 185, 8.5, 35),
    new Column("xk_26_70", "XK 26/70", "./assets/img/xk_stock.png", 26, 204, 345, 38.5, 65),
    new Column("xk_50_20", "XK 50/20", "./assets/img/xk_stock.png", 50, 20, 274, 1, 14),
    new Column("hiscale_16_20", "HiScale 16/20", "./assets/img/hiscale_stock.png", 16, 4, 40, 2, 20),
    new Column("hiscale_16_40", "HiScale 16/40", "./assets/img/hiscale_stock.png", 16, 16, 80, 8, 40),
    new Column("hiscale_26_40", "HiScale 26/40", "./assets/img/hiscale_stock.png", 26, 69, 212, 13, 40),
    new Column("hiscale_50_20", "HiScale 50/20", "./assets/img/hiscale_stock.png", 50, 19.6, 392, 1, 20),
    new Column("hiscale_50_40", "HiScale 50/40", "./assets/img/hiscale_stock.png", 50, 274, 785, 14, 40),

];



// const omnifit = {
//     radius: null,

//     maxVolume: null,
//     maxHeight: null,
//     calculatedVolume: null,
//     caluatedHeight: null



// }
// const hiScale_16_20 = {
//     card: document.querySelector("#hiscale_16_20"),
//     id: "#hiscale_16_20",
//     colName: "HiScale 16/20",
//     radius: null,
//     diameter: 16,
//     maxVolume: 40,
//     minHeight: 0,
//     maxHeight: 20,
//     calculatedVolume: null,
//     caluatedHeight: null,


// }

const columnsSection = document.querySelector(".columns-section");

for (let col of all_columns) {
    // Create card
    let newCard = document.createElement("div");
    newCard.id = col.id;
    newCard.classList.add("column-card");

    // create header for card
    let newHeader = document.createElement("div");
    newHeader.classList.add("column-header");
    let columnTitle = document.createElement("p");
    columnTitle.classList.add("column-title");
    columnTitle.innerText = `${col.name}`
    newHeader.append(columnTitle);
    newCard.append(newHeader);

    // create image section for card
    let imgSection = document.createElement("div");
    imgSection.classList.add("img-div");

    let newImg = document.createElement("img");
    newImg.classList.add("column-img");
    newImg.src = `${col.img_src}`;
    imgSection.append(newImg);
    newCard.append(imgSection);

    // single column selector
    let newSingleCol = document.createElement("div");
    newSingleCol.classList.add("single-column-selection");
    newCard.append(newSingleCol);

    // column stats section
    let colStatsDiv = document.createElement("div");
    colStatsDiv.classList.add("column-stats");

    // Diameter text
    let diameterP = document.createElement("p");
    diameterP.classList.add("stats-p", "diameter");
    diameterP.innerText = "Diameter (mm): ";
    let diameterSpan = document.createElement("span");
    diameterSpan.innerText = `${col.diameter}`;
    diameterP.append(diameterSpan);
    colStatsDiv.append(diameterP);

    // Min Vol Text
    let minVolP = document.createElement("p");
    minVolP.classList.add("stats-p", "min-vol");
    minVolP.innerText = "Min Volume (mL): ";
    let minVolSpan = document.createElement("span");
    minVolSpan.innerText = `${col.minVol}`;
    minVolP.append(minVolSpan);
    colStatsDiv.append(minVolP);

    // MaxVol Text
    let maxVolP = document.createElement("p");
    maxVolP.classList.add("stats-p", "max-vol");
    maxVolP.innerText = "Max Volume (mL): ";
    let maxVolSpan = document.createElement("span");
    maxVolSpan.innerText = `${col.maxVol}`;
    maxVolP.append(maxVolSpan);
    colStatsDiv.append(maxVolP);

    // Caculated volumn
    let calcVolP = document.createElement("p");
    calcVolP.classList.add("stats-p", "calculated-volume");
    calcVolP.innerText = "Calculated Vol (mL): ";
    let calcVolSpan = document.createElement("span");
    calcVolSpan.innerText = `${col.calculatedVolume}`;
    calcVolP.append(calcVolSpan);
    colStatsDiv.append(calcVolP);

    // Min Bed height Text
    let minHeightP = document.createElement("p");
    minHeightP.classList.add("stats-p", "min-height");
    minHeightP.innerText = "Min Height (cm): ";
    let minHeightSpan = document.createElement("span");
    minHeightSpan.innerText = `${col.minHeight}`;
    minHeightP.append(minHeightSpan);
    colStatsDiv.append(minHeightP);

    // Max Bed height Text
    let maxHeightP = document.createElement("p");
    maxHeightP.classList.add("stats-p", "max-height");
    maxHeightP.innerText = "Max Height (cm): ";
    let maxHeightSpan = document.createElement("span");
    maxHeightSpan.innerText = `${col.maxHeight}`;
    maxHeightP.append(maxHeightSpan);
    colStatsDiv.append(maxHeightP);

    // Caculated height
    let calcHeightP = document.createElement("p");
    calcHeightP.classList.add("stats-p", "calculated-height");
    calcHeightP.innerText = "Calculated Vol (mL): ";
    let calcHeightSpan = document.createElement("span");
    calcHeightSpan.innerText = `${col.caluatedHeight}`;
    calcHeightP.append(calcHeightSpan);
    colStatsDiv.append(calcHeightP);


    newCard.append(colStatsDiv);
    // add card to the column section
    columnsSection.append(newCard);
}

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