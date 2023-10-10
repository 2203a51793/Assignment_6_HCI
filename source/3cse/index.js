 var a = document.getElementById("a");
      var b = document.getElementById("b");
      var c = document.getElementById("c");
      function changeLinkColor(link) {
        var links = [a, b, c];
        for (var i = 0; i < links.length; i++) {
          links[i].style.color = "white";
        }
        link.style.color = "yellow";
      }
      a.addEventListener("click", function () {
        changeLinkColor(a);
      });

      b.addEventListener("click", function () {
        changeLinkColor(b);
      });

      c.addEventListener("click", function () {
        changeLinkColor(c);
      });