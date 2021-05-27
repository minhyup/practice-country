window.onload = function () {
  // alert("hello");
  const toggleSwitch = document.querySelector("#toggle");
  const filterArrow = document.querySelector("#filter-arrow");

  // console.log(element.style.color);
  if (filterArrow) {
    filterArrow.addEventListener("click", function (e) {
      console.log("hi");
      const flist = document.querySelector("#filter-list");
      if (flist.style.display === "block") {
        flist.style.display = "none";
      } else {
        flist.style.display = "block";
      }
    });
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", function (e) {
      console.log(e.target.checked);
      const isDark = e.target.checked;

      const themeIcon = document.querySelector(".theme-icon img");
      const themeText = document.querySelector(".theme-icon em");
      if (isDark) {
        // 다크모드
        document.documentElement.setAttribute("data-theme", "dark");

        themeIcon.src = "https://img.icons8.com/offices/32/ffffff/sun.png";
        themeText.innerText = "Light Mode";
      } else {
        // light 모드
        document.documentElement.setAttribute("data-theme", "light");
        themeIcon.src =
          "https://img.icons8.com/emoji/32/000000/crescent-moon-emoji.png";
        themeText.innerText = "Dark Mode";
      }
    });
  }
};
