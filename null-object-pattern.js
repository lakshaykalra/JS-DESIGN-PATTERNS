class User{
    constructor(id,name,role){
        this.id=id
        this.name=name
        this.role=role
    }

    haveAccess(){
        return this.role=='Admin'
    }
}

const users=[
    new User(1,'foo','Admin'),
    new User(2,'bar','Manager')
]

class NullUser{
    constructor(){
        this.id=null
        this.name='Guest'
        this.role='Unknown'
    }

    haveAccess(){
        return false
    }
}

function findUser(id){
    const user= users.find(user=>user.id==id)
    if(user){
        return user
    } else{

        return new NullUser()

    }
}

function logUserAndPermission(id){
    
    const user=findUser(id)

    console.log('<<<<<<<name>>>>>>>.',user.name)

    console.log('<<<<<<<access>>>>>>>.',user.haveAccess())

}

logUserAndPermission(78)