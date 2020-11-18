var arrLang = {
    "en": {
        "store": "store",
        "ABOUT": "About Us",
        "CONTACT": "Contact Us",
    },
    "jp": {
        "store": "首頁",
        "ABOUT": "關於我們",
        "CONTACT": "聯絡我們",
    }
};  

$(document).ready(function() {
    // The default language is English
    var lang = "en-gb";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
  
  // get/set the selected language
  $(".translate").click(function() {
    var lang = $(this).attr("id");
  
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });