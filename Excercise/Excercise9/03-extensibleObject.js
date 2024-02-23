function extensibleObject(){
    let parent = {};
    let childObj = Object.create(parent);

    childObj.extend = function(obj){
        let objAsArr = Object.entries(obj);
        for (let [key,value] of objAsArr) {
            if(typeof(value)=="function"){
                parent[key] = value;
            }else{
                childObj[key] = value;
            }
        }
        return  childObj; 
    }
    return  childObj; 

}
const myObj = extensibleObject(); 
const template = { 
    extensionMethod: function () {}, 
    extensionProperty: 'someString' 
  } 
console.log(myObj.extend(template)); 
  