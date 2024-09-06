let counter = 0;

// Завантаження рахунку з локального сховища
function loadScore() {
    const savedCounter = localStorage.getItem('counter');
    if (savedCounter) {
        counter = parseInt(savedCounter, 10);
        document.getElementById("counter").textContent = counter;
    }
}

// Збереження рахунку в локальне сховище
function saveScore() {
    localStorage.setItem('counter', counter);
}

// Клік
document.getElementById("clickButton").addEventListener("click", function() {
    counter++;
    document.getElementById("counter").textContent = counter;
    saveScore();
});

// Завантаження рахунку при старті гри
loadScore();
