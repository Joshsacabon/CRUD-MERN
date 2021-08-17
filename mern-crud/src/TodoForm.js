import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory} from "react-router-dom";

export const TodoForm = ({todo, onSubmit}) => {

    const {register, handleSubmit,} = useForm();

    const history = useHistory();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
        history.push("/");
    });


    return (
        <form onSubmit={submitHandler}> 
            <div className="form-group">
                <label htmlFor="text">Text:</label>
                <input className="form-control" {...register("test")} id="text" type="text"/>
            </div>
            <div className="form-group">
                <button  type="submit" className="btn btn-primary ">
                    Save Todo
                </button>
            </div>
        </form>
)}