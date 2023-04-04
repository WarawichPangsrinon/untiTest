import axios from "axios";

export async function Sale_Cloth(
    numberOfPeople: number
) {
    const discount = await axios.post("/get-discount", {
        numberOfPeople: numberOfPeople,
    });

    let netSum: number = 0;

    if (discount.data.data.numberOfPeople % 4 == 0)
        netSum = (discount.data.data.numberOfPeople - (discount.data.data.numberOfPeople / 4)) * 340;
    else
        netSum = discount.data.data.numberOfPeople * 340;


    netSum = netSum + (netSum * 0.1)
    const mock_cloth = {
        numberOfPeople: discount.data.data.numberOfPeople,
        net: netSum,
    };
    return mock_cloth;
}