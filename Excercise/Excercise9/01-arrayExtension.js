(function(){
    Array.prototype.last = function(){
        return this[this.length-1];
    };
    Array.prototype.skip = function(n){
        return this.slice(n);
       
    };
    Array.prototype.take = function(n) {
        let newNArr = this.slice(0,n);
        return newNArr;
    };
    Array.prototype.sum = function(){
        let sum = 0;
        for(let i = 0; i < this.length;i++){
            sum += this[i];
        }
        return sum;
    }
    Array.prototype.average = function(){
       return this.sum() / this.length;
    }
})()
let myArr = [1,2,3,4,5,6,7,8,9];
console.log(myArr.skip(4))
console.log(myArr.last())
console.log(myArr.sum())
console.log(myArr.average())
console.log(myArr.take(4))