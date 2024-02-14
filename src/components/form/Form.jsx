import React, { useState } from 'react';

export default function Form(props) {
    const [formData, setFormData] = useState({ searchTerm: "" })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onWeatherSearch(formData.searchTerm)

        setFormData({
            ...formData,
            searchTerm: "",
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type='text'
                    name='searchTerm'
                    onChange={handleChange}
                    value={formData.searchTerm}
                    placeholder='Enter location'
                    style={{
                        borderRadius: '10px',
                        border: 'white',
                        padding: '5px',
                        outline: 'none',
                        width: '150px',
                        marginRight: '20px',
                        marginLeft: '-15px',
                    }}
                />
                <button style={{ background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer'}}>
                    <img src="src\assets\search.png" alt='Weather' width="25px" ></img>
                </button>
            </form>
        </div>
    )
}
