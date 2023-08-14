var series = [["even:",0,2,4,6,8,10,12,14,16,18,20],["odd:",1,3,5,7,9,11,13,15,17,19],["prime:",1,3,5,7,11,13,17,19]];

for (var i = 0; i < series.length; i++) {
  series[i].pop();
}

document.write(series[0]+"<br>");
document.write(series[1]+"<br>");
document.write(series[2]+"<br>");