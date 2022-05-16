
export type addressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
};

export type usersType = {
    id: string,
    name: string,
    email: string,
    address: addressType,
    phone: string
};

export type postsType = {
    id: number,
    title: string,
    body: string
};