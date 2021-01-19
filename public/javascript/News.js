window.onload = populateSelect();

function setData (content) {

    for (var i = 0; i < content.length; i++) {
        node = document.getElementById(i);
        node.childNodes[1].src = 'https://shielded-bastion-36750.herokuapp.com'+content[i].picture.url;
        node.childNodes[3].childNodes[1].innerHTML = content[i].title;
        node.childNodes[3].childNodes[3].innerHTML = content[i].category;
        node.childNodes[3].childNodes[5].innerHTML = content[i].description;
        var now = new Date()
        var created = new Date(content[i].created_at)
        var diference = new Date(now - created)
        var time = node.childNodes[3].childNodes[7]
        time.innerHTML = "⏳ Hace " + diference.getMinutes() + " minutos"
        node.style.visibility = "visible"
    }

    foto = document.getElementById(5);
    foto.childNodes[1].src = 'https://shielded-bastion-36750.herokuapp.com'+content[0].picture.url;
    
}

function populateSelect() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var content = JSON.parse(xhr.responseText);
            console.log(content)
            setData(content);
        }
    }
    xhr.open('GET', `https://shielded-bastion-36750.herokuapp.com/${window.location.pathname}`);
    xhr.send();
}