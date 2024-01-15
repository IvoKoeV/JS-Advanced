function lastKNumbersSequence(n,k){
    let sequence = [1];
    let i = 1;

    while (i < n) {
        let sum = 0;
        for (let j = Math.max(0, i - k); j < i; j++) {
            sum += sequence[j];
        }
        sequence.push(sum);
        i++;
    }

    return sequence;
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);