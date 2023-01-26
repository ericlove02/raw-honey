window.onload = async function main() {

    // universal event listeners
    document.getElementById("button4").addEventListener("click", () => {
        console.log("saving...");
        setOnboardingStatus(true);
        return;
    });
    document.getElementById("logout").addEventListener("click", () => {
        console.log("saving...");
        setOnboardingStatus(false);
        window.close();
        return;
    });
    document.getElementById("close-button1").addEventListener("click", () => { window.close(); return; })
    document.getElementById("close-button2").addEventListener("click", () => { window.close(); return; })

    // if user has already onboarded
    if (await getStorage("onboardingStatus")) {

        document.getElementById('welcome').classList.add('hide-div');
        document.getElementById("info1").classList.remove('hide-div');

    } else {

        fetchData();
        pageRewrite("welcome", "onboarding", "button0")
        pageRewrite("onboarding", "onboarding2", "button1")
        pageRewrite("onboarding2", "onboarding3", "button2")
        pageRewrite("onboarding3", "api-test", "button3")
        pageRewrite("api-test", "info1", "button4")
    }
}


const getStorage = async function (key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get(key, function (value) {
                resolve(value[key]);
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
        document.getElementById(curr).classList.add('hide-div');
        document.getElementById(dest).classList.remove('hide-div');
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
