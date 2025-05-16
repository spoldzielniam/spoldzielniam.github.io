const lista = document.querySelector(".aktualnosci-lista");
const kategoria = lista.dataset.kategoria;

fetch("https://script.google.com/macros/s/AKfycby5t3wjub4H5OEy4y7yJZZFZD3H0139mkGlo_a62zxRzGgAuM13z3QrD5LP-VTssiAk/exec")
  .then(res => res.json())
  .then(data => {
    lista.innerHTML = "";
    data.reverse().forEach(item => {
      if (item.kategoria === kategoria) {
        const el = document.createElement("li");
        let obraz = item.zdjecie ? `<img src="${item.zdjecie}" style="max-width:100%;">` : "";
        el.innerHTML = `
          <article>
            <h3>${item.tytul}</h3>
            <p>${item.tresc}</p>
            ${obraz}
            <small>Dodano: ${new Date(item.data).toLocaleString()}</small>
          </article>
        `;
        lista.appendChild(el);
      }
    });
  });
