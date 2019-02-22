function sockMerchant(n, ar) {
    let colors = new Set();
    let pairs = 0;

    for (let i = 0; i < n; i++) {
        if(!colors.has(ar[i])) {
            colors.add(ar[i]);
        } else {
            colors.delete(ar[i]);
            pairs++;
        }
    }

    return pairs;

}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));