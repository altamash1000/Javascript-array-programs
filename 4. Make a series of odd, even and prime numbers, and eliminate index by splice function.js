var series = [["even:",0,2,4,6,8,10,12,14,16,18,20],["odd:",1,3,5,7,9,11,13,15,17,19],["prime:",1,3,5,7,11,13,17,19]];

// Remove subindex 2 from index 0
series[0].splice(2, 1);

// Remove subindex 4 from index 1
series[1].splice(4, 1);

// Remove subindex 3 from index 2
series[2].splice(3, 1);

document.write(series[0]+"<br>");
document.write(series[1]+"<br>");
document.write(series[2]+"<br>");

