function solution(str){
  if(str.length==0) return []; //before calculations
  str += str.length % 2 ? "_" : ""; //if odd, add underscore
  return str.match(/(\w{2})/g); //split by two symbols globaly
}
