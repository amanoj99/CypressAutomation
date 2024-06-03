let expenses = new Array(100, 200, 250, 350, 500)

let sum =0
let n=4
let i=0

for(i=0;i<=n;i++)
{
    sum=sum+expenses[i]
}
console.log(sum)

let minVal=Math.min(...expenses)
let maxVal=Math.max(...expenses)

console.log("Minimun element is:"+ minVal)
console.log("Maximum element is:"+ maxVal)



