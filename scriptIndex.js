var closeCookieBanner;
var cookieBanner;
var storage = window.sessionStorage;
window.onload = (event) => {
  closeCookieBanner = document.getElementById("AcceptBanner");
};

$(document).ready(function() {
  cookieBanner = document.getElementById("banner");

  if (storage.getItem("cookie") != "shjown") {
    cookieBanner.style.display="block";
  }else {
    cookiesAccepted();
  };
});

function closeBanner(){
  storage.setItem("cookie","shown");
  cookieBanner.style.display="none";
  cookiesAccepted();
}


function cookiesAccepted(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GZQD2XWK82');
};
