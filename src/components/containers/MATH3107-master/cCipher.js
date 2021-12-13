// You input a string and number to shift the Caesar
// Cipher and it outputs an encrypted code with
// the shift chosen
function cCipher(string, num){
    string = string.toUpperCase();
    let temp;
    let fin = "";
  
    for(let i = 0; i < string.length; i++){
      if(isLetter(string[i]) == true){
        temp = string.charCodeAt(i);
        temp += num;
        fin += String.fromCharCode(temp);
      }
      else{
        fin += string[i];
      }
    }
  
    return fin;
  }
  
  function isLetter(char) {
    return ((/[a-zA-Z]/).test(char) && char.length === 1)
  }