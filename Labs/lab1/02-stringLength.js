function strLength(str1,str2,str3){
    let prLength = str1.length + str2.length + str3.length;
    let avrLength = Math.floor(prLength/3);
    console.log(prLength);
    console.log(avrLength);
}
strLength('chocolate', 'ice cream', 'cake')