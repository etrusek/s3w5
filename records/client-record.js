const {ValidationError} = require("../utils/error");

class ClientRecord {
constructor(obj) {
    const {id, mail, name, nextContactAt, notes} = obj;
    if (!id || (typeof id) !== 'string'){
        throw new ValidationError('ID musi być niepustym tekstem')
    }
    if (!name || (typeof name) !== 'string' || name.length < 3 ){
        throw new ValidationError('Imię musi być tekstem o długości minimum 3 znaków.')
    }
    if (!mail || (typeof mail) !== 'string' || mail.indexOf('@') === -1){
        throw new ValidationError('Email nieprawidłowy.')
    }
    if (typeof nextContactAt !== 'string' ){
        throw new ValidationError('Data następnego kontaktu musi byc tekstem')
    }
    if (typeof notes !== 'string' ){
        throw new ValidationError('Notatki musza być tekstem')
    }
    this.name = name;
    this.mail = mail;
    this.nextContactAt = nextContactAt;
    this.notes = notes;
    this.id = id;
}
}

module.exports = {
    ClientRecord,
}