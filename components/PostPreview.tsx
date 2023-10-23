import { PostMetadata } from "./PostMetadata";

const PostPreview = (props:PostMetadata) => {
    return (
        <div className="border border-slate-300 p-4 rounded-md shadow-md">
            <p className="text-sm text-slate-400">{props.date}</p>
            <a href={`/post/${props.slug}`}>
                <h2 className="font-bold text-violet-600 hover:underline mb-4">
                    {props.title}
                </h2>
            </a>
            
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;