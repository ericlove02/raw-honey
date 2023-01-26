pageRewrite("welcome", "onboarding", "button0")
document.getElementById("welcome").addEventListener("click", () => {
    console.log("getting...");
    getData();
    return;
});

async function getData() {
    console.log(await getOnboardingStatus());
}

if (false) {
    fetchData();
    console.log('here')
} else {
    console.log("inside of the else")
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
        setOnboardingStatus(true);
        return;
    });
    document.getElementById("close-button1").addEventListener("click", () => {
        console.log("getting...");
        let promise = getOnboardingStatus();
        promise.then((data) => console.log(data));
        return;
    });
}

const getOnboardingStatus = async function () {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get("onboardingStatus", function (value) {
                resolve(value["onboardingStatus"]);
            });
        } catch (ex) {
            reject(ex);
        }
    });
};

function setOnboardingStatus(value) {
    chrome.storage.sync.set({ "onboardingStatus": value }, function () {
        console.log("Status saved");
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
