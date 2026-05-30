function loadReceipt(){

let r =
JSON.parse(localStorage.getItem("currentReceipt"));

let box =
document.getElementById("receiptBox");

box.innerHTML = `

<div class="receiptHeader">

<img src="logo.png" class="receiptLogo">

<div>

<h2>
OGAGA-OGHENE GROUP OF SCHOOLS
</h2>

<p>FEE PAYMENT RECEIPT</p>

</div>

</div>

<hr>

<p><b>Name:</b> ${r.name}</p>

<p><b>Class:</b> ${r.class}</p>

<p><b>Amount Paid:</b> ₦${r.paid}</p>

<p><b>Balance:</b> ₦${r.balance}</p>

<p><b>Date:</b> ${r.date}</p>

<br>

<p>Authorized Signature</p>

`;

}
