

function overlayText() {
  counter++;

  if(counter % threshold == 0) {
    
    //word = random(words); // select random word
    words = ['pigeons in splendid unity are going round the square and return to settle on the gutter of district council building', 'It always amazes me how they do so well in concrete jungles', 'Arguing with idiots is like playing chess with pigeons no matter how good you are the bird is going to shit on the board & strut around like they won']
    antecedent = random(words);
    wordzz = antecedent.split(" ");
  }

  textSize(12)
  fill(0,500,0);
  noStroke();
  textFont('Courier New')

  translate(width/2, height/2)

  text(wordzz[index],0,0);

  	 loop_count = loop_count + 1;

  if(loop_count == speed) {

      index = index + 1

  if (index>= wordzz.length) {

  		index = 0; }


    loop_count=0; }

}



