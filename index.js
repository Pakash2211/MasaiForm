// All the JS Code for the Add Students Page Goes Here
var data = JSON.parse(localStorage.getItem("admission")) || [];

document.querySelector("form").addEventListener("submit", dataStore);


function dataStore() {
    event.preventDefault();
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    var phone = document.querySelector("#phone");
    var gender = document.querySelector("#gender");
    var course = document.querySelector("#course");

    var obj = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        gender: gender.value,
        course: course.value,

    }
    data.push(obj);
    localStorage.setItem("admission", JSON.stringify(data));

    name.value = ""
    email.value = ""
    phone.value = ""
    gender.value = ""
    course.value = ""

}