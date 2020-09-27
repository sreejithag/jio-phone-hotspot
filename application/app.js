if(localStorage.getItem("fisrtOpen")==null){
    alert("Not an official app !! \n use cursor or \n keypad shortcuts");
    localStorage.setItem("fisrtOpen",1);
}

function hotspotOn(){
    let lock = navigator.mozSettings.createLock();
    lock.set({'tethering.wifi.enabled': true});
    alert("Wifi hotspot turned on");
}

function hotspotOff(){
    let lock = navigator.mozSettings.createLock();
    lock.set({'tethering.wifi.enabled': false});
    alert("Wifi hotspot turned off");
}


function usbOn(){
    let lock = navigator.mozSettings.createLock();
    lock.set({'tethering.usb.enabled': true});
    alert("USB tethering enabled");
}

function usbOff(){
    let lock = navigator.mozSettings.createLock();
    lock.set({'tethering.usb.enabled': false});
    alert("USB tethering disabled");
}


function setHotspot(ssid,password){
    let lock = navigator.mozSettings.createLock();
    lock.set({'tethering.wifi.enabled': false});
    lock.set({'tethering.wifi.ip': "192.168.1.1"});
    lock.set({'tethering.wifi.prefix': "24"});
    lock.set({'tethering.wifi.dhcpserver.startip': "192.168.1.10"});
    lock.set({'tethering.wifi.dhcpserver.endip': "192.168.1.30"});
    lock.set({'tethering.wifi.ssid': ssid});
    lock.set({'tethering.wifi.security.type': "wpa-psk"});
    lock.set({'tethering.wifi.security.password': password});
    
    localStorage.setItem("wifi",0);
    wifiOffButton.setAttribute("disabled", "disabled");
    wifiOffButton.style.backgroundColor = "red"
    wifiOnButton.style.backgroundColor = ""
    wifiOnButton.disabled= false;
}



let wifiOnButton = document.getElementById("wifiOn");
wifiOnButton.addEventListener('click', function() {
    hotspotOn()
    localStorage.setItem("wifi",1);
    wifiOnButton.setAttribute("disabled", "disabled");
    wifiOnButton.style.backgroundColor = "green"
    wifiOffButton.style.backgroundColor = ""
    wifiOffButton.disabled= false;
  });



  
let wifiOffButton = document.getElementById("wifiOff");
wifiOffButton.addEventListener('click', function() {
    hotspotOff()
    localStorage.setItem("wifi",0);
    wifiOffButton.setAttribute("disabled", "disabled");
    wifiOffButton.style.backgroundColor = "red"
    wifiOnButton.style.backgroundColor = ""
    wifiOnButton.disabled= false;
});

let usbOnButton = document.getElementById("usbOn");
usbOnButton.addEventListener('click', function() {
    usbOn()
    localStorage.setItem("usb",1);
    usbOnButton.setAttribute("disabled", "disabled");
    usbOnButton.style.backgroundColor = "green"
    usbOffButton.style.backgroundColor = ""
    usbOffButton.disabled= false;
  });
  
let usbOffButton = document.getElementById("usbOff");
usbOffButton.addEventListener('click', function() {
    usbOff()
    localStorage.setItem("usb",0);
    usbOffButton.setAttribute("disabled", "disabled");
    usbOffButton.style.backgroundColor = "red"
    usbOnButton.style.backgroundColor = ""
    usbOnButton.disabled= false;
});

if(localStorage.getItem('wifi')!=null){
    if(localStorage.getItem('wifi')=='1'){
        
        wifiOnButton.setAttribute("disabled", "disabled");
        wifiOnButton.style.backgroundColor = "green"
        wifiOffButton.style.backgroundColor = ""
        wifiOffButton.disabled= false;
    }
    else{
        wifiOffButton.setAttribute("disabled", "disabled");
         wifiOffButton.style.backgroundColor = "red"
         wifiOnButton.style.backgroundColor = ""
         wifiOnButton.disabled= false;
    }
}

if(localStorage.getItem('usb')!=null){
    if(localStorage.getItem('usb')=='1'){
        
        usbOnButton.setAttribute("disabled", "disabled");
        usbOnButton.style.backgroundColor = "green"
        usbOffButton.style.backgroundColor = ""
        usbOffButton.disabled= false;
    }
    else{
        usbOffButton.setAttribute("disabled", "disabled");
         usbOffButton.style.backgroundColor = "red"
         usbOnButton.style.backgroundColor = ""
         usbOnButton.disabled= false;
    }
}

if(localStorage.getItem("ssid")!=null){
    document.getElementById("ssid").value = localStorage.getItem("ssid");
}
if(localStorage.getItem("password")!=null){
    document.getElementById("password").value = localStorage.getItem("password");
}

let save = document.getElementById("save");
save.addEventListener('click', function() {
    let password = document.getElementById("password").value;
    let ssid = document.getElementById("ssid").value;

    if((password.length >= 8) && (ssid.length >= 1) ){
        localStorage.setItem("ssid",ssid);
        localStorage.setItem("password",password);
        setHotspot(ssid,password);
        alert("Wifi settings saved ");
    }
    else{
        alert("SSID or Password length error");
    }

});


document.addEventListener("keydown", event => {
    switch (event.key) {
      case "1":
        wifiOnButton.click();
        break;

      case "3":
        wifiOffButton.click();
        break;

      case "SoftLeft":
        let ssidInput = document.getElementById("ssid");
        ssidInput.focus();
        break;

      case "SoftRight":
        let passwordInput = document.getElementById("password");
        passwordInput.focus();
        break;
      
      case "5":
        save.click();
        break;
     
     case "7":
        usbOnButton.click();
        break;
     
     case "9":
        usbOffButton.click();
        break;
    }
  });


