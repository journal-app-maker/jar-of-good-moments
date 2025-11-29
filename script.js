const input = document.getElementById("memoryInput");
const addBtn = document.getElementById("addBtn");
const slipsContainer = document.getElementById("slipsContainer");

// soothing colors
const colors = ["#ffe2e2", "#e2f7ff", "#fff9c4", "#e4ffe4", "#f3e5f5"];

let memories = JSON.parse(localStorage.getItem("memories")) || [];
displayMemories();

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const slip = {
        text,
        color: colors[Math.floor(Math.random() * colors.length)]
    };

    memories.push(slip);
    localStorage.setItem("memories", JSON.stringify(memories));const input = document.getElementById("memoryInput");
const addBtn = document.getElementById("addBtn");
const slipsContainer = document.getElementById("slipsContainer");

// Soft pastel colors
const colors = ["#ffe2e2", "#e2f7ff", "#fff9c4", "#e4ffe4", "#f3e5f5"];

let memories = JSON.parse(localStorage.getItem("memories")) || [];
displayMemories();

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const slip = {
        text,
        color: colors[Math.floor(Math.random() * colors.length)]
    };

    memories.push(slip);
    localStorage.setItem("memories", JSON.stringify(memories));

    input.value = "";
    displayMemories();
});

function displayMemories() {
    slipsContainer.innerHTML = "";
    memories.forEach(slip => {
        const div = document.createElement("div");
        div.className = "slip";
        div.style.background = slip.color;
        div.innerText = slip.text;
        slipsContainer.appendChild(div);
    });
}

    input.value = "";
    displayMemories();
});

function displayMemories() {
    slipsContainer.innerHTML = "";
    memories.forEach(slip => {
        const div = document.createElement("div");
        div.className = "slip";
        div.style.background = slip.color;
        div.innerText = slip.text;
        slipsContainer.appendChild(div);
    });
}
