const WA = "919080769201";
const form = document.getElementById("bookingForm");
const langBtn = document.getElementById("langBtn");
let kannada = false;

function applyLanguage() {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = kannada ? el.dataset.kn : el.dataset.en;
  });
  langBtn.textContent = kannada ? "English" : "ಕನ್ನಡ";
}

langBtn.addEventListener("click", () => { kannada = !kannada; applyLanguage(); });

form.addEventListener("submit", e => {
  e.preventDefault();
  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value;
  const passengers = document.getElementById("passengers").value;
  const car = document.getElementById("car").value;
  const msg = `Hello SM Tours and Travel, I want a taxi quote.%0A%0AFrom: ${encodeURIComponent(from)}%0ATo: ${encodeURIComponent(to)}%0ATravel date: ${encodeURIComponent(date)}%0APassengers: ${encodeURIComponent(passengers)}%0ACar preference: ${encodeURIComponent(car)}`;
  window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
});
