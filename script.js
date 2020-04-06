// create the object constructor
let Obj = function(principal, time) {
    this.principal = principal;
    this.time = time;
  };
  
  //define the data Array
  let data = [];
  
  // create the individual object
  let obj1 = new Obj(2500, 1.8);
  let obj2 = new Obj(2500, 5);
  let obj3 = new Obj(2500, 1);
  let obj4 = new Obj(2500, 3);
  
  // push the individual objs into the data array
  data = [obj1, obj2, obj3, obj4];
  
  // calculate the rate
  let interestCalculator = obj => {
    let rate;
    if (obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
      obj.rate = 3;
  
      //calculate the interest
      calcInterest(obj);
    } else if (obj.principal >= 2500 && obj.time >= 3) {
      obj.rate = 4;
  
      //calculate the interest
      calcInterest(obj);
    } else if (obj.principal >= 2500 && obj.time <= 1) {
      obj.rate = 2;
  
      //calculate the interest
      calcInterest(obj);
    } else {
      obj.rate = 1;
  
      //calculate the interest
      calcInterest(obj);
    }
  };
  
  // calculate the interest
  let calcInterest = obj => {
    let interestData = [],
      interest;
    //caclculate the interest
    obj.interest = (obj.principal * obj.rate * obj.time) / 100;
    // add the obj into the interest array
    interestData.push(obj);
    // return the interestData
    return interestData;
  };
  
  // call the interestCalculator function
  data.forEach(obj => {
    interestCalculator(obj);
  });
  
  console.log(data);
  