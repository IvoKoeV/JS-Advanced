function smallestTwoNumbers(arr){
    if (arr.length < 2) {
        return null;
    }

    let smallest1 = arr[0];
    let smallest2 = arr[1];

    if (smallest2 < smallest1) {
        
        [smallest1, smallest2] = [smallest2, smallest1];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < smallest1) {
            smallest2 = smallest1;
            smallest1 = arr[i];
        } else if (arr[i] < smallest2) {
            smallest2 = arr[i];
        }
    }
    console.log(smallest1,smallest2);
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);