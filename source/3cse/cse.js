var links = document.querySelectorAll(".r");

function changeLinkColor(link) {
  links.forEach(function (link) {
    link.style.backgroundColor = "";
  });
  link.style.backgroundColor = "#04AA6D";
}
links.forEach(function (link) {
  link.addEventListener("click", function () {
    changeLinkColor(link);
  });
});