import React, { useEffect, useState } from "react";
import { getContactCategory } from "../../api/contactManagingApis";
import { useParams } from "react-router-dom";

export default function ContactPage() {
  const { contactId } = useParams<string>();
  const [contact, setcontact] = useState<TContactCategory>();
  const [contactName, setName] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");

  useEffect(() => {
    const getAllContactsFromCategory = async () => {
      const contact = await getContactCategory(contactId ?? "");
      setcontact(contact);
    };
    getAllContactsFromCategory();
  }, []);

  return (
    <div className="h-screen bg-bg-color p-10 flex-col ">
      <div className="flex justify-center">
        <h1 className="font-serif font-bold text-primary-color text-3xl mb-4 drop-shadow-2xl shadow-white">
          {contact?.category}
        </h1>
      </div>
      <div className="flex items-center bg-secendery-color px-5 mx-auto max-w-4xl py-3 rounded-2xl">
        <div className="basis-10/12 w-full">
          <input
            type="text"
            value={contactName}
            onChange={(text) => setName(text.target.value)}
            placeholder="Contact Name"
            className="p-3 w-full outline-none rounded-lg focus:outline-secendery-color mr-2 mb-1"
          />
          <br />
          <input
            type="text"
            value={contactPhone}
            onChange={(text) => setContactPhone(text.target.value)}
            placeholder="Phone Number "
            className="p-3 w-full outline-none rounded-lg focus:outline-secendery-color mr-2 mt-1"
          />
        </div>
        <div className="w-4"></div>
        <button className="bg-cyan-600 text-white basis-2/12 rounded-md h-max border-2 my-0 p-1 font-semibold w-full ">
          Create New Contact
        </button>
      </div>
    </div>
  );
}
