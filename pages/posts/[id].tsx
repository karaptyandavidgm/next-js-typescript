import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { postsType } from '../../types';
import PostInfo from '../../components/PostInfo'


type postProps = {
    post: postsType
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            post: data
        }
    }


}
const Post: FC<postProps> = ({ post }) => {

    return (
        <>
            <Head>
                <title> Post page</title>
            </Head>
            <PostInfo post={post} />
        </>
    );
}
export default Post;
