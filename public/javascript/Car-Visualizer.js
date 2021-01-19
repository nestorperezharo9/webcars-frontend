$(document).ready(function () {
    $(".containercar")[0].innerHTML = '';
    $.get({
        url: `https://shielded-bastion-36750.herokuapp.com/${window.location.pathname}`,
        success: (response, status) => setData(response, status)
    })
})

function setData(response,status) {
    console.log(response)
    response.forEach((element, index) => {
        var item = document.createElement("div");
        item.className = "item";
        var img = document.createElement("img");
        img.src ="https://shielded-bastion-36750.herokuapp.com"+element.review_image;
        item.appendChild(img);
        var carName = document.createElement("div");
        carName.className = "bordertext";
        carName.appendChild(document.createElement("center"))
        carName.childNodes[0].innerHTML = element.title;
        carName.childNodes[0].className = "cartext";
        item.appendChild(carName)
        item.onclick = () => {
            window.location.replace(`/reviews/${element.id}`);
        }
        var containerEsp = document.createElement("div");
        containerEsp.className = "containeresp";
        var tag = document.createElement("h2");
        tag.innerHTML = element.title;
        var category = document.createElement("h3");
        category.innerHTML = element.category
        var time = document.createElement("h4");
        var creation = new Date(element.created_at)
        var today = new Date()
        var diference = new Date(today - creation)
        time.innerHTML = "⏳ Hace " + diference.getMinutes() + " minutos"
        containerEsp.appendChild(tag)
        containerEsp.appendChild(category)
        containerEsp.appendChild(time)
        $(".containercar")[0].appendChild(item);
        $(".containercar")[0].appendChild(containerEsp)
    });
}