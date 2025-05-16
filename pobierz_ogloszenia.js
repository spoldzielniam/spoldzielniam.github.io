const apiUrl = "https://script.google.com/macros/s/AKfycby5t3wjub4H5OEy4y7yJZZFZD3H0139mkGlo_a62zxRzGgAuM13z3QrD5LP-VTssiAk/exec"; // <-- Twój URL

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    const kontener = document.querySelector(".aktualnosci-lista");
    const kategoriaStrony = kontener?.dataset.kategoria;

    data.forEach(wiersz => {
      if (wiersz.kategoria === kategoriaStrony) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${wiersz.tytul}</strong><br><p>${wiersz.tresc}</p>`;
        kontener.appendChild(li);
      }
    });
  })
  .catch(err => {
    console.error("Błąd podczas pobierania danych:", err);
  });
