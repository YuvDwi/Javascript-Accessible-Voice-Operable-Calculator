 var equa= " ";


function oneclick(){
  equa=equa+"1";
  document.getElementById('ansbar').innerHTML = equa;
}

function twoclick(){
  equa=equa+"2";
  document.getElementById('ansbar').innerHTML = equa;
}

function threeclick(){
  equa=equa+"3";
  document.getElementById('ansbar').innerHTML = equa;
}

function fourclick(){
  equa=equa+"4";
  document.getElementById('ansbar').innerHTML = equa;
}

function fiveclick(){
  equa=equa+"5";
  document.getElementById('ansbar').innerHTML = equa;
}

function sixclick(){
  equa=equa+"6";
  document.getElementById('ansbar').innerHTML = equa;
}

function sevenclick(){
  equa=equa+"7";
  document.getElementById('ansbar').innerHTML = equa;
}

function eightclick(){
  equa=equa+"8";
  document.getElementById('ansbar').innerHTML = equa;
}

function nineclick(){
  equa=equa+"9";
  document.getElementById('ansbar').innerHTML = equa;
}

function plusclick(){
  equa=equa+"+";
  document.getElementById('ansbar').innerHTML = equa;
}

function multclick(){
  equa=equa+"*";
  document.getElementById('ansbar').innerHTML = equa;
}

function divclick(){
  equa=equa+"/";
  document.getElementById('ansbar').innerHTML = equa;
}

function minusclick(){
  equa=equa+"-";
  document.getElementById('ansbar').innerHTML = equa;
}

function equalclick(){
  equa = eval(equa);
    document.getElementById('ansbar').innerHTML = equa;



}


function clearclick(){
  equa=" ";
  var qua="0";
    document.getElementById('ansbar').innerHTML = qua;



}


if (annyang) {
  // Let's define a command.
  const commands = {
    'one': () => { equa=equa+"1";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'two': () => { equa=equa+"2";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'three': () => { equa=equa+"3";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'four': () => { equa=equa+"4";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'five': () => { equa=equa+"5";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}


if (annyang) {
  // Let's define a command.
  const commands = {
    'six': () => { equa=equa+"6";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'seven': () => { equa=equa+"7";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'eight': () => { equa=equa+"8";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}


if (annyang) {
  // Let's define a command.
  const commands = {
    'nine': () => { equa=equa+"9";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'zero': () => { equa=equa+"0";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'plus': () => { equa=equa+"+";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'minus': () => { equa=equa+"-";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'times': () => { equa=equa+"*";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'divided by': () => { equa=equa+"/";
      document.getElementById('ansbar').innerHTML = equa }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

if (annyang) {
  // Let's define a command.
  const commands = {
    'equals': () => { equa = eval(equa);
    document.getElementById('ansbar').innerHTML = equa;

     }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}




    if (annyang) {
  // Let's define a command.
  const commands = {
    'clear': () => { 



      equa=" ";
    var qua="0";
    document.getElementById('ansbar').innerHTML = qua;

     }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

