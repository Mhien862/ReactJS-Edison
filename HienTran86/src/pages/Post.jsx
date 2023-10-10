import { Outlet } from "react-router-dom";

const Post = () => {
    return (
    <div>
        <nav>link1</nav>
        <nav>link2</nav>
        <Outlet/>
    </div>
);};

export default Post;