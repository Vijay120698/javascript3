// Example function that returns a promise (simulating asynchronous operation)
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => { resolve('Data fetched successfully!');}, 2000); // Simulate a delay of 2 seconds
    });
}

// Async function using async/await
async function getData() {
    try {
        console.log('Fetching data...');
        const result = await fetchData(); // Wait until fetchData promise resolves
        console.log(result); // Output: Data fetched successfully!
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Calling async function to start the process
getData();
