const wrapper = document.getElementById('wrapper')
const person = document.getElementById('person')
const company = document.getElementById('company')
const submitPersonCompany = document.getElementById('submit-person-company')
const submitPerson = document.getElementById('submit-person')
const submitCompany = document.getElementById('submit-company')

const personForm = document.getElementById('person-form')
    const firstNameInput = document.getElementById('firstNameInput')
    const lastNameInput = document.getElementById('lastNameInput')
    const emailInput = document.getElementById('emailInput')

const companyForm = document.getElementById('company-form')
    const companyInput = document.getElementById('companyInput')
    const phoneInput = document.getElementById('phoneInput')

// use this to create a layer to prevent users from click outside the form. This is a part of Show Form
const createLayer = () => {
    const makeLayer = document.createElement('div')
    makeLayer.setAttribute('id', 'layer')
    document.body.appendChild(makeLayer)
}

// use this to show person or company form
const showForm = (e) => {
    e.preventDefault();
    if (person.checked) {
        person.checked = true
        createLayer();
        personForm.classList.remove('hide');
    } else if (company.checked) {
        company.checked = true
        createLayer();
        companyForm.classList.remove('hide');
    }
}


// to check if inputs are filled
const checkFirstLastNameEmailInputs = () => (firstNameInput.value !== '' && lastNameInput.value !== '' && emailInput.value !== '') ? true : false;

// this verify if the email is correct
const checkEmailValue = () => {
        let emailToTest = emailInput.value
    if (emailToTest.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
        emailInput.classList.add('inputPassed')
    } else {
        emailInput.classList.add('inputFailed')
    }
}
//if all fields are filed is time to celebrate BUT check email first else show error
const checkPersonForm = (e) => {
    e.preventDefault()
    checkFirstLastNameEmailInputs(true) ? markPassedNameLastNameTestEmail() : showErrorPerson();
}

// when all fields are filled if FirstName and LastName are correct, celebrate and check email
const markPassedNameLastNameTestEmail = () => {
    firstNameInput.classList.add('inputPassed')
    lastNameInput.classList.add('inputPassed')
    checkEmailValue();
}
// if one or more fields are empty, I will discoveri it and I'll make you know
const showErrorPerson = () => {
    if ((firstNameInput.value === '') && (lastNameInput.value === '') && (emailInput.value === '')) {
        firstNameInput.classList.add('inputFailed')
        lastNameInput.classList.add('inputFailed')
        emailInput.classList.add('inputFailed')
    } else if ((firstNameInput.value === '') && (lastNameInput.value === '') && (emailInput.value !== '')) {
        firstNameInput.classList.add('inputFailed')
        lastNameInput.classList.add('inputFailed')
        checkEmailValue();
    } else if ((firstNameInput.value === '') && (lastNameInput.value !== '') && (emailInput.value === '')) {
         firstNameInput.classList.add('inputFailed')
         lastNameInput.classList.add('inputPassed')
         emailInput.classList.add('inputFailed')
    } else if ((firstNameInput.value === '') && (lastNameInput.value !== '') && (emailInput.value !== '')) {
        firstNameInput.classList.add('inputFailed')
        lastNameInput.classList.add('inputPassed')
        checkEmailValue();
    } else if ((firstNameInput.value !== '') && (lastNameInput.value === '') && (emailInput.value === '')) {
         firstNameInput.classList.add('inputPassed')
         lastNameInput.classList.add('inputFailed')
         emailInput.classList.add('inputFailed')
    } else if ((firstNameInput.value !== '') && (lastNameInput.value === '') && (emailInput.value !== '')) {
         firstNameInput.classList.add('inputPassed')
         lastNameInput.classList.add('inputFailed')
         checkEmailValue();
    } else if ((firstNameInput.value !== '') && (lastNameInput.value !== '') && (emailInput.value === '')) {
         firstNameInput.classList.add('inputPassed')
         lastNameInput.classList.add('inputPassed')
         emailInput.classList.add('inputFailed')
    }
}
// check if Company form's input are filled
const checkNamePhone = () => ((companyInput.value !== '') && (phoneInput.value !== '')) ? true : false

// show empty fields for company
const checkPhoneNumber = () => {
    let phoneToTest = phoneInput.value
        if (phoneToTest.match(/[^0-9\^\-\^ ]/)) {
            console.log('stop')
        } else if (phoneToTest.match(/[0-9\-\s]{6,50}/g)) {
            console.log('la tua prima regex')
        } else {
            console.log('dai che devo pisciare');
        }
}
const showErrorCompany = () => {
    if ((companyInput.value === '') && (phoneInput.value === '')) {
        companyInput.classList.add('inputFailed')
        phoneInput.classList.add('inputFailed')
    } else if ((companyInput.value !== '') && (phoneInput.value === '')) {
        companyInput.classList.add('inputPassed')
        phoneInput.classList.add('inputFailed')
    } else if ((companyInput.value === '') && (phoneInput.value !== '')) {
        companyInput.classList.add('inputFailed')
        checkPhoneNumber()
    }

}
const checkCompanyForm = (e) => {
    e.preventDefault();
    checkNamePhone(true) ? checkPhoneNumber() : showErrorCompany()
}
submitPersonCompany.addEventListener('click', showForm)
submitPerson.addEventListener('click', checkPersonForm)
submitCompany.addEventListener('click', checkCompanyForm)

// function required(value) {
//     return value !== '';
// }

// function minlength(value) {
//     return value && value.length;
// }

// function email(value) {
//     return required(value);
// }

// const formDefinition = {
//     'email': [required, email],
//     'firstName': [required],
//     'lastName': [required],
// };

// const formDefinition = [
//     {
//         id: 'email',
//         validation: [required, email],
//     },
//     'firstName': [required],
//     'lastName': [required],
// ];
