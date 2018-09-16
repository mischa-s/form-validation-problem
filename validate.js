function validateEmail () {
  let el = document.getElementById('email')
  let email = el.value

  let valid = Boolean(email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
  valid ? el.parentElement.className = '' : el.parentElement.className = "error"

  return valid
}

function validatePassword () {
  let el = document.getElementById('password')
  let password = el.value

  let valid = Boolean(password && password.length > 7)
  valid ? el.parentElement.className = '' : el.parentElement.className = "error"

  return valid
}

function validateColour () {
  let el = document.getElementById('colour')
  let colour = el.value
  let valid = Boolean(colour)

  valid ? el.parentElement.className = '' : el.parentElement.className = "error"

  return valid
}

function validateAnimals() {
    let animals = document.querySelectorAll('input[name="animal"]')
    let checked = []

    for (var i = 0; i < animals.length; i++) {
         if (animals[i].checked) {
             checked.push(animals[i]);
        }
    }

    let valid = Boolean(checked.length  > 1)

    valid ? animals[0].parentElement.className = '' : animals[0].parentElement.className = "error"

    return valid
}

function validateTiger () {
  let tigerSelected = document.getElementById("tiger").checked;
  let tigerType = document.getElementById("tiger_type");
  let valid = Boolean(tigerSelected && tigerType.value.length > 0)

  console.log(valid, 'valid!')

  valid ? tigerType.parentElement.className = '' : tigerType.parentElement.className = "error"

  return valid
}

function validateForm() {
  let validations = [
    validateEmail(),
    validatePassword(),
    validateColour(),
    validateAnimals(),
    validateTiger()
  ]

  for (i = 0; i < validations.length; i++)
      if (!validations[i])
        return false

    return true
}
