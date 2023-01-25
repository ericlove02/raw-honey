fetchData();
pageRewrite("onboarding", "onboarding2", "button1")
pageRewrite("onboarding2", "onboarding3", "button2")
pageRewrite("onboarding3", "api-test", "button3")
pageRewrite("api-test", "info1", "button4")
// pageRewrite("info1", "info2", "button5")
// document.getElementById("close-button1").addEventListener("click", () => { window.close(); return; })
document.getElementById("close-button2").addEventListener("click", () => { window.close(); return; })


document.getElementById("button4").addEventListener("click", () => {
    console.log("saving...");
    setStorage("selected", true);
    return;
});
document.getElementById("close-button1").addEventListener("click", () => {
    console.log("getting...");
    getStorage("selected");
    return;
});
// this is my comment

function getStorage(key) {
    chrome.storage.sync.get(key, function (dataStored) {
        if (dataStored["selected"]) {
            selectedvar = dataStored["selected"];
            console.log(selectedvar);
        }
    });
}

function setStorage(key, value) {
    chrome.storage.sync.set({ key: value }, function () {
        console.log("Data was saved.");
    });
}


function pageRewrite(curr, dest, butt) {
    document.getElementById(butt).addEventListener("click", () => {
        document.getElementById(curr).style.visibility = "none";
        document.getElementById(curr).style.display = "none";
        document.getElementById(dest).style.visibility = "visible";
        document.getElementById(dest).style.display = "block";
        return;
    })
}

async function fetchData() {
    const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
    const record = await res.json();

    document.getElementById("date").innerHTML = record.data[0].date;
    document.getElementById("areaName").innerHTML = record.data[0].areaName;
    document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
    document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
}
