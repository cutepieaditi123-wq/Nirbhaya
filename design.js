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