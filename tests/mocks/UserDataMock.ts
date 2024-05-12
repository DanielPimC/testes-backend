import { USER_ROLES, User } from "../../../src/model/User";


export class UserDataMock {
    public async createUser(user: User): Promise<void> { }

    public async getUserById(id: string): Promise<User | undefined> {
        if (id === '1') {
            return {
                id: '1',
                name: 'Daniel',
                email: 'daniel@email.com',
                role: USER_ROLES.ADMIN
            }
        } else if (id === '2') {
            return {
                id: '2',
                name: 'Flavio',
                email: 'flavio@email.com',
                role: USER_ROLES.NORMAL
            }
        }else {
            return undefined
        }
    }

    public async getAllUsers(): Promise<User[]> {
        return [
            {
                id: '1',
                name: 'Daniel',
                email: 'daniel@email.com',
                role: USER_ROLES.ADMIN
            },
            {
                id: '2',
                name: 'Flavio',
                email: 'flavio@email.com',  
                role: USER_ROLES.NORMAL
            }
        ]
    }
}