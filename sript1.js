document.getElementById("changeTextBtn").addEventListener("click", function() {
    this.textContent = "Clicked!";
});

document.getElementById("toggleBoxBtn").addEventListener("click", function() {
    let box = document.getElementById("hoverBox");
    box.classList.toggle("hidden");
});

document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
});

document.getElementById("nameInput").addEventListener("input", function() {
    let feedback = document.getElementById("feedback");
    feedback.textContent = this.value.trim() ? `Hello, ${this.value}!` : "";
});
