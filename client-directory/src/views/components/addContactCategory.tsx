import { context } from "../../App";
import { FormEvent, useContext, useState } from "react";
import { addCategory } from "../../api/categoryManagingApis";

export const AddContactCategory = () => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const { categoryList, setCategoryList } = useContext(context);

  const submitForm = async (data: FormEvent) => {
    data.preventDefault();
    const newContactCategory = await addCategory(newCategoryName);
    setCategoryList([newContactCategory, ...categoryList!]);
    setNewCategoryName("");
    console.log(newContactCategory);
  };
  return (
    <div>
      <form
        className="space-x-4 p-10 flex items-center justify-center"
        onSubmit={submitForm}
      >
        <img
          className="h-32 w-32 mr-8"
          src="https://cdn-icons-png.flaticon.com/512/3771/3771518.png"
          alt=""
        />
        <div className="flex flex-col space-y-2 ">
          <h1 className="text-secendery-color text-3xl font-serif font-extrabold mb-4">
            Contact Book
          </h1>
          <input
            type="text"
            value={newCategoryName}
            onChange={(text) => setNewCategoryName(text.target.value)}
            placeholder="New Category Name"
            className="p-3 w-96 outline-none rounded-lg focus:outline-secendery-color"
          />
          <button className="bg-accent-color rounded-md p-2 border-2">
            Create New Category
          </button>
        </div>
      </form>
    </div>
  );
};
