const cookie_window = document.getElementById("cookies_messages");

if (
  getCookie("cookie_modal_shown").length != 0 &&
  getCookie("cookie_accept").length == 0
) {
  cookie_window.style.visibility = "visible";
} else if (
  getCookie("cookie_modal_shown").length == 0 &&
  getCookie("cookie_accept").length == 0
) {
  cookie_window.classList.add("show");
  setCookie("cookie_modal_shown", true);
  setTimeout(() => {
    cookie_window.style.visibility = "visible";
    setTimeout(() => cookie_window.classList.remove("show"), 100);
  }, 250);
}

const cookies_messages_button = document.getElementsByClassName(
  "cookies_messages_button"
)[0];

console.log(cookies_messages_button);
cookies_messages_button.addEventListener("click", () => {
  setCookie("cookie_accept", true);
  cookie_window.classList.add("hide");
  setTimeout(() => cookie_window.removeAttribute("style"), 180);
});

// Create cookie
function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 3600 * 1000 * 24 * 365 * 10);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
