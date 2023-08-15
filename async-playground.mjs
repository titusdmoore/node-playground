import fetch from 'node-fetch';

let endpoints = [ "https://www.boredapi.com/api/activity", "https://datausa.io/api/data?drilldowns=Nation&measures=Population", "https://api.chucknorris.io/jokes/random", "https://api.ipify.org/?format=json" ];

let fetchMyLife = async (url) => {
    let res = await fetch(url);
    return await res.json();
}

endpoints.forEach(endpoint => {
    fetchMyLife(endpoint).then(res => {
        console.log(res);
    });
});

// Result: The output is in the order of which endpoints are resolved first. This means that the loop is not blocked by the async calls.
