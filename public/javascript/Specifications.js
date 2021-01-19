window.onload = populateSelect();

function setData (content) {
    const table1 = document.getElementById('0');
    table1.innerHTML = '';
    var t1header = document.createElement('th')
    t1header.colSpan = 2;
    t1header.innerHTML = 'Prestaciones';
    table1.appendChild(t1header)
    content.forEach(element => {
        var row = document.createElement('tr');
        var description = document.createElement('td');
        description.innerHTML = element.prestacion;
        var value = document.createElement('td');
        value.innerHTML = element.valor;
        row.appendChild(description);
        row.appendChild(value);
        table1.appendChild(row);
    });
}


function populateSelect() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var content = JSON.parse(xhr.responseText);
            setData(content);
        }
    }
    const id = window.location.pathname.split("/")[2]
    xhr.open('GET', `https://shielded-bastion-36750.herokuapp.com/${window.location.pathname}`);
    xhr.send();
}
