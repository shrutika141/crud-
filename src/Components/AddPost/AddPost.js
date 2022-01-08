import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addpost } from '../../Redux/Action/PostAction';

import { v4 as uuidv4 } from 'uuid';

const AddPost = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const id = uuidv4();

    const dispatch = useDispatch();
    const Navigate = useNavigate();

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
        dispatch(addpost(data))
        Navigate('/')
    };

    return (
        <div className='container p-5'>
            <h4 className='text-primary'>Add Post !</h4>
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
                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </form>
        </div>
    )
}

export default AddPost
