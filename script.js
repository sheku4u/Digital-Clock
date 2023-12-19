const time = document.querySelector(".watch")

setInterval(function() {
    let data = new Date()
    
    time.innerHTML = data.toLocaleTimeString()
}, 1000);

