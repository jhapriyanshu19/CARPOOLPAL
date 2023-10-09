// JavaScript code for handling form submissions and search results
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const offerForm = document.getElementById('offer-form');
    const searchResults = document.getElementById('search-results');

    // Store user's selection from the "Offer a Ride" form
    let offerSelection = {};

    offerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Get user input from the offer form and store it
        const departure = document.getElementById('departure').value;
        const destination = document.getElementById('destination').value;
        const departureDate = document.getElementById('departure-date').value;
        const seats = document.getElementById('seats').value;

        offerSelection = {
            departure,
            destination,
            departureDate,
            seats
        };

        // Display a success message or handle errors
        alert('Ride offer created successfully!');
    });

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Get user input from the search form and perform a search
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const date = document.getElementById('date').value;

        // Clear previous search results
        searchResults.innerHTML = '';

        // Display user's selection from the "Offer a Ride" form in search results
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <h3>Ride from ${offerSelection.departure} to ${offerSelection.destination}</h3>
            <p>Departure Date: ${offerSelection.departureDate}</p>
            <p>Available Seats: ${offerSelection.seats}</p>
        `;
        searchResults.appendChild(resultItem);
    });
});
