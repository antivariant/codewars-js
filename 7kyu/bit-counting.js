var countBits = function(n) {
    const digits = Math.floor(Math.log2(n)) + 1; //log2(5)=2.3=2*2... 2 full times + 0^2 = 3 (4 2 1)
    var div = 2**(digits-1); //max position divider (... 4 2 1) = 4 (positions starts from 0)
    var res = Math.ceil(n % 2); //odd is 2^0 (xxxx1) (0 position will be out of cycle)
    
    for (i = digits; i > 1; i--){ // bin digit 3 2 1
        if (n / div == 1) return res + 1; //no rest, no more cycles
        if (n / div > 1) { //max divider
            res++;
            n = n - div;
        }
        div = div / 2; //previous position divider 4 2 1 (2 is the last value)
    }
    return res;

};
