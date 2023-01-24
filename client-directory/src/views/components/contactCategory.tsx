import React from "react";

export const ContactCategory = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <form className="space-x-4 p-10 flex items-center">
        <img
          className="h-32 w-32 mr-8"
          src="https://img.icons8.com/avantgarde/2x/new-contact.png"
          alt=""
        />
        <div className="flex flex-col">
          <h1>Contact Book</h1>
          <input
            type="text"
            placeholder="New Category Name"
            className="p-3 outline-none rounded-lg focus:outline-orange-500"
          />
          <button>Create New Category</button>
        </div>
      </form>
    </div>
  );
};
