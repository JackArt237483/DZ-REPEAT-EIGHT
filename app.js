const users = [
  { login: "artem", password:"1234567"},
  { login: "peta", password:"erter"},
  { login: "pass", password:"me to"},
  { login: "veter", password:"to window"},
  { login: "iert", password:"vala"}
]

function login() {
  const loginInput = document.querySelector("#login")
  const passwordInput = document.querySelector('#password')
  const errowMassage = document.querySelector('#error_message')
  const successMassage = document.querySelector("#sucess_message")

  const loginValue = loginInput.value
  const passwordValue = passwordInput.value

  if(loginValue === "" || passwordValue === "") {
    errowMassage.textContent = "Fields are not filled, please fill in again"
    successMassage.textContent = ""
    return
  }

  const user = users.find( u => u.login === loginValue && u.password === passwordValue )
  if(user) {
    errowMassage.textContent = ""
    successMassage.textContent = "Login is done"
  } else {
    errowMassage.textContent = "Something going wrong"
    successMassage.textContent = ""
  }
  
}