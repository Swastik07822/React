import { useDataContext } from "../globalContext";

const Blogs = () => {
    const { data, isLoading, isLogin, removeBlog } = useDataContext();

    if (isLoading) {
        return <div>
            <h1>LOADING........</h1>
        </div>
    }

    // console.log(isLogin);
    if (isLogin === false) {
        return <div>
            <h1>Try Logging in first</h1>
        </div>
    }

    return <div className="container">
        <div class="blogs">
            <h2>
                These are blogs.
            </h2>
            {data.map((singleData) => {
                const { title, subTitle, blog, _id } = singleData;
                // console.log(singleData);

                return (
                    // error - Each child in a list should have a unique "key" prop.
                    <div className="boxContainer" key={_id}>
                        <h2>{title}</h2>
                        <h3>{subTitle}</h3>
                        <p>{blog}</p>
                        <div className="removeButton">
                            <button onClick={() => removeBlog(_id)}> Remove</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div >
}

export default Blogs;