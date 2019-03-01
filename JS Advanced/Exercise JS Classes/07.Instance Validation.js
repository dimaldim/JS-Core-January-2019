class CheckingAccount
{
    constructor(clientId, email, firstName, lastName)
    {
        this._products = [];
        this._clientId = clientId;
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;

        if (!/^\d{6}$/g.test(this._clientId))
        {
            throw new TypeError("Client ID must be a 6-digit number")
        }

        let emailPatern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/g;
        if (!emailPatern.test(this._email))
        {
            throw new TypeError("Invalid e-mail")
        }

        if (!(this._firstName.length >= 3 && this._firstName.length <= 20))
        {
            throw new TypeError("First name must be between 3 and 20 characters long")
        }
        let pattern = /[a-zA-Z]/g;
        if (!pattern.test(this._firstName))
        {
            throw new TypeError("First name must contain only Latin characters")
        }

        if (!(this._lastName.length >= 3 && this._lastName.length <= 20))
        {
            throw new TypeError("Last name must be between 3 and 20 characters long")
        }
        if (!pattern.test(this._lastName))
        {
            throw new TypeError("Last name must contain only Latin characters")
        }
    }
}