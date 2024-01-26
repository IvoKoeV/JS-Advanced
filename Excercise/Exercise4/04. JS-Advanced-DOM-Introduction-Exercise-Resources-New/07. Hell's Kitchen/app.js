function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textAreaRef = document.querySelector('textarea');
   const bestRestaurantInfo = document.querySelector('#bestRestaurant p');
   const bestRestaurantWorkers = document.querySelector('#workers p');
   function onClick () {
      let data = JSON.parse(textAreaRef.value);
      let result = {};

      for(let line of data){
         let [name,workers] = line.split(' - ');
         
         if(!result.hasOwnProperty(name)){
            result[name] = {
               avrSalary: 0,
               bestSalary: 0,
               workers: []
            }
         }
         
         let currentWorkers = getArrayOfWorkers(workers, result[name].workers );
         result[name].workers = sortWorkers(currentWorkers);
         updateSalary(result[name]);
      }
      let bestRestaurant = findBestRestaurant(result);
      appendBestRestaurantInfo(bestRestaurant);
      appendBestRestaurantWorkersInfo(bestRestaurant[1].workers);
   }
   function getArrayOfWorkers(workersData, existWorkers){
      let result = [];
      let arrOfWorkers = workersData.split(', ');

      for(let tokens of arrOfWorkers){
         let [name,salary] = tokens.split(' ');
         salary = Number(salary);
         result.push({
            name,
            salary
         })
      }

      return existWorkers;
   }
   function updateSalary(restaurant) {
      let sumOfSalary = 0;
      let bestSalary = 0;

      restaurant.workers.forEach(worker => {
         sumOfSalary += worker.salary;
         if(bestSalary < worker.salary){
            bestSalary = worker.salary;
         }
      })
      restaurant.bestSalary = bestSalary;
      restaurant.avrSalary = sumOfSalary / restaurant.workers.length;
   }
   function sortWorkers(works){
      return works.sort((workerA, workerB) => workerB.salary - workerA.salary);
   }
   function findBestRestaurant(restaurants){
      return Object.entries(restaurants).sort((a,b) => {
         return b[1].avrSalary - a[1].avrSalary
      })[0];
   }
   function appendBestRestaurantInfo(data){
      bestRestaurantInfo.textContent = `Name: ${data[0]} Average Salary: ${data[1].avrSalary.toFixed(2)} Best Salary: ${data[1].bestSalary.toFixed(2)}`;
   }
   function appendBestRestaurantWorkersInfo(workers){
      let buff = '';
      workers.forEach(worker => buff += `Name: ${worker.name} With Salary: ${worker.salary} `);
      bestRestaurantWorkers.textContent = buff;
   }

}