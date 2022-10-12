import throttle from "lodash.throttle";
import { save, load, remove } from "./storage";
const formRef = document.querySelector('.feedback-form');
// console.log(formRef);

const LOCALE_STORAGE_KEY = 'feedback-form-state';


initPage();

const onFormInput = event => {
    const { name, value } = event.target;

    let saveData = load(LOCALE_STORAGE_KEY);
    saveData = saveData ? saveData : {};

    saveData[name] = value;

    save(LOCALE_STORAGE_KEY, saveData)
}

const throttleOnFormInput = throttle(onFormInput, 500)
formRef.addEventListener('input', throttleOnFormInput);

function initPage() {
    const saveData = load(LOCALE_STORAGE_KEY);
    // console.log(saveData);
    if (!saveData) {
        return;
    }
    Object.entries(saveData).forEach(([name, value]) => {
                formRef.elements[name].value = value;
            })
}

const hendleSubmit = event => {
    event.preventDefault();
    const {
        elements: {email, message},
    } = event.currentTarget;
    // console.log({ email: email.value, message: message.value });
    event.currentTarget.reset();
    remove(LOCALE_STORAGE_KEY);
};

formRef.addEventListener('submit', hendleSubmit);
