
interface TechsData{
    tech: string
    note: number
}

interface CreateUserData{
    name?: string
    email: string
    phone: string,
    techs: Array<string | TechsData>
}

export default function createUser({name ='', email, phone,techs}: CreateUserData){
    
    const user = {
        name,
        email,
        phone,
        techs
    }
    return user
}