// Select the form element with the ID 'searchForm'
const form = document.querySelector('#searchForm');

// Add an event listener to the form to handle the 'submit' event
form.addEventListener('submit', async function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the search term entered in the form's input field named 'query'
    const searchTerm = form.elements.query.value;

    // Create a configuration object for the Axios request, including the search term as a query parameter
    const config = { params: { q: searchTerm } };

    try {
        // Make an asynchronous GET request to the TVMaze API using Axios, passing the configuration object
        const res = await axios.get('https://api.tvmaze.com/search/shows', config);

        // Call the makeImages function, passing the data received from the API response
        makeImages(res.data);
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data from TVMaze API:', error);
    }

    // Clear the input field after the search is submitted
    form.elements.query.value = '';
});

// Define the makeImages function to create and append images to the document
const makeImages = (shows) => {
    // Clear any existing images before adding new ones
    const existingImages = document.querySelectorAll('.result-image');
    existingImages.forEach(img => img.remove());

    // Iterate through the array of show results
    for (let result of shows) {
        // Check if the show result has an image
        if (result.show.image) {
            // Create a new IMG element
            const img = document.createElement('IMG');

            // Set the src attribute of the IMG element to the medium-sized show image
            img.src = result.show.image.medium;

            // Add a class for styling or identification purposes
            img.classList.add('result-image');

            // Append the IMG element to the body of the document
            document.body.append(img);
        }
    }
};
