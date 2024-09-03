export default class Validator {
    constructor(name) {
        this.name = name;
    }

    validateUsername() {
        return (/^[^\d-_][\w-]+[^\d-_]$/.test(this.name)) && !(/\d{4,}/.test(this.name));
    }
}