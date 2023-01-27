import { BASE_URL } from "../../config";
import { FormEvent, useEffect, useState } from "react";
import { SingleContactCategory } from "./singleContactCategory";

export const ContactCategory = () => {
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState<TContactCategory[]>([]);

  const submitForm = async (data: FormEvent) => {
    data.preventDefault();
    const response = await fetch(`${BASE_URL}/new_contact_category`, {
      method: "POST",
      body: JSON.stringify({ category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //It takes time to convert to a `json`
    const resData = await response.json();
    console.log(resData);
  };

  useEffect(() => {
    const getAllContactCategory = async () => {
      const response = await fetch(`${BASE_URL}/all_contact_categories`);
      const allCategories = await response.json();
      setCategoryList(allCategories);
    };
    getAllContactCategory();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <form className="space-x-4 p-10 flex items-center" onSubmit={submitForm}>
        <img
          className="h-32 w-32 mr-8"
          src="https://img.icons8.com/avantgarde/2x/new-contact.png"
          alt=""
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-secendery-color text-3xl font-serif font-extrabold mb-4">
            Contact Book
          </h1>
          <input
            type="text"
            value={category}
            onChange={(text) => setCategory(text.target.value)}
            placeholder="New Category Name"
            className="p-3 w-96 outline-none rounded-lg focus:outline-secendery-color"
          />
          <button className="bg-accent-color rounded-md p-2 border-2">
            Create New Category
          </button>
        </div>
      </form>
      <div className="gap-3">
        {categoryList.map((singleCategory) => (
          <SingleContactCategory
            key={singleCategory._id}
            contactCategory={singleCategory}
          />
        ))}
      </div>
    </div>
  );
};
