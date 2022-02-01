import {FC} from "react";
import Heading from "./Heading";
import {TPost} from "../types";

type TPostInfoProps = {
    post: TPost
}

const PostInfo: FC<TPostInfoProps> = ({post}) => {

    const {title, body} = post || {};

    if (!post) {
        return <Heading tag="h3" text="Empty post"/>
    }

    return (
        <>
            <Heading tag="h3" text={title}/>
            <p>{body}</p>
        </>
    );
}

export default PostInfo;