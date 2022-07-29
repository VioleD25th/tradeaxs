function ReadData() {
  let ws = new WebSocketAsPromised("wss://ws.coincap.io/prices?assets=bitcoin");
  let stockPriceElement = document.getElementById("bitcoin-price");
  let lastPrice = null;

  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.bitcoin).toFixed(2);
    stockPriceElement.innerText = price;
    stockPriceElement.style.color =
      !lastPrice || lastPrice === price
        ? "black"
        : price > lastPrice
        ? "green"
        : "red";
    //console.log(stockObject);

    lastPrice = price;
  };
}

export default ReadData();
