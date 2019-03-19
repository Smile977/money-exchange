// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!    
    var x =  currency;
    
    if (x > 10000) {
        x = {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
        return x;       
    } else {
        
        if (x <= 0) {
            x = {};
            return x;
        } else {
           
            if (x > 0 && x <= 10000) { 
                var cents = {};
                
                if (x >= 50) {                    
                    cents.H = Math.floor(x / 50);                    
                    x = x%50;
                }

                if (x >= 25) {                    
                    cents.Q = Math.floor(x / 25);
                    x = x%25;
                }
                                
                if (x >= 10) {                    
                    cents.D = Math.floor(x / 10);
                    x = x%10; 
                }

                if (x >= 5) {                    
                    cents.N = Math.floor(x / 5);
                    x = x%5;
                }

                if (x >= 1) {
                    cents.P = Math.floor(x / 1);
                }
                 
                return cents;   
            }
        }
    }
    // Return an object containing the minimum number of coins needed to make change
}