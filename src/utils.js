export const fetchFromUrl = async (url, callback) => {
    const response = await fetch(`http://localhost:8080/${url}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const json = await response.json();
    callback(json);
};