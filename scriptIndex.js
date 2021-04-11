var closeCookieBanner;
var cookieBanner;
var storage = window.sessionStorage;
window.onload = (event) => {
  closeCookieBanner = document.getElementById("AcceptBanner");
  cookieBanner = document.getElementById("bannerContainer");

  if (storage.getItem("cookie") != "sown") {
    cookieBanner.innerHTML = '<div id="banner" style="display: none"> <p> This sites uses Google Analytics to collect cookies. <br> Collected data will be used to analyse users action on the sites. <br> Collected data are IP, <a href=’insert-link’>cookie policy</a> </p> <button id="AcceptBanner" onclick="closeBanner()">Accept</button>';
  }else {
    cookiesAccepted();
  };
};

//$(document).ready(function() {

//});

function closeBanner(){
  storage.setItem("cookie","shown");
  cookieBanner.innerHTML = '';
  cookiesAccepted();
}


function cookiesAccepted(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GZQD2XWK82');
};
