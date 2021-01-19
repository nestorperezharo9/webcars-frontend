window.onload = populateSelect();

function setData (content) {
    console.log(content)
    var title = document.getElementById('title');
    title.innerHTML = content.title;
    var container = document.getElementsByClassName('review-container')[0];
    container.innerHTML = "";
    content.sections.forEach(element => {
        var section = document.createElement("section")
        section.className = "review-section"
        var content = document.createElement("div")
        content.className = "content";
        var span = document.createElement("span")
        var image = document.createElement("img")
        var h2 = document.createElement("h2")
        h2.innerText = element.title
        image.src = "https://shielded-bastion-36750.herokuapp.com"+element.picture_url.url  
        var text = document.createElement("p")
        text.innerText = element.body
        span.appendChild(h2)
        content.appendChild(span)
        content.appendChild(text)
        section.appendChild(content)
        section.appendChild(image)
        container.appendChild(section)
    });
    document.getElementById('Specifications').href = '/reviews/'+content.id+'/specifications'
}

function populateSelect() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var content = JSON.parse(xhr.responseText);
            setData(content);
        }
    }
    xhr.open('GET', `https://shielded-bastion-36750.herokuapp.com${window.location.pathname}`);
    xhr.send();
}