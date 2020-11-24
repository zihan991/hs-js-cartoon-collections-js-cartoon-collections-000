function dwarfRollCall(dwarves){ 
var array = [];
for (let i = dwarves.length/2;i < dwarves.length;i++)
  array.push(`${i+1}. ${dwarves[i]} `);
return array.join("");
}


function summonCaptainPlanet(planeteerCalls){
  var array = [];
  for(let i= 0; i < planeteerCalls.length ; i++){
    let exclamation = '!'; 
    array.push(`${planeteerCalls[i]}${exclamation}`.toUpperCase());
  }
  return array;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
      } 
      else {
        return false;
        }
  }
  }

function findTheCheese (foods) {
  
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] ===  'gouda'
    || foods[i]===  'cheddar' 
    || foods[i]==='camembert') {
    return foods[i];
      }
  } 
  return 'no cheese!';
}
  
  function startsWithB(call){
    var array = [];
    for(let i = 0; i < call.length; i++){
      if (call[i].startswith('B')){
      array.push(call[i]);
        
      }
      }
     return array;
  };
  
  
  