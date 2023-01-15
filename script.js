document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("encrypt-btn").addEventListener("click", encriptar);
    document.getElementById("decrypt-btn").addEventListener("click", desencriptar);
    document.getElementById("copy-btn").addEventListener("click", copyText);
    
    function encriptar() {
      var text = document.getElementById("text-area").value;
      if(!text){
        showDefaultText();
        return;
      }
      text = text.replace(/e/g, "enter");
      text = text.replace(/i/g, "imes");
      text = text.replace(/a/g, "ai");
      text = text.replace(/o/g, "ober");
      text = text.replace(/u/g, "ufat");
      document.getElementById("result").innerHTML = text;
      document.getElementById("copy-btn").style.display = "block";
      hideDefaultText();
    }
  
    function desencriptar() {
      var text = document.getElementById("text-area").value;
      if(!text){
        showDefaultText();
        return;
      }
      text = text.replace(/enter/g, "e");
      text = text.replace(/imes/g, "i");
      text = text.replace(/ai/g, "a");
      text = text.replace(/ober/g, "o");
      text = text.replace(/ufat/g, "u");
      document.getElementById("result").innerHTML = text;
      document.getElementById("copy-btn").style.display = "block";
      hideDefaultText();
    }
  
    function copyText() {
        var result = document.getElementById("result");
        var textToCopy = result.textContent;
        var textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    }
    
  
    function showDefaultText(){
      document.getElementById("default-text").style.display = "block";
      document.getElementById("prompt-text").style.display = "block";
    }
  
    function hideDefaultText(){
      document.getElementById("default-text").style.display = "none";
      document.getElementById("prompt-text").style.display = "none";
    }
  });
  