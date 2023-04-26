//your code here
function calculateMinCost() {
  //your code here
  // read data from input element;
  const inputData = document.getElementById("rope-lengths").value;
  const inputArr = inputData.split(",").map(Number);
  const n=inputArr.length;

  let pq=[];
  for (let i = 0; i < n; i++) {
    pq.push(inputArr[i]);
  }
  pq.sort((a,b)=>{return a-b;});
  
  var cost = 0;
  while (pq.length > 1) {
	let first=pq.shift();
	let second=pq.shift();
    cost += first + second;
	pq.push(first+second)
	pq.sort((a,b)=>{return a-b;});
  }
document.getElementById("result").textContent = cost;
}