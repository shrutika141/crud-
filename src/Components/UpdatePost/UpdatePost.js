import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { updatepost } from '../../Redux/Action/PostAction';

const UpdatePost = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')

    const Post = useSelector(state => state);
    const currentPost = Post.find(e => e.id === id)

    useEffect(() => {
        if(currentPost){
            setTitle(currentPost.title)
            setBody(currentPost.body)
            setAuthor(currentPost.author)
        }
    }, [currentPost])

    const onTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const onBodyHandler = (e) => {
        setBody(e.target.value)
    }

    const onAuthorHandler = (e) => {
        setAuthor(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = { id, title, body, author }
        // console.log(data)
        dispatch(updatepost(data))
        Navigate('/')
    };

    return (
        <div className='container p-5'>
            {
                currentPost ? (
                    <div>
                        <h4 className='text-primary'>Update Post !</h4>
                        <br />
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label>Blog Title : </label>
                                <input type="text" value={title} onChange={onTitleHandler} name='title' className="form-control" placeholder='Blog Title' />
                            </div>
                            <div className="form-group">
                                <label>Blog Body :</label> <br />
                                <textarea className='p-2' value={body} onChange={onBodyHandler} name='body' placeholder='Blog Body' style={{resize: "none", width: "100%"}}/>
                            </div>
                            <div className="form-group">
                                <label>Blog Author : </label>
                                <input type="text" value={author} onChange={onAuthorHandler} name='author' className="form-control" placeholder='Blog Author' />
                            </div>
                            <button type="submit" className="btn btn-outline-success btn-sm">Update</button> &nbsp;
                            <Link to="/" className="btn btn-outline-danger btn-sm ">Cancle</Link>
                        </form> 
                    </div>
                )  : (
                    <h5 className='text-danger'>This post id {id} is not available !</h5>
                )
            }
            
        </div>
    )
}

export default UpdatePost
