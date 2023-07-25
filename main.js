var items = [];
if (localStorage.getItem("item") != null) {
  items = JSON.parse(localStorage.getItem("item"));
  invok();
}
function getData() {
  if (checkInput() == true && checkSite() == true) {
    var siteName = document.getElementById("siteName").value;
    var urlName = document.getElementById("urlName").value;
    var item = {
      name: siteName,
      site: urlName,
    };
    items.push(item);
    localStorage.setItem("item", JSON.stringify(items));
    invok();
  } else {
    alert("Undefind");
  }
}
function invok() {
  var cartona = "";
  for (var i = 0; i < items.length; i++) {
    cartona += `
        <tr class="fw-bold">
        <td>${items[i].name}</td>
        <td><a href="${items[i].site}"<button onclick="visitBtn()" class="btn btn-success"><i class="fa-solid fa-eye"></i></button>visit</a></td>
        <td><button onclick="deleteItem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
        `;
        
  }
  document.getElementById("demo").innerHTML = cartona;
  clear();
}
function clear() {
  var siteName = (document.getElementById("siteName").value = "");
  var urlName = (document.getElementById("urlName").value = "");
}
function deleteItem(index) {
  items.splice(index, 1);
  invok();
}

function checkInput() {
  var regexName = /^[A-Z][a-z]{2,9}/;
  var text = siteName.value;
  var massegeName = document.getElementById("messageName");
  if (regexName.test(text) == true) {
    //valid
    siteName.classList.add("is-valid");
    siteName.classList.remove("is-invalid");
    massegeName.classList.add("d-none");
    return true;
  } else {
    siteName.classList.add("is-invalid");
    siteName.classList.remove("valid");
    massegeName.classList.remove("d-none");
    return false;
    //Not Valid
  }
}
function checkSite() {
  var regexName = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  var text = urlName.value;
  if (regexName.test(text) == true) {
    urlName.classList.add("is-valid");
    urlName.classList.remove("is-invalid");
    return true;
  } else {
    urlName.classList.add("is-invalid");
    urlName.classList.remove("valid");
    return false;
  }
}
