const menssageHmtl = document.querySelector(".menssage");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  menssageHmtl.textContent = Number(menssageHmtl.textContent) + 1;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(() => {
      console.log("Service Worker registrado.");
    })
    .catch((error) => {
      console.log(error);
    });
}
