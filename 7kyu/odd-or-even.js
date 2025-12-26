function oddOrEven(array) {
  return array.length==0?"even":Math.abs(array.reduce((acc,cur)=>acc+cur))%2>0?"odd":"even";
}
