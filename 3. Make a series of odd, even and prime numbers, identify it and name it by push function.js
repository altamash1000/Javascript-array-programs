var series = [[0,2,4,6,8,10,12,14,16,18,20],[1,3,5,7,9,11,13,15,17,19],[1,3,5,7,11,13,17,19]];
series[0].push("even");
document.write(series[0]+"<br>");
series[1].push("odd");
document.write(series[1]+"<br>");
series[2].push("prime");
document.write(series[2]+"<br>");
// // to just call 8th index in 2 index array

document.write(series[2][8]+"<br>");