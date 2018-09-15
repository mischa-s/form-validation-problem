function validateEmail () {
  let el = document.getElementById('email')
  let email = el.value

  let valid = (email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))

  valid ? el.parentElement.className = '' : el.parentElement.className = "error"

  return valid
}

function validateForm() {
  var validations = [
    validateEmail()
  ]

  let validForm = validations.filter(Boolean).length > 0

  return validForm
}
