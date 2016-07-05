numberFailedAttempt = 0;

function transitionPhase1(){
  document.getElementById('phase1').style.display = "block";
  document.getElementById("intro").play();
  window.setTimeout(function(){
    document.getElementById('phase1').style.display = "none";
    transitionPhase2();
  },60000);
}


function transitionPhase2(){
  document.getElementById('phase2').style.display = "block";
  document.getElementById("PWD").innerHTML = generatePWD();
  window.setTimeout(function(){
    document.getElementById('phase2').style.display = "none";
    transitionPhase3();
  },15000);

}

function transitionPhase3(){
  document.getElementById('phase3').style.display = "block";
  document.getElementById('userPWDInput').focus();
  document.getElementById('userPWDInput').value = '';
}

function transitionPhase4(){
  document.getElementById('phase4').style.display = "block";
  document.getElementById('GPS').focus();
  document.getElementById('GPS').value = '';
}



function validatePWD(event){
  var key=event.keyCode || event.which;
  if(key == 13){
    if(document.getElementById('phase3').style.display == "block"){
      if(document.getElementById("PWD").innerHTML == document.getElementById('userPWDInput').value){
        document.getElementById('phase3').style.display = "none";
        transitionPhase4();
      }else{
        if(numberFailedAttempt < 2){
          document.getElementById('phase3').style.display = "none";
          numberFailedAttempt++;
          transitionPhase2();
        }else{
          document.getElementById('phase3').style.display = "none";
          numberFailedAttempt = 0;
          transitionPhase1();
        }
      }
    }else if (document.getElementById('phase4').style.display == "block"){
      if(document.getElementById("GPS").value == "44.06322 7.13090"){
        document.getElementById('phase4').style.display = "none";
        transitionPhase5();
      }else{
        document.getElementById('GPS').value == "";
      }
    }
  }else if (key == 32) {
    if (document.getElementById('phase6').style.display == "block") {
      document.getElementById("finish").pause();
      document.getElementById('phase5').style.display = "none";
      document.getElementById('phase6').style.display = "none";
      window.setTimeout(function(){transitionPhase1();},750);
    }
  }
}


function transitionPhase5(){
  document.getElementById('phase5').style.display = "block";
  document.getElementById("finish").load();
  document.getElementById("finish").play();
  document.getElementById("phase6").style.display= "block";
  document.getElementById("phase6").focus();
  window.setTimeout(function(){
    document.getElementById("phase6").style.display = "none";
  },71500);
  window.setTimeout(function(){
    document.getElementById("finish").pause();
  },80000);
}



function generatePWD(){
  pwd = "";
  for (var i = 0; i < 9; i++) {
    pwd += Math.floor(Math.random()*10);
  }
  return pwd;
}
