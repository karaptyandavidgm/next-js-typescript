
import { FC } from 'react';
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Link from 'next/link';
import Heading from '../../components/Heading'
import { postsType } from '../../types';

type postsProps = {
    posts: [postsType]
}


export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = (await response.json()).slice(0, 15);


    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            posts: data
        }
    }

}

const Posts: FC<postsProps> = ({ posts }) => {
    console.log(posts, 'sssssssssssssssssss');

    return (
        <>
            <Head>
                <title>Posts list</title>
            </Head>
            <Heading text="Posts list:" />
            <ul>
                {posts && posts.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>

                ))}
            </ul>

        </>

    );
}
export default Posts;