import { FC } from 'react';
import Heading from './Heading'
import { postsType } from '../types';

type postProps = {
    post: postsType
}

const PostInfo: FC<postProps> = ({ post }) => {
    const { id, title, body } = post || {};
    if (!post)
        return <Heading tag="h3" text="Empty post" />

    return (
        <>
            <Heading tag="h3" text={title} />
            <div><strong>Id: </strong> {id}</div>
            <div><strong>Title: </strong> {title}</div>
            <div><strong>Body: </strong> {body}</div>
        </>
    )
}
export default PostInfo;