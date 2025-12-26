decodeMorse = function(morseCode){
  var result = ""
  var wordsMorse = morseCode.trim().split("   ")
  for (const wordMorse of wordsMorse){
    let wordAscii = decodeMorseWord(wordMorse)
    result+=wordAscii+" "
  }
  return result.trim()
}

function decodeMorseWord(wordMorse){
  var asciiWord = ""
  var morseChars = wordMorse.split(" ")
  for (const morseChar of morseChars){
    let asciiChar = MORSE_CODE[morseChar]
    asciiWord+=asciiChar
  }
  return asciiWord    
}
