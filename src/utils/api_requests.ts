
function GetAllOrders() {
    
    return new Promise(resolve => {
      setTimeout(() => {
    
        resolve([
            {
              "date": "2021-11-29",
              "time": "10:30",
              "orderId": "123",
              "customerId": "a-111"
            },
            {
              "date": "2021-11-29",
              "time": "10:30",
              "orderId": "223",
              "customerId": "a-211"
            },
            {
              "date": "2021-11-29",
              "time": "12:30",
              "orderId": "323",
              "customerId": "a-211"
            },
            {
              "date": "2021-11-29",
              "time": "18:30",
              "orderId": "423",
              "customerId": "a-411"
            }
          ]
          );
      }, 1000);
    });
  }

  export {GetAllOrders}