window.onload = init;

function init() {
  document.getElementById("submit-btn-cookie").addEventListener("click", function () {
    console.log("Cookie button clicked!");
    userSelectedLanguageCookie();
  });

  document.getElementById("submit-btn-storage").addEventListener("click", function () {
    console.log("Button clicked!");
    userSelectedLanguageStorage();
  });
  setSelectedLanguageCookies();
  setSelectedLanguageStorage();
}

// Functions for storing and retrieving from cookies

function userSelectedLanguageCookie() {
  let selected = document.querySelector('input[name="language-cookie"]:checked');
  let value = selected ? selected.value : null;
  // console.log(value);
  document.cookie = `selected_language = ${value};`;
}


function getCookie(c_name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === c_name) {
          return decodeURIComponent(value);
      }
  }
  return "";
}

function setSelectedLanguageCookies() {
  getCookie();
  const selectedLanguage = getCookie("selected_language");
  console.log(`Value retrieved from cookie: ${selectedLanguage}`);
  const radioButtons = document.querySelectorAll('input[name="language-cookie"]');
  for (const radioButton of radioButtons) {
    if (radioButton.value === selectedLanguage) {
      radioButton.checked = true;
      break;
    }
  }
}


//Function for storing and retrieving from storage 

function userSelectedLanguageStorage() {
  let selected = document.querySelector('input[name="language-storage"]:checked');
  if (selected) {
    localStorage.setItem("userLanguage", selected.value);
    console.log("Language saved:", selected.value);
  } else {
    console.log("Please select a language before saving.");
  }
  // console.log(localStorage);
}

function setSelectedLanguageStorage() {
  const savedLanguage = localStorage.getItem("userLanguage");
  if (savedLanguage) {
    console.log("Value retrieved from storage:", savedLanguage);
    const radioButtons = document.querySelectorAll('input[name="language-storage"]');
    for (const radioButton of radioButtons) {
      if (radioButton.value === savedLanguage) {
        radioButton.checked = true;
        break;
      }
    }
  }
}

