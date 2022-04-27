const peopleUrl = "https://random-persons.herokuapp.com/users";

const peopleRequest = new Request(peopleUrl, {
  method: 'GET',
  headers: new Headers()
})

export {
    peopleRequest
}