document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const offerForm = document.getElementById('offer-form');
    const searchResults = document.getElementById('search-results');
    const confirmRideButton = document.getElementById('confirm-ride');

    let offerSelection = {};

    offerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const departure = document.getElementById('departure').value;
        const destination = document.getElementById('destination').value;
        const pickupLocation = document.getElementById('pickup-location').value;
        const departureDate = document.getElementById('departure-date').value;
        const departureTime = document.getElementById('departure-time').value;
        const carId = document.getElementById('car-id').value;
        const seats = document.getElementById('seats').value;
        const contactNumber = document.getElementById('contact-number').value;

        offerSelection = {
            departure,
            destination,
            pickupLocation,
            departureDate,
            departureTime,
            carId,
            seats,
            contactNumber
        };

        alert('Ride offer created successfully!');
    });

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const pickupLocation = document.getElementById('pickup-location').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        searchResults.innerHTML = '';

        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <h3>Ride from ${from} to ${to}</h3>
            <p>Pickup Location: ${pickupLocation}</p>
            <p>Departure Date: ${date}</p>
            <p>Departure Time: ${time}</p>
            <p>Car ID: ${offerSelection.carId}</p>
            <p>Available Seats: ${offerSelection.seats}</p>
            <p>Contact Number: ${offerSelection.contactNumber}</p>
        `;

        searchResults.appendChild(resultItem);
        confirmRideButton.style.display = 'block';
    });
});
