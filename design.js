function addContact() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || phone === "") {
        alert("Please enter name and phone number");
        return;
    }

    let contactList = document.getElementById("contactList");

    let newContact = document.createElement("div");

    newContact.className = "contact-card";

    newContact.innerHTML =
        "<h3>" + name + "</h3>" +
        "<p>" + phone + "</p>";

    contactList.appendChild(newContact);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}


function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(position) {

                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                document.getElementById("locationText").innerHTML =
                    "Latitude: " + lat +
                    "<br>Longitude: " + lon;

            },

            function() {

                document.getElementById("locationText").innerHTML =
                    "Location access denied.";

            }

        );

    } else {

        document.getElementById("locationText").innerHTML =
            "Geolocation not supported.";

    }

}
function emergencySOS() {

    alert("🚨 Emergency SOS Activated!");

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(position) {

                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                document.getElementById("locationText").innerHTML =
                "📍 Latitude: " + lat +
                "<br>📍 Longitude: " + lon;

            },

            function() {

                document.getElementById("locationText").innerHTML =
                "❌ Location access denied.";

            }

        );

    } else {

        document.getElementById("locationText").innerHTML =
        "❌ Geolocation not supported.";

    }

}

document.getElementById("getStartedBtn").addEventListener("click", function() {

    const form = document.getElementById("incidentFormContainer");

    form.style.display = "block";

    form.scrollIntoView({
        behavior: "smooth"
    });

});

window.onload = function () {

  const btn = document.getElementById("getStartedBtn");

  if(btn){
    btn.onclick = function(){
      alert("Button Working!");
    }
  }

}
function startVoiceSOS() {

    const recognition =
        new(window.SpeechRecognition ||
            window.webkitSpeechRecognition)();

    recognition.lang = "en-US";

    recognition.start();

    document.getElementById("voiceResult").innerHTML =
        "Listening...";

    recognition.onresult = function(event) {

        let speech =
            event.results[0][0].transcript.toLowerCase();

        document.getElementById("voiceResult").innerHTML =
            "You said: " + speech;

        if(
            speech.includes("help me") ||
            speech.includes("sos")
        ){

            alert("🚨 SOS ACTIVATED!");

        }
    };
}
let sosClicks =
Number(localStorage.getItem("sosClicks")) || 0;

let incidentReports =
Number(localStorage.getItem("incidentReports")) || 0;

let contactsSaved =
Number(localStorage.getItem("contactsSaved")) || 0;

updateDashboard();

function updateDashboard(){

    document.getElementById("sosCount").innerHTML =
    sosClicks;

    document.getElementById("incidentCount").innerHTML =
    incidentReports;

    document.getElementById("contactCount").innerHTML =
    contactsSaved;
}

function sendSOS(){

    sosClicks++;

    localStorage.setItem(
        "sosClicks",
        sosClicks
    );

    updateDashboard();

    alert("SOS Sent");
}

function reportIncident(){

    incidentReports++;

    localStorage.setItem(
        "incidentReports",
        incidentReports
    );

    updateDashboard();
}

function addContact(){

    contactsSaved++;

    localStorage.setItem(
        "contactsSaved",
        contactsSaved
    );

    updateDashboard();
}