var nameSite = document.querySelector("#site");
var urlSite = document.querySelector("#url");
var closeBtn = document.querySelector("#closeBtn");
var boxModal = document.querySelector(".box-info");

var webSiteList = [];

if (localStorage.getItem("name") != null) {
  webSiteList = JSON.parse(localStorage.getItem("name"));
  displayData(webSiteList);
}

//function add //
function addWebSite() {
  if (validName() == true && validLink() == true) {
    var site = {
      name: nameSite.value,
      link: urlSite.value,
    };
    webSiteList.push(site);
    localStorage.setItem("name", JSON.stringify(webSiteList));
    displayData(webSiteList);
    clearWebSite(webSiteList);
  }
}
// function clear//

function clearWebSite() {
  nameSite.value = "";
  urlSite.value = "";
}
// function display//

function displayData(arr) {
  var temp = "";
  for (var i = 0; i < arr.length; i++) {
    temp +=
      `  <tr>
        <td>${i + 1}</td>
        <td>` +
      arr[i].name +
      `</td>
        <td><a class="btn btn-visit" id="btn-visit" href="${arr[i].link}" target="_blank"> <i class="fa-solid fa-eye"></i> visit</a></td>
        
        <td> <button class= "btn btn-delete pe-2" onclick= deleteWeb(` +
      i +
      `)> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
      </tr>`;
  }
  document.getElementById("tBody").innerHTML = temp;
}

// function delete//
function deleteWeb(i) {
  webSiteList.splice(i, 1);
  localStorage.setItem("name", JSON.stringify(webSiteList));
  displayData(webSiteList);
}

// regular exprition//

nameSite.addEventListener("blur", validName);
urlSite.addEventListener("blur", validLink);

function validName() {
  var regexName = /^\w{3,}(\s+\w+)*$/;
  if (regexName.test(nameSite.value) == true) {
    nameSite.classList.add("is-valid");
    nameSite.classList.remove("is-invalid");
    document.querySelector(".box-info").classList.replace("d-block", "d-none");
    return true;
  } else {
    nameSite.classList.add("is-invalid");
    nameSite.classList.remove("is-valid");
    document.querySelector(".box-info").classList.replace("d-none", "d-block");

    return false;
  }
}
function validLink() {
  var regexUrl =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

  if (regexUrl.test(urlSite.value) == true) {
    urlSite.classList.add("is-valid");
    urlSite.classList.remove("is-invalid");
    document.querySelector(".box-info").classList.replace("d-block", "d-none");
    return true;
  } else {
    urlSite.classList.add("is-invalid");
    urlSite.classList.remove("is-valid");
    document.querySelector(".box-info").classList.replace("d-none", "d-block");

    return false;
  }
}

// close model function//


function closeModel() {
    boxModal.classList.add("d-none");
    
}
closeBtn.addEventListener("click", closeModel);