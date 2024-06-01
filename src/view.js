const allSwitchers = document.querySelectorAll('.formo-contact-form-switcher');
allSwitchers.forEach((switcher) => {
  const formSelector = switcher.querySelector('.formo-contact-form-switcher-switch');
  const forms = switcher.querySelectorAll('.formo-contact-form-switcher-forms .formo-contact-form');
  forms.forEach((form, index) => {
    const name = form.getAttribute('data-form-name');
    const newOption = document.createElement('option');
    newOption.setAttribute('value', name.replace(/\s+/g, '-').toLowerCase());
    newOption.innerText = name;
    index === 0 && newOption.classList.add('shown');
    formSelector.appendChild(newOption);
  })
  formSelector.addEventListener('change', () => {
    showSelected(switcher);
  })
  showSelected(switcher);
})

function showSelected(switcher){
  switcher.querySelector('.shown').classList.remove('shown');
  const formSelector = switcher.querySelector('.formo-contact-form-switcher-switch');
  const selectedName = formSelector.value;
  const forms = switcher.querySelectorAll('.formo-contact-form-switcher-forms .formo-contact-form');
  forms.forEach( form => {
    const name = form.getAttribute('data-form-name').replace(/\s+/g, '-').toLowerCase();
    if (name == selectedName) {
      form.classList.add('shown');
    }
  })
}