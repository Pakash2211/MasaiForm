// All the Code for the Rejected page goes here

var data = JSON.parse(localStorage.getItem("admission-rejected")) || [];

window.addEventListener("load", function() {
    displayData(data);
})

function displayData(data) {
    document.querySelector("tbody").innerText = "";
    data.map(function(ele) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = ele.name;

        var td2 = document.createElement("td");
        td2.innerText = ele.email;

        var td3 = document.createElement("td");
        td3.innerText = ele.course;

        var td4 = document.createElement("td");
        td4.innerText = ele.gender;

        var td5 = document.createElement("td");
        td5.innerText = ele.phone;

        tr.append(td1, td2, td3, td4, td5);

        document.querySelector("tbody").append(tr);

    })
}