"use strict";

(function () {
  const loginModal = document.querySelector("#login-modal");
  const loginModalCloseButton = document.querySelector(
    "#login-modal-close-btn"
  );
  const loginButton = document.querySelector("#login-btn");
  const loginForm = document.querySelector("#login-form");
  const loginSubmit = document.querySelector("#login-submit");

  const showLoginModal = () => {
    loginModal.classList.add("show");
    loginModal.addEventListener("keyup", function (ev) {
      console.log(ev.key);
      // if (ev.key === ???){
      //     // TODO :)
      // }
    });
  };

  const closeLoginModal = () => {
    loginModal.classList.remove("show");
  };

  window.onload = function () {
    loginButton.onclick = function () {
      showLoginModal();
    };
    loginModalCloseButton.addEventListener("click", function () {
      closeLoginModal();
    });

    loginSubmit.addEventListener("click", function () {
      // TODO: implémenter le login (hors examen)
    });
  };
})();
