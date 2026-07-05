document.addEventListener("DOMContentLoaded", () => {

    // Datum svatby
    const weddingDate = new Date("2026-10-10T11:00:00");

    function updateCountdown() {

        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {

            document.getElementById("countdown").innerHTML = "<h3>Dnes je náš velký den ❤️</h3>";
            return;

        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);

        document.getElementById("days").textContent = String(days).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

});
