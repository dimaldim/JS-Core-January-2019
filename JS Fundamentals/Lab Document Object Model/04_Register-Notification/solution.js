function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var pattern = /(.+)@(.+).(com|bg)/gm;

    if (username.length > 0 && password.length > 0 && pattern.test(email)) {
        var result = document.getElementById('result');

        result.innerHTML = `<h1>Successful Registration!</h1>Username: ${username}<br>Email: ${email}<br>Password: ${'*'.repeat(password.length)}`;
    }
    setTimeout(clear, 5000);

    function clear() {
        document.getElementById('result').innerHTML = '';
    }
}
