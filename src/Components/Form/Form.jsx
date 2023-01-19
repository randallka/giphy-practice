import {useState} from 'react'

export default function Form({submit}) {

    
    function handleSubmit(e) { 
        e.preventDefault()
        submit()
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input></input>
            <button type="submit" > New Gif </button>
        </form>
    )
}