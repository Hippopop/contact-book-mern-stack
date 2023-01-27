import React from "react";
import { BiUserPin } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {
  contactCategory: TContactCategory;
};

export const SingleContactCategory = ({ contactCategory }: Props) => {
  return (
    <div className="">
      <Link to={`/contact/${contactCategory._id}`}>
        <div className="hover:shadow-md hover:shadow-white flex m-2 border-third-color bg-primary-color border-2 rounded-lg p-4 justify-between">
          <div className="flex flex-col justify-between">
            <BiUserPin size={32} className="text-bg-color" />
            <h1 className="text-secendery-color font-bold text-2xl">
              {contactCategory.category}
            </h1>
          </div>
          <div className="align-middle flex flex-col justify-between">
            <h1 className="font-mono font-semibold text-third-color text-lg">
              Person : {contactCategory.contacts.length}
            </h1>
            <button className="bg-white bg-opacity-75 text-third-color rounded-lg mt-2 font-bold py-1">
              Delete
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
