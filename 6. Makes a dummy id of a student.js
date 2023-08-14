var student = {
    Name: "Jonathan Williams",
    age: "23",
    Universityname: "Oxford",
    height: "5'11",
    Program: "masters",
    picture: "https://lindastade.com/wp-content/uploads/2019/03/shutterstock_102482084-1000x640.jpg"
}

document.write("Name: " + student.Name + "<br>");
document.write("Age: " + student.age + "<br>");
document.write("University: " + student.Universityname + "<br>");
document.write("Height: " + student.height + "<br>");
document.write("Program: " + student.Program + "<br>");
document.write("<img src='" + student.picture + "' alt='Student Picture'>");
