if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        console.log("ServiceWorker 註冊成功，作用域：", registration.scope);
      },
      function (error) {
        console.log("ServiceWorker 註冊失敗：", error);
      }
    );
  });
}
