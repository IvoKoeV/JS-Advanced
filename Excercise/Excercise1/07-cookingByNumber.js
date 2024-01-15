function cookingByNumber(num,...operations){
    for(let op of operations){
        if(op == 'chop'){
            num = Math.floor(num / 2);
            console.log(num);
        }else if(op == 'dice'){
            num = Math.sqrt(num);
            console.log(num);
        }else if(op == 'spice'){
            num += 1;
            console.log(num);
        }else if(op == 'bake'){
            num *= 3;
            console.log(num);
        }else if(op == 'fillet'){
            num = num * 0.80;
            console.log(num.toFixed(1));
        }
    }
}
// cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');