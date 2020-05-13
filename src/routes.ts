import {Request,Response} from 'express'
import createUser from './services/CreateUser'
export function helloWorld(request: Request,response: Response){

    const user = createUser({
        name: 'User',
        email: 'user@user.com',
        phone: '12345',
        techs: [
            'Node',
            'ReactJs',
            { tech: 'RN', note: 10}
        ]
    })

    return response.json({
        message: 'Hello World'
    })
}