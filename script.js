const input = document.getElementById("memoryInput");
const addBtn = document.getElementById("addBtn");
const slipsContainer = document.getElementById("slipsContainer");

let memories = JSON.parse(localStorage.getItem("memories")) || [];

// random soothing pastel colors
const colors = ["#ffd1dc", "#ffe5a3", "#c7f9cc", "#a0e7e5", "#b5d8ff"];

function renderSlips() {
    slipsContainer.innerHTML = "";

    memories.forEach((text, index) => {
        const slip = document.createElement("div");
        slip.className = "slip";

        slip.textContent = text;

        slip.style.background = colors[index % colors.length];

        slip.style.left = Math.random() * 55 + "%";
        slip.style.top = Math.random() * 55 + "%";
        slip.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;

        slipsContainer.appendChild(slip);
    });
}

addBtn.addEventListener("click", () => {
    let text = input.value.trim();
    if (text === "") return;

    memories.push(text);
    localStorage.setItem("memories", JSON.stringify(memories));

    input.value = "";
    renderSlips();
});

renderSlips();
