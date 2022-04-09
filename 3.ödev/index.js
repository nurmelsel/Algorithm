var arr = [1000, 2800, 500, 9300,500];
var birim=250
const  getFinalOrder=(k,amount)=>{
let newarr=amount.map(item=>item/k)

var len = newarr.length;
var indices = new Array(len);

for (var i = 0; i < len; ++i) indices[i] = i;
indices.sort(function (a, b) { return newarr[a] < newarr[b] ? -1 : newarr[a] > newarr[b] ? 1 : 0; });
return indices
}
console.log(getFinalOrder(birim,arr))