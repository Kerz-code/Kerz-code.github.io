document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    // Replace with your Cat API key
    const apiKey = 'live_7OVubw3eMj6k3I2ku0lQ7BP5EUIid2v0I8o0mODVIRlMgNOVFCzzo8SwsEeJYNgb'; 
    const apiURL = 'https://api.thecatapi.com/v1/images/search';

    for (const image of images) {
        fetch(apiURL, {
            headers: {
                'x-api-key': apiKey // Required for authentication
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data[0] && data[0].url) {
                image.src = data[0].url; // Set the image source to the fetched cat image URL
            } else {
                console.error('No image URL found in the API response');
            }
        })
        .catch(error => {
            console.error('Error fetching the cat image:', error);
        });
    }

});