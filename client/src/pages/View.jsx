import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import "./View.css"

const View = () => {

    const [user, setUser] = useState({})

    const { id } = useParams()
    useEffect(() => {
        if (id) {
            getSingleUser(id)
        }
    }, [id])


    const getSingleUser = async () => {
        const response = await axios.get(`http://localhost:5000/user/${id}`);

        if (response.status === 200) {
            setUser({ ...response.data[0] })
        }
    }
    return (
        <div style={{ marginTop: "150px" }}>
            <div className="card">
                <div className="card-header">
                    <p>User contact detail</p>
                </div>
                <div className="container">
                    <strong>ID :{user.id}</strong><br /><br />
                    <strong>Name :{user.name}</strong><br /><br />
                    <strong>Email :{user.email}</strong><br /><br />
                    <strong>Contact :{user.contact}</strong><br /><br />

                    <Link to="/">
                        <button className='btn btn-edit'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default View
