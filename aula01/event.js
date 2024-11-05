const formId = document.getElementById("#formId");

formId.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const lastName = document.querySelector("#lastName").value;

    console.log(name)
    console.log(lastName)
});

const firstFunction = () => {
    alert('Página carregada');
};

window.onload = function () {
    firstFunction();
};

window.addEventListener('keydown', event => {
    console.log(event.key)
})