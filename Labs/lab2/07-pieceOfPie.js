function pieceOfPie(arrPieFlavors,startFlavor,endFlavor){
    const startIndex = arrPieFlavors.indexOf(startFlavor);
    const endIndex = arrPieFlavors.indexOf(endFlavor);
  

    if (startIndex !== -1 && endIndex !== -1) {
      const slicedArray = arrPieFlavors.slice(startIndex, endIndex + 1);
      return slicedArray;
    }
   
}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);