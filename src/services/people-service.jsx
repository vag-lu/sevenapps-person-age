import { peopleRequest } from "./config"

async function getPeopleList() {
    try {
        let response = await fetch(peopleRequest);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export {
    getPeopleList
}