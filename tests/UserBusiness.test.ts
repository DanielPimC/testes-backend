import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDataMock } from "../data/mock/UserDataMock"


// 2-
describe('Testes getUserById', () => {
    test("Usuário inexistente", async () => {
        expect.assertions(2) 
        try {
            const userBusiness = new UserBusiness(
                new UserDataMock()
            )
            await userBusiness.getUserById("3")
        } catch (error: any) {
            expect(error.message).toBe("User not found")
            expect(error.statusCode).toBe(404)
        }
    })
    test("Resposta de sucesso", async () => {
        expect.assertions(2) 
        try {
            const userBusiness = new UserBusiness(
                new UserDataMock()
            )
            jest.spyOn(UserDataMock.prototype, 'getUserById');
            const user = await userBusiness.getUserById("1")

            expect(user).toEqual({
                id: "1",
                name: "Daniel",
                email: "daniel@email.com",
                role: "ADMIN"
            })
            expect(UserDataMock.prototype.getUserById).toHaveBeenCalledWith('1')
        } catch (error: any) {
            console.log(error)
        }
    })
})


// 4-
describe('Testes getAllUsers', () => {
    test("Erro não autorizado", async () => {
        expect.assertions(2) 
        try {
            const userBusiness = new UserBusiness(
                new UserDataMock()
            )
            await userBusiness.getAllUsers()
        } catch (error: any) {
            expect(error.message).toBe("Unauthorized")
            expect(error.statusCode).toBe(401)
        }
    })
    
    test("Resposta de sucesso", async () => {
        expect.assertions(2) 
        try {
            const userBusiness = new UserBusiness(
                new UserDataMock()
            )
            jest.spyOn(UserDataMock.prototype, 'getAllUsers');
            const users = await userBusiness.getAllUsers()
            expect(users).toEqual([
                {
                    id: '1',
                    name: 'Daniel',
                    email: 'daniel@email.com',
                    role: "ADMIN"
                },
                {
                    id: '2',
                    name: 'Flavio',
                    email: 'flavio@email.com',  
                    role: "NORMAL"
                }
            ])
            expect(UserDataMock.prototype.getAllUsers).toHaveBeenCalled()
        } catch (error: any) {
            console.log(error)
        }
    })
})


// 6-
describe('Testes getProfile', () => {
    test("Resposta de sucesso", async () => {
        expect.assertions(2) 
        try {
            const userBusiness = new UserBusiness(
                new UserDataMock()
            )
            jest.spyOn(UserDataMock.prototype, 'getUserById');
            const profile = await userBusiness.getProfile("1")
            expect(profile).toEqual(
            {
                id: '1',
                name: 'Daniel',
                email: 'daniel@email.com',
                role: "ADMIN"
            })
            expect(UserDataMock.prototype.getUserById).toHaveBeenCalledWith('1')
        } catch (error: any) {
            console.log(error)
        }
    })

    test("Usuário inexistente", async () => {
        expect.assertions(2) 
        try {
            const userBusiness = new UserBusiness(
                new UserDataMock()
            )
            await userBusiness.getProfile("3")
        }catch (error: any) {
            expect(error.message).toBe("User not found")
            expect(error.statusCode).toBe(404)
        }
    })
})
