var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
   method: 'GET',
   headers: myHeaders,
   redirect: 'follow'
};
let htmlProduct = "";



fetch("https://api.myjson.online/v1/records/99b5c82e-3971-46e0-8b0d-1d427938dec9", requestOptions)   
.then((res) => res.json())
    .then((response) => {
        console.log("🤔🤔🤔 ~ response:", response.data)
        for (let i = 0; i < response.data.length; i++) {
            htmlProduct += `
            <div class="pro">
                <div class="kb">
                  <img src="${response.data[i].img}" alt="" id="img1">
                </div>
                  <h3 class="name"> POP MART</h3>
                  <h3 id="name1">${response.data[i].nameProd}</h3>
                  <h3 id="cost">${response.data[i].price}</h3>
              </div>
            `
                
            

        }

        document.getElementById("pr").innerHTML = htmlProduct;
    })