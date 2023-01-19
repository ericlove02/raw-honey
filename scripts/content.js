const total = document.getElementsByClassName("grand-total-price");

if (total.length >= 1) {
    alert("Raw honey has detected that you are on amazon and have a total purchase of " + total[0].textContent + "!");
}