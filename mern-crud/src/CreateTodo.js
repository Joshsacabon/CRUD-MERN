import React from 'react'
import { useForm } from "react-hook-form"

export const CreateTodo = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
    });

    return <div className="container">
        <div className="mt-3">
            <h3> Create Todo Item</h3>
            <form onSubmit={ onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Text:</label>
                    <input className="form-control" ref={register(" sdasdadasfa",)} type="text" name="text" id="text"></input>
                </div>
                <div className="form-group">
                    <button  type="submit" className="btn btn-primary ">
                        CreateTodo
                    </button>
                </div>
            </form>
        </div>
    </div>
}