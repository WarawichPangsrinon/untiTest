import MockAdapter from "axios-mock-adapter";
import { Sale_Cloth } from "../shabuOMS";
import axios from "axios";

describe("Shabu OMS discount", () => {
    var mockApi = new MockAdapter(axios);
    let person: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 12];
    let sumNet: number[] = [374, 748, 1122, 1122, 1870, 2244, 2618, 2244, 3366];

    for (let index = 0; index < person.length; index++) {

        it(`person : ${person[index]} | net : ${sumNet[index]} `, async () => {

            // ! ARRANGE
            const expectedResult = {
                numberOfPeople: person[index],
                net: sumNet[index],
            };

            // ! ACTION
            mockApi
                .onPost("/get-discount", {
                    numberOfPeople: person[index],
                })
                .reply(200, {
                    status: "success",
                    message: "-",
                    data: {
                        numberOfPeople: person[index],
                    },
                });

            const result = await Sale_Cloth(person[index]);
            console.log(result);

            // ! ASSERT
            expect(result.net).toEqual(expectedResult.net);
        });
    }



});