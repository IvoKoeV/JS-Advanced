function tickets(arrOfTickets, sortCriteria) {
  let result = [];
  class Tickets {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  for (let el of arrOfTickets) {
    let [place, price, status] = el.split("|");
    let tickett = new Tickets(place,price,status);
    result.push(tickett)
  }
  return sortArr(result,sortCriteria);
  function sortArr(ticketArr,sortCR){
    return ticketArr.sort((a,b) =>{
        return sortCR === "price" ?
        a[sortCR]- b[sortCR]:
        a[sortCR].localeCompare(b[sortCR]);
    })
}
}
console.log(tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
));
tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
