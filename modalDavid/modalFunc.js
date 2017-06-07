const person = document.getElementById('person')
const company = document.getElementById('company')
const submitPersonCompany = document.getElementById('submit-person-company')
const personForm = document.getElementById('person-form')
const companyForm = document.getElementById('company-form')
const showForm = function(e) {
    e.preventDefault();
    if (person.checked) {
        person.checked = true
        personForm.classList.remove('hide');
    } else if (company.checked) {
        company.checked = true
        companyForm.classList.remove('hide');
    }
}
submitPersonCompany.addEventListener('click', showForm)