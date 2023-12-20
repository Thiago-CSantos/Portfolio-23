function redirectToRepo() {
      window.open("https://github.com/Thiago-CSantos/ApiBolsaValores", "_blank");
}

const link = document.getElementById("linkToRepo");

if (link != null) {
      link.addEventListener("click", function () {
            redirectToRepo();
      });
}
else {
      console.error("Elemento com ID 'linkToRepo' não encontrado no DOM.");
}

