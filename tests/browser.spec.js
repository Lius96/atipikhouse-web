import axios from 'axios'
const apiBaseUrl = 'http://localhost:4000'
describe("Test API's", () => {
    test('test login', async () => {
        let unvalidUser = {
            email: 'admin@admin.com',
            password: 'KSD&Ap?DAWAc'
        }

        const { status, data } = await axios.post(
            `${apiBaseUrl}/api/v1/login/`,
            unvalidUser
        )

        expect(data.success).toBe(false)
    })

    test('test update user', async () => {
        let unvalidUserData = {
            lastname: 466565, // cant be number
            firstname: 'nouveau prenom',
            address: 'rue 6',
            phone: '+3368472659',
            social_link: {},
            grade: 'client',
            city: 'paris',
            country: 'France'
        }
        let data = null
        const token = '3juCOz9meFqBx05lp1'
        try {
            const { status, data } = await axios.put(
                `${apiBaseUrl}/api/v1/users/e6097c59-bd4b-40a4-898e-8c0ff49e4774`,
                unvalidUserData,
                {
                    withCredentials: false,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        authorization: token
                    }
                }
            )
            expect(data.success).toBeDefined()
        } catch (e) {
            expect(data).toBeNull()
        }
    })
})
