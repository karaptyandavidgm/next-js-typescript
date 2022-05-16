import { FC } from 'react';
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from 'next/head'
import { usersType } from '../../types'
type usersProps = {
    users: [usersType]
};


export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            users: data
        }
    }
}
const Users: FC<usersProps> = ({ users }) => {
    return (
        <>
            <Head>
                <title> Users data</title>
            </Head>
            <ul>
                {users && users.map(({ id, name }) => (
                    <li key={id}>
                        <Link href={`/users/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );

}

export default Users;