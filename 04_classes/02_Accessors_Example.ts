class AccessorsExample{
    private _firstName: string = "";
    private _lastName: string = "";
    

    get firstName(): string{
        return this._firstName;
    }

    get lastName(): string{
        return this._lastName;
    }

    set firstName(value: string){
        this._firstName = value;
    }

    set lastName(value: string){
        this._lastName = value;
    }
    
}

let example = new AccessorsExample();

example.firstName = "Mohammed"
example.lastName = "Abdul Hafeez"


console.log(example.firstName)
console.log(example.lastName)