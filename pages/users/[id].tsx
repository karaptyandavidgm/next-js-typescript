import { FC } from 'react';
import { GetServerSideProps } from "next";
import Head from 'next/head';
import { usersType } from '../../types'
import UserInfo from '../../components/UserInfo';


type userProps = {
    user: usersType
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            user: data
        }
    }
};

const User: FC<userProps> = ({ user }) => {
    return (
        <>
            <Head>
                <title> User page</title>
            </Head>
            <UserInfo user={user} />
        </>
    );
}
export default User;
