function solution(number){
  // convert the number to a roman numeral
  const stringForm = number.toString();
  //numbers digit order != array element order
  const arryForm = Array.from(stringForm).reverse(); //translate from low digit 1945 = [5491]

  const res = arryForm.reduce((acc, cur, ind) => {
    switch (ind) {
        case 3: //thousands [5491]
            return replaceSymbol(Number(cur), "M", "", "") + acc;
        case 2: //hundreds
                return replaceSymbol(Number(cur), "C", "D", "M") + acc;
        case 1: //tens
            return replaceSymbol(Number(cur), "X", "L", "C") + acc;
        case 0: //units
            return replaceSymbol(Number(cur), "I", "V", "X") + acc;
    }
  }, "");

  return res;
  
}

//the same algorithm for any digit ([5,4,9,1]=>replaceSymbol(num=1,sym13="I", sym5="V",sym10="X") etc)
function replaceSymbol(num, sym13, sym5, sym10) {
    if(num < 4) return sym13.repeat(num);
    if (num == 4) return sym13 + sym5;
    if (num > 4 && num < 9) return sym5 + sym13.repeat(num - 5);
    if (num == 9) return sym13 + sym10;
}
