const results=[2.85,2.31,1.1,1.1,1.72,3.86,1.71,1.98,1.91,36.08,6.55,2.76,9.08,2.21,9.09,1,1.64,1.07,4.14,1.41,1.2,3.56,6.44,1.13,1.88,1.05,22.66,1.98,1.44,2.31,2.91,1.53,2.36,2.07,6.36,1.33,1.03,1.52,5.45,1.76,1.3,4.17,1.18,2.82,1.16,1.09,1.8,137.18,1.23,3.28,1.15,3.13,1.81,1.03,1.72,1.4,5.14,2.3,4.92,1.2,3.77,1.1,3.9,1.01,3.98,5.76,2.72,4.33,4.53,1.15,2.35,3.65,4.5,1.73,4.25,1.22,1.83,1,1.66,1.06,1.32,1.83,1.71,1.15,5.66,1.4,1.77,3.44,1.1,1.13,1.1,1.14,1.06,8.56,4.54,20.8,1.34,1.96,1.16,1.17,2.86,1.48,4.23,1,1.35,1.37,3.52,1.15,1.05,1.69,1.09,1.48,2.69,6.77,1.57,1.73,1.25,2.11,1.06,86.5,3.27,1.01,4.18,1,1.42,3.37,1.47,1.1,1.61,1.23,1.88,2.01,2.57,4.2,1.56,14.75,3.8,10.75,1.15,1.62,1.47,1.58,10.96,1.82,4.56,1.4,2.97];
const fmt=n=>Number(n).toLocaleString('fr-FR',{maximumFractionDigits:2});
const sorted=[...results].sort((a,b)=>a-b),mid=Math.floor(sorted.length/2),median=sorted.length%2?sorted[mid]:(sorted[mid-1]+sorted[mid])/2;
document.getElementById('count').textContent=results.length;
document.getElementById('median').textContent=fmt(median)+'x';
document.getElementById('mean').textContent=fmt(results.reduce((a,b)=>a+b,0)/results.length)+'x';
document.getElementById('max').textContent=fmt(Math.max(...results))+'x';
const bins=[['Moins de 1,50x',v=>v<1.5],['1,50x à 1,99x',v=>v>=1.5&&v<2],['2x à 2,99x',v=>v>=2&&v<3],['3x à 4,99x',v=>v>=3&&v<5],['5x à 9,99x',v=>v>=5&&v<10],['10x et plus',v=>v>=10]];
document.getElementById('distribution').innerHTML=bins.map(([label,test])=>{const n=results.filter(test).length,p=n/results.length*100;return '<div class="bar"><span>'+label+'</span><div class="track"><div class="fill" style="width:'+p+'%"></div></div><b>'+n+'/'+results.length+' · '+p.toFixed(1)+'%</b></div>'}).join('');
document.getElementById('history').innerHTML=results.map((v,i)=>'<tr><td>'+(i+1)+'</td><td>'+fmt(v)+'x</td></tr>').join('');
function download(name,body,type){const a=document.createElement('a'),u=URL.createObjectURL(new Blob([body],{type}));a.href=u;a.download=name;a.click();URL.revokeObjectURL(u)}
document.getElementById('csv').onclick=()=>download('congobet-aviator-147.csv','index,multiplicateur\n'+results.map((v,i)=>(i+1)+','+v).join('\n'),'text/csv');
document.getElementById('json').onclick=()=>download('congobet-aviator-147.json',JSON.stringify({results_newest_first:results},null,2),'application/json');