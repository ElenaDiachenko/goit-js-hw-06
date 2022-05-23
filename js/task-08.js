
const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === '' || password === '') {
        alert('Для отправки формы все поля должны быть заполнены'); 
    } else {
        const formData = {
        mail,
        password,
        }
        console.log(formData);
       event.currentTarget.reset() 
    }
   
}   
