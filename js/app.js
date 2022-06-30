let namePerson = document.querySelector('#contact-person');

function personName () {
    let namePerson = document.querySelector('#contact-person');
    let inputName = document.querySelector('#name-contact');

    inputName.addEventListener('change', () =>{
        namePerson.textContent = inputName.value;
    });

    
}

personName();

function icons (){
    let inputDuo = document.querySelector('#duo');
    let iconDuo = document.querySelector('.duo');

    inputDuo.addEventListener('change', () =>{
        iconDuo.classList.toggle('d-none');
    });

    let inputCall = document.querySelector('#call');
    let iconCall = document.querySelector('.call');

    inputCall.addEventListener('change', () =>{
        iconCall.classList.toggle('d-none');
    });

}

icons();



function addMessages(){
    let inputText = document.querySelector('#message');
    let btnAdd = document.querySelector('#add-message');
    let message = document.querySelector('#content-messages');

    btnAdd.addEventListener('click', () =>{

        message.innerHTML += `<div class="person d-flex align-items-center me-auto">
        <div class="rounded-circle bg-dark d-flex align-items-center justify-content-center mb-4">
            <img class="person-img" src="img/person.svg" alt="" width="40">
        </div>
        <div class="person-left">
            <div class="message">
                <p class="message__person m-0 ms-2 rounded-pill bg-light px-3 py-1 my-1">
                    ${inputText.value}
                </p>
                <button class="btn btn-sm bg-transparent fs-sm btn-move">Mover a la derecha ></button>
            </div>
        </div>
        
    </div>`;

    currentMessage();

    });
}

addMessages();

function currentMessage(){

    let move = document.querySelector('.btn-move');

    let person = document.querySelectorAll('.person');

    var currentPerson = person;

    for (let i = 0; i < currentPerson.length; i++) {

        currentPerson[i].onclick = function(){
            this.classList.toggle('ms-auto');
            this.classList.toggle('me-auto');

            move.textContent == 'Mover a la derecha >' ?
            move.textContent = '< Mover a la izquierda' :
            move.textContent = 'Mover a la derecha >'
        }

       
        
    }
}

let btnDownload = document.querySelector('.btn-download');

btnDownload.addEventListener('click', capture);

function capture() {
    const captureElement = document.querySelector('#capture')
    html2canvas(captureElement)
        .then(canvas => {
            canvas.style.display = 'none'
            document.body.appendChild(canvas)
            return canvas
        })
        .then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', `${namePerson.textContent} - Google Message Generator.png`)
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })
}

function getSize(){

    

    
}

getSize();