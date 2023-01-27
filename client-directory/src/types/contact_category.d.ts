type TContactCategory = {
    _id: string;
    category: string;
    contacts: TContact[];
}

type TContact = {
    name: string;
    description: string;
    number: string;
}