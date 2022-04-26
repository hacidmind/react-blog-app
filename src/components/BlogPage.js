
import { useNavigate, useParams } from 'react-router-dom';
import useCustomHook from '../useCustomHook';

const Blogpage = () => {
    const { id } = useParams();
    // const { data: vehicle, isLoading, isError } = useCustomHook(`http://localhost:8000/blogs/${id}`);
    const { data: vehicle, isLoading, isError } = useCustomHook(`https://my-json-server.typicode.com/hacidmind/cardb/blogs/${id}`);

    const navigate = useNavigate()
    const handleDelete = () => {
        // fetch(`http://localhost:8000/blogs/${id}`,
        fetch(`https://my-json-server.typicode.com/hacidmind/cardb/blogs/${id}`,
            {
            method: "DELETE"
            }).then(() => {
            navigate('/blog')
        })
    }
    return (
        <div className="blog-details">
            {
                isLoading ? <div>Loading...</div> : ''
            }
            {
                isError && <div>Error Fetching Data</div>
            }
            {
                vehicle && (
                    <div>
                        <h1>{vehicle.title} </h1>
                        <p>Founded by: {vehicle.founder}</p>
                        <p>{vehicle.body}</p>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )
            }


        </div>
    );
}

export default Blogpage;
