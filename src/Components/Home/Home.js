import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletepost } from '../../Redux/Action/PostAction';

const Home = () => {

    const dispatch = useDispatch();
    const post = useSelector(state => state)
    // console.log(post.lent)
    const onDeleteHandler = (id) => {
        dispatch(deletepost(id))
    }

    return (

        <div>   
            <h4 className='text-center mt-3 mt-3 text-primary'>Create Your New Post</h4>
            {
                post.map((e) => {
                    return (
                        <div className='container' key={e.id}>
                            <div className="card mt-5">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Author Name : {e.author}</h5>
                                    <p>{e.id}</p>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Title : {e.title}</h5>
                                    <p className="card-text">Body : {e.body}</p>
                                    <Link to={`/updatepost/${e.id}`} className="btn btn-outline-primary btn-sm ">Update</Link> &nbsp;
                                    <button onClick={() => onDeleteHandler(e.id)} className="btn btn-outline-danger btn-sm ">Delete</button>
                                </div>
                            </div>
                        </div>
                    )  
                }) 
            } 
        </div>
    )
}

export default Home
