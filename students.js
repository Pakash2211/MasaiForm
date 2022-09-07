// All the Code for All Students Page Goes Here
var data = JSON.parse(localStorage.getItem("admission")) || [];

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

        var td6 = document.createElement("td");
        td6.innerText = "Accept";
        td6.style.cursor = "pointer";
        td6.style.backgroundColor = "green";
        td6.addEventListener("click", function() {
            addData(ele);
        })

        var td7 = document.createElement("td");
        td7.innerText = "Reject";
        td7.style.cursor = "pointer";
        td7.style.backgroundColor = "red";
        td7.addEventListener("click", function() {
            rejeData(ele);
        })


        tr.append(td1, td2, td3, td4, td5, td6, td7);

        document.querySelector("tbody").append(tr);

    })
}

var acceptdata = JSON.parse(localStorage.getItem("admission-accepted")) || [];

function addData(data) {
    acceptdata.push(data);
    localStorage.setItem("admission-accepted", JSON.stringify(acceptdata));
}

var rejectdata = JSON.parse(localStorage.getItem("admission-rejected")) || [];

function rejeData(data) {
    rejectdata.push(data);
    localStorage.setItem("admission-rejected", JSON.stringify(rejectdata));
}

function filter() {
    var sel = document.querySelector("#filter").value;
    var fel = data.filter(function(ele) {
        if (sel == "" || sel == "all") {
            return 1;
        } else {
            return sel == ele.course;
        }
    })
    displayData(fel);
}