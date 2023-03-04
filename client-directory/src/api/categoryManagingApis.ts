import { BASE_URL } from "../config";

const addCategory = async (categoryName: String): Promise<TContactCategory> => {
    const response = await fetch(`${BASE_URL}/contact_category/add_category`, {
        method: "POST",
        body: JSON.stringify({ category: categoryName }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    //It takes time to convert to a `json`
    const resData: TContactCategory = await response.json();
    return resData;
}

const deleteCategory = async (categoryId: String): Promise<TContactCategory> => {
    const response = await fetch(`${BASE_URL}/contact_category/delete_category`, {
        method: "DELETE",
        body: JSON.stringify({ categoryId: categoryId }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const resData: TContactCategory = await response.json();
    return resData;
}

const getAllCategoryList = async (): Promise<TContactCategory[]> => {
    const response = await fetch(`${BASE_URL}/contact_category/all_category`);
    const allCategories: TContactCategory[] = await response.json();
    return allCategories;
}

export { addCategory, getAllCategoryList, deleteCategory };