const button = document.querySelector('button');

const addloading = () => {
    button.innerHTML = '<img src="./loading.svg" class="loading">'
}

const removeloading = () => {
    button.innerHTML = 'Enviar';
}

const handleSubmit = (event) => {
    event.preventDefault();
    addloading();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;

    fetch('https://api.sheetmonkey.io/form/6G8qo6rEA8T7CSyMQ4VqTd', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    .then(() => removeloading());
}

document.querySelector('form').addEventListener('submit', handleSubmit);