const input = document.getElementById("memoryInput");
const addBtn = document.getElementById("addBtn");
const viewBtn = document.getElementById("viewBtn");
const closePopup = document.getElementById("closePopup");

const slipsContainer = document.getElementById("slipsContainer");
const memoryList = document.getElementById("memoryList");
const popup = document.getElementById("popup");

let memories = JSON.parse(localStorage.getItem("memories")) || [];

const colors = ["#ffd1dc", "#ffe5a3", "#c7f9cc", "#a0e7e5", "#b5d8ff"];

// STRICT SAFE AREA INSIDE JAR
function renderSlips() {
    slipsContainer.innerHTML = "";

    const areaWidth = slipsContainer.clientWidth;
    const areaHeight = slipsContainer.clientHeight;

    memories.forEach((text, index) => {
        const slip = document.createElement("div");
        slip.className = "slip";
        slip.textContent = text;

        slip.style.background = colors[index % colors.length];

        const left = Math.random() * (areaWidth - 120);
        const top = Math.random() * (areaHeight - 40);

        slip.style.left = left + "px";
        slip.style.top = top + "px";

        slipsContainer.appendChild(slip);
    });
}

addBtn.addEventListener("click", () => {
    let text = input.value.trim();
    if (!text) return;

    memories.push(text);
    localStorage.setItem("memories", JSON.stringify(memories));

    input.value = "";
    renderSlips();
});

viewBtn.addEventListener("click", () => {
    memoryList.innerHTML = "";
    memories.forEach(m => {
        let li = document.createElement("li");
        li.textContent = m;
        memoryList.appendChild(li);
    });

    popup.classList.remove("hidden");
});

closePopup.addEventListener("click", () => popup.classList.add("hidden"));

renderSlips();
