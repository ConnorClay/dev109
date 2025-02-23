function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10);

function updateHotelInfo(hotel, elementId) {
    var details = hotel.name + ' rooms: ';
    details += hotel.checkAvailability();
    var elHotel = document.getElementById(elementId);
    elHotel.textContent = details;
}

updateHotelInfo(quayHotel, 'hotel1');
updateHotelInfo(parkHotel, 'hotel2');
updateHotelInfo(sunsetHotel, 'hotel3'); 
