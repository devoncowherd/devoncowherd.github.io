const homepage = "devoncowherd.com";
const delay = 5000;
const redirect = function() {
  window.location.replace(homepage);
}

setTimeout(redirect, delay);
