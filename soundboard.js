function playsuccess() {
    document.getElementById("success").play();
  }

  function playhmm() {
    document.getElementById("hmm").play();
  }

  function playelectronic() {
    document.getElementById("electronic").play();
  }
let successButton = document.getElementById("success");
let hmmButton = document.getElementById("hmm");
let electronicButton = document.getElementById("electronic");



successButton.onclick = function () {
  playsuccess();
}



hmmButton.onclick = function () {
  playhmm();
}


electronicButton.onclick = function () {
  playelectronic();
}