function validateEmail () {
  let el = document.getElementById('email')
  let email = el.value

  let valid = Boolean(email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
  valid ? el.parentElement.className = 'a' : el.parentElement.className = "error"

  return valid
}

function validatePassword () {
  let el = document.getElementById('password')
  let password = el.value

  let valid = Boolean(password && password.length > 7)
  valid ? el.parentElement.className = 'a' : el.parentElement.className = "error"

  return valid
}

function validateForm() {
  let validations = [
    validateEmail(),
    validatePassword()
  ]

  for (i = 0; i < validations.length; i++)
      if (!validations[i])
        return false

    return true
}
