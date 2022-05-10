let n = 10;
let v = [2, 3, 4];

results = [];
// realiza o teste
addAndVerify([], v); 

function sum(nums) {
  return nums.reduce((prev, curr) => prev + curr, 0);
}

function addAndVerify(arr, nums) {
  for (var i = 0; i < nums.length; i++) {
    // for() faz cada opção ser possível
    const newArr = arr.map((r) => r);
    newArr.push(nums[i]);
    if (sum(newArr) === n) {
      // verificação
      results.push(newArr);
    }
    if (sum(newArr) > n) {
      break;
    } else {
      // ele se chama novamente até testar todas as possibilidades
      addAndVerify(newArr, v); 
    }
  }
}
results = results.map((res) => String(res.sort()));
results = results.filter((prev, curr) => {
  return results.indexOf(prev) === curr;
});

results = results.sort();

console.log(n);
console.log(results[results.length - 1]);
console.log(results[results.length - 2]);
