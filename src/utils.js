export const fetchFromUrl = async (url, callback) => {
    const response = await fetch(`http://localhost:8080/${url}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const json = await response.json();
    if(callback) {
        callback(json);
    }
};

export const postFromUrl = async (url, body,  callback) => {
    const response = await fetch(`http://localhost:8080/${url}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const json = await response.json();
    if(callback) {
        callback(json);
    }
};