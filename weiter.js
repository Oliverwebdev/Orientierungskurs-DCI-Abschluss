// eine Funktion die antworten prüfen soll
function checkAnswers() {
    // 
    var answer1 = document.getElementById("answer1").value.toLowerCase();
    var answer2 = document.getElementById("answer2").value.toLowerCase();
    var answer3 = document.getElementById("answer3").value.toLowerCase();
  
    // Antworten vergleichen
  
    // frage eins = 5
    var correctAnswers = 0;
    if (answer1 == "5") 
    {
      correctAnswers++;
    }
    // frage 2= 7410
    if (answer2 == "7410") {
      correctAnswers++;
    }
    // frage 3= 7
    if (answer3 == "7") {
      correctAnswers++;
    }
  
    // Ergebnis zeigen und vergleeichen

    var result = document.getElementById("result");
    result.innerHTML = "Du hast " + correctAnswers + " von 3 Fragen richtig beantwortet.";
    //wenn

    if (correctAnswers == 3) {
      result.innerHTML += " Sehr gut du warst sehr aufmerksam :)";
    }
  }

  function toggleDiv() {
    var ratespiel = document.getElementById("ratespiel"); 
        if (ratespiel.style.display === "none") {
        ratespiel.style.display = "block";
        } else {
        ratespiel.style.display = "none";
        }
  }