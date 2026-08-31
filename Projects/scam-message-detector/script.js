document.getElementById("checkButton").addEventListener("click", function() {
let scamMessage = document.getElementById("messageInput").value;
console.log(scamMessage);

let redFlags = [];
if (scamMessage.toLowerCase().includes("pin")) {
    redFlags.push("message asked for PIN");
}

if (scamMessage.toLowerCase().includes("otp")) {
    redFlags.push("message asked for OTP");
}

if (scamMessage.toLowerCase().includes("code")) {
    redFlags.push("message asked for code");
}

if (scamMessage.toLowerCase().includes("urgent")) {
    redFlags.push("message contains urgent");
}
if (scamMessage.toLowerCase().includes("immediately")) {
    redFlags.push("message contains immediately");
}
if (scamMessage.toLowerCase().includes("act now")) {
    redFlags.push("message contains act now");
}

if (scamMessage.toLowerCase().includes("send money")) {
    redFlags.push("message requests money transfer");
}
if (scamMessage.toLowerCase().includes("refund")) {
    redFlags.push("message requests money transfer");
}
if (scamMessage.toLowerCase().includes("wrong account")) {
    redFlags.push("message requests money transfer");
}
if (scamMessage.toLowerCase().includes("transfer")) {
    redFlags.push("message requests money transfer");
}

if (scamMessage.toLowerCase().includes("dial") && scamMessage.toLowerCase().includes("*")) {
    redFlags.push("message contains dial and *");
}

if (scamMessage.toLowerCase().includes("congratulations")) {
    redFlags.push("message contains congratulations");
}
if (scamMessage.toLowerCase().includes("you have won")) {
    redFlags.push("message contains you have won");
}
if (scamMessage.toLowerCase().includes("selected")) {
    redFlags.push("message contains selected");
}

if (scamMessage.toLowerCase().includes("bit.ly")) {
    redFlags.push("message contains bit.ly");
}
if (scamMessage.toLowerCase().includes("click here")) {
    redFlags.push("message contains click here");
}
if (scamMessage.toLowerCase().includes("http")) {
    redFlags.push("message contains http");
}
if (scamMessage.toLowerCase().includes("whatsapp.me")) {
    redFlags.push("message contains whatsapp.me");
}

let numberOfFlags = redFlags.length;

let riskLevel = "";

document.getElementById("resultOutput").classList.remove("safe", "low-risk", "high-risk");

if (numberOfFlags === 0) {
    riskLevel = "SAFE";
    document.getElementById("resultOutput").classList.add("safe");
} else if (numberOfFlags <= 2) {
    riskLevel = "LOW RISK";
    document.getElementById("resultOutput").classList.add("low-risk");
} else {
    riskLevel = "HIGH RISK";
    document.getElementById("resultOutput").classList.add("high-risk");
}

let finalMessage = riskLevel + " - Flags: " + redFlags.join(", ");

document.getElementById("resultOutput").innerText = finalMessage;

});

