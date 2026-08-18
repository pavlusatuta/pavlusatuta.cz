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



const rsvpForm = document.getElementById("rsvp-form");

if (rsvpForm) {

    const ucast = document.getElementById("ucast");
    const pocetWrap = document.getElementById("pocet-wrap");
    const message = document.getElementById("rsvp-message");

    // Po načtení stránky počet osob schovat
    pocetWrap.style.display = "none";


    // Změna účasti
    ucast.addEventListener("change", () => {

        if (ucast.value === "Ano, přijdu") {
            pocetWrap.style.display = "block";
        } else {
            pocetWrap.style.display = "none";
        }

    });


    // Odeslání formuláře
    rsvpForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const button = rsvpForm.querySelector(".rsvp-button");

        button.disabled = true;
        button.textContent = "Odesílám…";
        message.textContent = "";

        const data = {
            jmeno: document.getElementById("jmeno").value.trim(),
            ucast: document.getElementById("ucast").value,
            pocet: document.getElementById("pocet").value,
            poznamka: document.getElementById("poznamka").value.trim()
        };

        try {

            await fetch(
                "https://script.google.com/macros/s/AKfycbwpYkVUDh-HcndELvzngitwiPSvSh4RaJhYgE40l58_5oiIRGKw2UUoOCTnTE82NqEfdQ/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },
                    body: JSON.stringify(data)
                }
            );

            message.textContent =
                "Děkujeme, vaše potvrzení bylo odesláno.";

            rsvpForm.reset();

            // Po resetu znovu schovat počet osob
            pocetWrap.style.display = "none";

        } catch (error) {

            message.textContent =
                "Odeslání se nepodařilo. Zkuste to prosím znovu.";

            console.error(error);

        } finally {

            button.disabled = false;
            button.textContent = "Potvrdit účast";

        }

    });
}
