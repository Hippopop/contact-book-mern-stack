import { BASE_URL } from "../config";

const getContactCategory = async (contactId: String): Promise<TContactCategory> => {
    const response = await fetch(`${BASE_URL}/contact/${contactId}`);
    const categories: TContactCategory = await response.json();
    return categories;
}

export { getContactCategory };