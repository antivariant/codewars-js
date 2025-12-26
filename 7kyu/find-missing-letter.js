function findMissingLetter(array)
{
  return String.fromCharCode(
    array.map((l) => l.charCodeAt(0))
    .filter((val, ind, arr) => ind>0?(val - arr[ind - 1]) > 1:false)[0]-1);
}
