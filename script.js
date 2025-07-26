const dark = document.getElementById("dark");
const light = document.getElementById("light");
const themeName = document.getElementById("theme");
const switcher = document.querySelector(".switcher");
const dashboardText = document.getElementById("dashboard-text");
const totalFollowers = document.getElementById("total-followers");
const totalCard = document.querySelectorAll(".total-card-container");
const followers = document.querySelectorAll(".count");
const overviewText = document.getElementById("overview-text");
// const overviewHeader = document.querySelectorAll(".overview-header");
const overviewCount = document.querySelectorAll(".overview-count");
const overviewCard = document.querySelectorAll(".overview-card-container");


document.addEventListener("DOMContentLoaded", () => {
    light.style.background = "none"
})

class Display {

    static light() {
    dark.style.background = "none";
    light.style.background = "white";
    themeName.innerText = "Light Mode";
    document.body.style.backgroundColor = "white";
    themeName.style.color = "hsl(230, 22%, 74%)";
    switcher.style.background = "hsl(230, 22%, 74%)";
    dashboardText.style.color = "hsl(230, 17%, 14%)";
    totalFollowers.style.color = "hsl(228, 12%, 44%)";
    totalCard.forEach((card) => {
        card.style.backgroundColor = "hsl(227, 47%, 96%)";
    });
    
    followers.forEach(counter => counter.style.color = "black");
    overviewText.style.color = "hsl(228, 12%, 44%)";
    // overviewHeader.forEach(header => header.style.color = "hsl(230, 17%, 14%)");
    overviewCount.forEach(counter => counter.style.color = "black");
    overviewCard.forEach(card => card.style.backgroundColor = "hsl(227, 47%, 96%)");
    }

    static dark() {
    light.style.background = "none";
    dark.style.background = "hsl(232, 19%, 15%)";
    themeName.innerText = "Dark Mode";
    themeName.style.color = "hsl(228, 34%, 66%)"
    document.body.style.backgroundColor = "hsl(232, 19%, 15%)";
    switcher.style.background = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    dashboardText.style.color = "";
    totalFollowers.style.color = "";
    totalCard.forEach((card) => {
        card.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    followers.forEach(counter => counter.style.color = "white");
    overviewText.style.color = "white";
    // overviewHeader.forEach(header => header.style.color = "white");
    overviewCount.forEach(count => count.style.color = "white");
    overviewCard.forEach(card => card.style.backgroundColor = "hsl(228, 28%, 20%)");
    }
}

light.addEventListener("click", () => {
    Display.light();

})

dark.addEventListener("click", () => {
    Display.dark();
})




