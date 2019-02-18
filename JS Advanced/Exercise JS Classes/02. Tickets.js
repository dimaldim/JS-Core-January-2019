function tickets(arr, sort) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let unsortedArr = [];

    for (let ticket of arr) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        unsortedArr.push(new Ticket(destination, price, status));
    }

    let sortedArr;
    switch (sort) {
        case 'destination':
            sortedArr = unsortedArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            sortedArr = unsortedArr.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            sortedArr = unsortedArr.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return sortedArr;
}