class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        this.singleRooms = Math.floor(capacity * 0.5);
        this.doubleRooms = Math.floor(capacity * 0.3);
        this.maisonettes = Math.floor(capacity * 0.2);
    }

    roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        }
    }

    rentARoom(clientName, roomType, nights) {
        let message;
        if (roomType === 'single') {
            if (this.singleRooms > 0) {
                let client = {
                    clientName: clientName,
                    roomType: roomType,
                    nights: nights,
                    roomNumber: this.currentBookingNumber
                };
                this.bookings.push(client);
                message = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;
                this.currentBookingNumber++;
                this.singleRooms--;
            } else {
                message = `No single rooms available! Available double rooms: ${this.doubleRooms}. Available maisonette rooms: ${this.maisonettes}`;
            }
        }
        if (roomType === 'double') {
            if (this.doubleRooms > 0) {
                let client = {
                    clientName: clientName,
                    roomType: roomType,
                    nights: nights,
                    roomNumber: this.currentBookingNumber
                };
                this.bookings.push(client);
                message = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;
                this.currentBookingNumber++;
                this.doubleRooms--;
            } else {
                message = `No ${roomType} rooms available! Available single rooms: ${this.singleRooms}. Available maisonette rooms: ${this.maisonettes}`;
            }
        }
        if (roomType === 'maisonette') {
            if (this.maisonettes > 0) {
                let client = {
                    clientName: clientName,
                    roomType: roomType,
                    nights: nights,
                    roomNumber: this.currentBookingNumber
                };
                this.bookings.push(client);
                message = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;
                this.currentBookingNumber++;
                this.maisonettes--;
            } else {
                message = `No ${roomType} rooms available! Available single rooms: ${this.singleRooms}. Available double rooms: ${this.doubleRooms}`;
            }
        }

        return message;
    }

    roomService(bookingNumber, serviceType) {
        let client = this.bookings.filter(x => x.roomNumber === bookingNumber);
        let services = ['food', 'drink', 'housekeeping'];
        let message;
        if (services.indexOf(serviceType) === -1) {
            return `We do not offer ${serviceType} service.`;
        }
        if (client.length === 0) {
            return `The booking ${bookingNumber} is invalid.`;
        } else {
            if (!client[0].hasOwnProperty('services')) {
                client[0].services = [];
            }
            client[0].services.push(serviceType);
            message = `Mr./Mrs. ${client[0].clientName}, Your order for ${serviceType} service has been successful.`;
        }
        return message;
    }

    checkOut(bookingNumber) {
        let client = this.bookings.filter(x => x.roomNumber === bookingNumber);
        let totalMoney = 0;
        let totalServiceMoney = 0;
        let room;
        let message = '';

        if (client[0].roomType == 'single') {
            room = 'singleRooms';
        } else if (client[0].roomType == 'double') {
            room = 'doubleRoom';
        } else if (client[0].roomType == 'maisonette') {
            room = 'maisonettes';
        }
        totalMoney += client[0].nights * this.roomsPricing()[client[0].roomType];
        if (client[0].hasOwnProperty('services')) {
            client[0].services.forEach(service => {
                totalServiceMoney += this.servicesPricing()[service];
            });
        }
        if (client[0].hasOwnProperty('services')) {
            message = `We hope you enjoyed your time here, Mr./Mrs. ${client[0].clientName}. The total amount of money you have to pay is 
${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN."`
        } else {
            message = `We hope you enjoyed your time here, Mr./Mrs. ${client[0].clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
        }
        this[room]++;
        return message;
    }

    report() {
        let message = '';
        message = this.name.toUpperCase() + ' DATABASE:\n';
        message += '--------------------\n';
        if (this.bookings.length === 0) {
            message += 'There are currently no bookings.';
        }
        this.bookings.forEach(booking => {
            message += `bookingNumber - ${booking.roomNumber}\n`;
            message += `clientName - ${booking.clientName}\n`;
            message += `roomType - ${booking.roomType}\n`;
            message += `nights - ${booking.nights}\n`;
            if (booking.hasOwnProperty('services')) {
                message += `services: ${booking.services.join(', ')}`;
                if (booking.roomNumber !== this.bookings.length) {
                    message += '\n';
                }
            }
            if (booking.roomNumber !== this.bookings.length) {
                message += '----------\n';
            }
        });

        return message;
    }
}

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');
hotel.roomService(2, 'drink');

console.log(hotel.report());


