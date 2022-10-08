import throttle from "lodash.throttle";
// import localStorage form "./storage"

const formRef = document.querySelector('feedback-form');
console.log(formRef);

const onFormInput = event => {
    console.log(event.target);
}

formRef.addEventListener('input', onFormInput)