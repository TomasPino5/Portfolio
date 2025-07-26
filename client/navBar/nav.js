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

let removeStyle = () => {
  let links = document.querySelectorAll('.selected-item')
  links.forEach(link => {
    link.classList.remove('selected-item');
  })
}

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.innerWidth > 768) {
    if (window.scrollY > 50 && window.scrollY < 400) {
      removeStyle();
      document.getElementById('about').classList.add('selected-item');
    } else if (window.scrollY >= 520 && window.scrollY < 930) {
      removeStyle();
      document.getElementById('exp').classList.add('selected-item');
    } else if (window.scrollY >= 1086 && window.scrollY < 1380) {
      removeStyle();
      document.getElementById('proj').classList.add('selected-item');
    } else if (window.scrollY >= 1526 && window.scrollY < 1575) {
      removeStyle();
      document.getElementById('tech').classList.add('selected-item');
    } else {
      removeStyle();
    }
  } else {
    if (window.scrollY >= 10 && window.scrollY < 585) {
      removeStyle();
      document.getElementById('about').classList.add('selected-item');
    } else if (window.scrollY >= 757 && window.scrollY < 1313) {
      removeStyle();
      document.getElementById('exp').classList.add('selected-item');
    } else if (window.scrollY >= 1468 && window.scrollY < 1992) {
      removeStyle();
      document.getElementById('proj').classList.add('selected-item');
    } else if (window.scrollY >= 2148 && window.scrollY < 2600) {
      removeStyle();
      document.getElementById('tech').classList.add('selected-item');
    } else {
      removeStyle();
    }
  }
})