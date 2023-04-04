
import axios from 'axios';
import mockAdapter from "axios-mock-adapter";

describe('Test Mock Api', () => {
    var mock = new mockAdapter(axios);
    beforeEach(() => {
        mock.reset()
    })
    // ? arrange
    const expectedResult = "Pang!!"
    // ? action
    it('should get request', async () => {
        mock.onGet('/users').reply(200, {
            usersName: 'Pang!!'
        })
        const result = await axios.get('/users');


        console.log(result);

        // ? assert
        expect(result.data.usersName).toBe(expectedResult);

    })


    it('should get request', async () => {
        const expectedResult = 200

        mock.onPost('/add-users', {
            id: 2,
            name: "Pang!"
        }).reply(200, {
            usersName: 'Pang!!'
        })
        const result = await axios.post('/add-users', {
            id: 2,
            name: "Pang!"
        });


        console.log(result);

        // ? assert
        expect(result.status).toBe(expectedResult);

    })

})