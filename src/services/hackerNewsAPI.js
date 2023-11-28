import axios from "axios";

const baseURL = "https://hn.algolia.com/api/v1";
// DELAY SIMULATION
// const FETCH_DELAY = 10_000;

export default async function getAllItems(query) {
    
    //
    // DELAY SIMULATION
    //
    // return new Promise(res => {
    // setTimeout(async () => {
    //     const url = `${baseURL}/search?query=${query}`;
    //     const resp = await axios.get(url);

    //     res(resp.data.hits);
    // }, FETCH_DELAY);
    //});

    //
    // ERROR SIMULATION
    //
    // const url = Math.random() > 0.5 ? `${baseURL}/search?query=${query}` : "wrongURL";
    // const resp = await axios.get(url);

    // return resp.data.hits;    

    //
    // DESIRED CODE
    //
    const url = `${baseURL}/search?query=${query}`;
    const resp = await axios.get(url);

    return resp.data.hits;    
}
