export const addpost = (data) => {
    // console.log(data)
    return{
        type: "ADD_POST",
        payload: data
    }
}

export const updatepost = (id) => {
    return{
        type: "UPDATE_POST",
        payload: id
    }
}

export const deletepost = (id) => {
    return{
        type: "DELETE_POST",
        payload: id
    }
}