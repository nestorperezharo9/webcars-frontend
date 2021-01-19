addSection()
addSpecification()

const title = document.getElementById('titl');
const email = document.getElementById('email');
const description = document.getElementById('descr');
const category = document.getElementById('category');
const fileInput = document.getElementById('img');


function validarForm(event) {
    event.preventDefault();
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    let isValid = true;
    if(!expresion.test(email.value)) {
        document.getElementById('1').innerHTML='Email incorrecto';
        isValid = false;
        email.focus();
    } else {
        document.getElementById('1').innerHTML='';
    }

    document.querySelectorAll('.section-title').forEach((element) => {
        if (element.value.length > 25 || element.value.trim().length === 0) {
            isValid = false;
            title.focus();
        }
    })

    if(title.value.length > 25 || title.value.trim().length === 0) { 
        document.getElementById('2').innerHTML='Título incorrecto';
        isValid = false;
        title.focus();
    } else {
        document.getElementById('2').innerHTML='';
    }

    if(category.value == '') {
        document.getElementById('4').innerHTML='Escoja una opción';
        category.focus();
        isValid = false;
    } else {
        document.getElementById('4').innerHTML='';
    }

    if(description.value < 20 || description.value > 1200) {
        //document.getElementById('5').innerHTML='Descipción incorrecta';
        isValid = false;
        description.focus();
    } else {
        //document.getElementById('5').innerHTML='';
    }

    if (isValid) {
        var sections = []
        var sectionElements = document.querySelectorAll('.section')
        sectionElements.forEach((element,index) => {
            sections.push({
                title: element.childNodes[0].childNodes[1].value,
                body: element.childNodes[1].childNodes[1].value,
                picture_url: element.childNodes[2].childNodes[1].files[0]
            })
        })
        var specifications = []
        var specificationElements = document.querySelectorAll('.specification')
        specificationElements.forEach((element,index) => {
            specifications.push({
                prestacion: element.childNodes[0].childNodes[1].value,
                valor: element.childNodes[1].childNodes[1].value,
            })
        })
        console.log(specifications)
        var data = new FormData();
        data.append("authenticity_token"," ")
        data.append("review[title]",document.getElementById('titl').value)
        data.append("review[category]",document.getElementById('category').value)
        sections.forEach((section,index)=>  {
            data.append(`review[sections_attributes][${index}][_destroy]`,false)
            data.append(`review[sections_attributes][${index}][title]`,section.title)
            data.append(`review[sections_attributes][${index}][body]`,section.body)
            data.append(`review[sections_attributes][${index}][picture_url]`, section.picture_url)})
        specifications.forEach((specification, index) => {
            data.append(`review[specifications_attributes][${index}][_destroy]`, false)
            data.append(`review[specifications_attributes][${index}][prestacion]`, specification.prestacion)
            data.append(`review[specifications_attributes][${index}][valor]`, specification.valor)
        })
        data.append('commit','Create Review')
                var XHR = new XMLHttpRequest();
        XHR.addEventListener( 'load', function( event ) {
            window.location.replace("/")
        });
        XHR.addEventListener( 'error', function( event ) {
            
        });
        XHR.open('POST', 'https://shielded-bastion-36750.herokuapp.com/reviews')
        XHR.send(data)

    }
}

function addSection () {
    var sectionInput = document.createElement('div')
    sectionInput.id = 'section-input-'+document.getElementsByClassName('section').length
    sectionInput.className = 'section'
    const containerinput1 = document.createElement('div')
    containerinput1.className = "containerinput"
    const containerinput2 = document.createElement('div')
    containerinput2.className = "containerinput"
    const label1 = document.createElement('label')
    const label2 = document.createElement('label')
    const input1 = document.createElement('input')
    const input2 = document.createElement('textarea')
    const containerinput3 = document.createElement('div')
    const input3 = document.createElement('input')
    const label3 = document.createElement('label')
    label3.innerText = "Imágen de la sección"
    containerinput3.className = "containerinput"
    input3.type = "file"
    input3.id = "img"
    input3.name = "image"
    label1.innerText = "Section title"
    input1.type = "text"
    input1.className = "sinborde"
    input1.placeholder = "Título de la sección"
    input1.maxLength = "25"
    input1.size="137"
    input1.name = "section-title"
    input1.id = "section-titl"
    label2.innerText = "Section description"
    input2.cols = "140"
    input2.rows = "10"
    input2.className = "sinborde"
    input2.placeholder = "Máximo 1200 caracteres"
    input2.name = "description"
    input2.id = "descr"
    containerinput1.appendChild(label1)
    containerinput1.appendChild(input1)
    containerinput2.appendChild(label2)
    containerinput2.appendChild(input2)
    containerinput3.appendChild(label3)
    containerinput3.appendChild(input3)
    sectionInput.appendChild(containerinput1)
    sectionInput.appendChild(containerinput2)
    sectionInput.appendChild(containerinput3)
    sectionInput.appendChild(document.createElement('br'))
    document.getElementById('sections-container').appendChild(sectionInput)
}

function addSpecification () {
    var specificationInput = document.createElement('div')
    specificationInput.id = 'section-input-'+document.getElementsByClassName('specification').length
    specificationInput.className = 'specification'
    const containerinput1 = document.createElement('div')
    containerinput1.className = "containerinput"
    const containerinput2 = document.createElement('div')
    containerinput2.className = "containerinput"
    const label1 = document.createElement('label')
    const label2 = document.createElement('label')
    const input1 = document.createElement('input')
    const input2 = document.createElement('input')
    label1.innerText = "Prestacion"
    input1.type = "text"
    input2.type = "text"
    input1.className = "sinborde"
    input1.placeholder = "Prestación"
    input1.maxLength = "30"
    input1.size="137"
    input1.name = "prestacion"
    input1.id = "prestacion"
    label2.innerText = "Valor"
    input2.className = "sinborde"
    input2.placeholder = "Valor de la prestación"
    input2.maxLength = "30"
    input2.name = "valor"
    input2.id = "valor"
    containerinput1.appendChild(label1)
    containerinput1.appendChild(input1)
    containerinput2.appendChild(label2)
    containerinput2.appendChild(input2)
    specificationInput.appendChild(containerinput1)
    specificationInput.appendChild(containerinput2)
    specificationInput.appendChild(document.createElement('br'))
    document.getElementById('specifications-container').appendChild(specificationInput)
}