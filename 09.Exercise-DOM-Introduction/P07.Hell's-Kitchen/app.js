function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.getElementById("inputs").children[1].value);

      for(let data of input) {
         let [name, workerList] = data.split(" - ");
         if((!result.find(e=> e.name === name)) {
            result.push({ 
               name,
               avgSalary : 0,
               bestSalary : 0,
               sumSalary : 0,
               workerList : []
            });
            let current = result.find(e=>e.name === name);
            for(let currentWorker of workerList){
               updateRestaurant(currentRestaurant, currentWorker)
            }
         }

      }
      let dataArr = input.split(" - ")
      
   }
   function updateRestaurant(obj, worker) {
      
   }
}