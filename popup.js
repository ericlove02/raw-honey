pageRewrite("onboarding", "onboarding2", "button1")
pageRewrite("onboarding2", "onboarding3", "button2")

function pageRewrite(curr, dest, butt) {
    document.getElementById(butt).addEventListener("click", () => {
        document.getElementById(curr).style.visibility = "none";
        document.getElementById(curr).style.display = "none";
        document.getElementById(dest).style.visibility = "visible";
        document.getElementById(dest).style.display = "block";
        return;
    })
}
