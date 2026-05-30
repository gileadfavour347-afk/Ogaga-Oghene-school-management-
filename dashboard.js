function grade(total){

if(total >= 75) return "A1";
if(total >= 70) return "B2";
if(total >= 65) return "B3";
if(total >= 60) return "C4";
if(total >= 55) return "C5";
if(total >= 50) return "C6";
if(total >= 45) return "D7";
if(total >= 40) return "E8";

return "F9";

}

function save(){

let n = document.getElementById("name").value;

let subject =
document.getElementById("subject").value;

let ca1 =
Number(document.getElementById("ca1").value);

let ca2 =
Number(document.getElementById("ca2").value);

let exam =
Number(document.getElementById("exam").value);

let total = ca1 + ca2 + exam;

let g = grade(total);

let results =
JSON.parse(localStorage.getItem("results")) || [];

results.push({
name:n,
subject,
ca1,
ca2,
exam,
total,
grade:g
});

localStorage.setItem(
"results",
JSON.stringify(results)
);

show();

}

function show(){

let results =
JSON.parse(localStorage.getItem("results")) || [];

let out =
document.getElementById("out");

out.innerHTML = "";

results.forEach((r,index)=>{

out.innerHTML += `

<div>

${r.name}
-
${r.subject}
-
${r.total}
(${r.grade})

<button onclick="deleteResult(${index})">
Delete
</button>

</div>

`;

});

}

function deleteResult(index){

let results =
JSON.parse(localStorage.getItem("results")) || [];

results.splice(index,1);

localStorage.setItem(
"results",
JSON.stringify(results)
);

show();

}

function deleteAllResults(){

let ask =
confirm("Delete all results?");

if(!ask) return;

localStorage.removeItem("results");

show();

}

function addTeacher(){

let teacherName =
document.getElementById("teacherName").value;

let teacherSubject =
document.getElementById("teacherSubject").value;

let teacherClass =
document.getElementById("teacherClass").value;

let teachers =
JSON.parse(localStorage.getItem("teachers")) || [];

teachers.push({
name:teacherName,
subject:teacherSubject,
class:teacherClass
});

localStorage.setItem(
"teachers",
JSON.stringify(teachers)
);

showTeachers();

}

function showTeachers(){

let teachers =
JSON.parse(localStorage.getItem("teachers")) || [];

let box =
document.getElementById("teacherBox");

box.innerHTML = "";

teachers.forEach((t,index)=>{

box.innerHTML += `

<div>

${t.name}
-
${t.subject}
-
${t.class}

<button onclick="deleteTeacher(${index})">
Delete
</button>

</div>

`;

});

}

function deleteTeacher(index){

let teachers =
JSON.parse(localStorage.getItem("teachers")) || [];

teachers.splice(index,1);

localStorage.setItem(
"teachers",
JSON.stringify(teachers)
);

showTeachers();

}

function addFeeRecord(){

let name =
document.getElementById("name").value;

let studentClass =
document.getElementById("class").value;

let paid =
Number(document.getElementById("feePaid").value);

let totalFee =
Number(document.getElementById("totalFee").value);

let balance = totalFee - paid;

let fees =
JSON.parse(localStorage.getItem("fees")) || [];

let receipt = {

name,
class:studentClass,
paid,
balance,
date:new Date().toLocaleDateString()

};

fees.push(receipt);

localStorage.setItem(
"fees",
JSON.stringify(fees)
);

localStorage.setItem(
"currentReceipt",
JSON.stringify(receipt)
);

showFees();

window.open("receipt.html");

}

function showFees(){

let fees =
JSON.parse(localStorage.getItem("fees")) || [];

let box =
document.getElementById("feeBox");

box.innerHTML = "";

fees.forEach(f=>{

box.innerHTML += `

<div>

${f.name}
-
${f.class}
-
Paid: ₦${f.paid}
-
Balance: ₦${f.balance}

</div>

`;

});

  }
