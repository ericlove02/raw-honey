fetchData();
pageRewrite("onboarding", "onboarding2", "button1")
pageRewrite("onboarding2", "onboarding3", "button2")
pageRewrite("onboarding3", "api-test", "button3")
pageRewrite("api-test", "info1", "button4")
document.getElementById("close-button").addEventListener("click", () => { window.close(); return; })

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
