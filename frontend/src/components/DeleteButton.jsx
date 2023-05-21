import React from "react";
import { useDispatch } from "react-redux";

const DeleteButton = ({id, action}) => {
    const dispatch = useDispatch();

    const handleDelete = async(e) => {
        e.preventDefault();
       let res =  await dispatch(action(id));
       if(res) window.location.reload();
    }
  return <button onClick={handleDelete} className="btn btn-primary">Yes</button>;
};

export default DeleteButton;
