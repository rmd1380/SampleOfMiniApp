const WelcomeEl = document.querySelector(".user_info")

const usename = window.eitaa.initdata.user.first_name

WelcomeEl.innerHTML = `Welcome ${usename}`