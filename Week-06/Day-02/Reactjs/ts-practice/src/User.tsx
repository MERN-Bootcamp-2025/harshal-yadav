interface User{
    name: string,
    id: number,
    address : string,
    contact: number,

}

class UserAccount(){
      name: string,
    id: number,
    address : string,
    contact: number

    constructor(name:String,  id: number,
    address : string,
    contact: number){
        this.name= name;
        this.id= id;
    }

}

const user:User = new UserAccount('Harshal',0010);