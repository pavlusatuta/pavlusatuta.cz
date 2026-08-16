document.addEventListener("DOMContentLoaded", () => {
    const weddingDate = new Date("2026-10-10T11:00:00");

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const countdownEl = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate.getTime() - now.getTime();

        if (diff <= 0) {
            countdownEl.innerHTML = '<p class="countdown-finished">Dnes je náš velký den ♥</p>';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);

        daysEl.textContent = String(days).padStart(2, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
    }

    updateCountdown();

    // Vteřiny nezobrazujeme, proto stačí aktualizace jednou za minutu.
    setInterval(updateCountdown, 60000);
});
