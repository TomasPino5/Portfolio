export function getNavbar() {
  let isDark = window.matchMedia('(prefers-color-scheme: dark)')

  let btnColor = document.getElementById('navIcon');

  var state;

  if (isDark.matches) {
    btnColor.innerHTML = '<i class="fa-solid fa-moon"></i>'
    state = false;
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    btnColor.innerHTML = '<i class="fa-regular fa-sun"></i>'
    state = true;
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }

  btnColor.addEventListener('click', () => {
    if (state) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      document.getElementById("itemsContainer").classList.remove("scrolledLight");
      document.getElementById("itemsContainer").classList.add("scrolledDark");
      btnColor.innerHTML = '<i class="fa-solid fa-moon"></i>'
      state = false;
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      btnColor.innerHTML = '<i class="fa-regular fa-sun"></i>'
      document.getElementById("itemsContainer").classList.remove("scrolledDark");
      document.getElementById("itemsContainer").classList.add("scrolledLight");
      state = true;
    }
    if (window.scrollY < 50) {
      document.getElementById("itemsContainer").classList.remove("scrolledLight");
      document.getElementById("itemsContainer").classList.remove("scrolledDark");
    }
  })

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      if (!state) {
        document.getElementById("itemsContainer").classList.remove("scrolledLight");
        document.getElementById("itemsContainer").classList.add("scrolledDark");
      } else {
        document.getElementById("itemsContainer").classList.remove("scrolledDark");
        document.getElementById("itemsContainer").classList.add("scrolledLight");
      }
    } else {
      document.getElementById("itemsContainer").classList.remove("scrolledLight");
      document.getElementById("itemsContainer").classList.remove("scrolledDark");
    }
  });
}
