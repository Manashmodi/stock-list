

function getStock() {
    var url = "http://localhost:4500/stocks";
    var url2="https://priceapi.moneycontrol.com/pricefeed/bse/equitycash";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
          fetch(`${url2}/${item.name}`)
          .then((res) => res.json)
          .then((api2) =>{
            var element = `
            <div class="card" style="width:25%;height:450px;float:left;margin-left:2%;margin-top:2%">
                <img src='${api1.logo}' class="card-img-top" style="height:250px;"/>
                <div class="card-body">
                    <h5 class="card-title">${api2.data.company}</h5>
                    <h5>${api2.data.HN}-${api2.data.SC_SUBSEC}</h5>
                    <p>Price Current:${api2.data.pricecurrent}</p>
                    <p>Price Change: ${api2.data.pricechange}</p>
                    <p>Price Percent Change: ${api2.data.pricepercentchange}%</p>
                </div>
            </div>`
        $('#display').append(element);
          });
        });
    });
}


/*data.map((item) => {
    var element = document.createElement("li");
    var text = document.createTextNode(item.name);
    element.appendChild(text);
    var main = document.getElementById("slist");
    main.appendChild(element);
  });
  */