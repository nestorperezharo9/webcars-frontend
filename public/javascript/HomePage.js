window.onload = populateSelect();

function setData (content) {
    content.forEach((element, index) => {
        document.getElementsByClassName('title')[index].innerText = element.title
        document.getElementsByClassName('desktop-img')[index].src = "https://shielded-bastion-36750.herokuapp.com" + element.review_image
        document.getElementsByClassName('movil-img')[index].src = "https://shielded-bastion-36750.herokuapp.com" + element.review_image
        document.getElementById(index).onclick = () => {
            window.location.replace(`/reviews/${element.id}`)
        }
        document.getElementsByClassName('tag')[index].innerText = element.category
        document.getElementsByClassName('body')[index].innerText = element.sections[0].body.substring(0, 80) + "..."
        var now = new Date()
        var created = new Date(element.created_at)
        var diference = new Date(now - created)
        var time = document.getElementsByClassName('time')[index]
        time.innerHTML = "⏳ Hace " + diference.getMinutes() + " minutos"
        document.getElementById(index).style.visibility = "visible"
    });
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
    xhr.open('GET', 'https://shielded-bastion-36750.herokuapp.com/homepage');
    xhr.send();
}
