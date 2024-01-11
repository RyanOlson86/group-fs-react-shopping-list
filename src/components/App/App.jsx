import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios'
import Form from '../Form/Form.jsx';


function App() {
    const [shoppingList, setShoppingList] = useState([])
        
    //this GET request is pulling from the db
    const getShoppingList = () => {
        axios({
            method: 'GET',
            url: ''
        })
        .then( (response) => {
            console.log('Inside of GET', response);
            console.log('Data check', response.data);
            setShoppingList(response.data)
        })
        .catch( function(error) {
            console.log('Error on get:', error);
        })
    }
    useEffect(() => {
        getShoppingList();
    }, [])

    return (
        <div className="App">
            <Header />
            <main>
                {/* <h2>Add Item</h2>
                <button>Save</button> */}
                <Form getShoppingList={getShoppingList}/>
                <h2>Shopping List</h2>
                <button>Reset</button>
                <button>Clear</button>
                <div className='item'>
                    <h3>Apples</h3>
                    <p>1 Bushel</p>
                    <div className='itemButton'>
                    <button>Buy</button>
                    <button>Delete</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App;
