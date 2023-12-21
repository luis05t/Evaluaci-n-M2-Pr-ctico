'use strict'
let ages = [15, 50, 45,18];
ages.splice (1,0,18)
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 25) { 
        alert(ages[i])
    }else{
        
    }
}
