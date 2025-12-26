var uniqueInOrder=function(iterable){
 return Array.from(iterable).filter((val, ind, arr) => ind > 0 ? (val != arr[ind - 1] ? true : false) : true);
}
