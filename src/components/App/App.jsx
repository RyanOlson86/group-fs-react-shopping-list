import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Form from '../Form/Form.jsx';


function App() {
    const [shoppingList, setShoppingList] = useState([])
        
    //this GET request is pulling from the db
    const getShoppingList = () => {
        axios({
            method: 'GET',
            url: '/api/shopping'
        })
        .then( (response) => {
            console.log('Inside of GET', response);
            // console.log('Data check', response.data);
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
                <Form getShoppingList={getShoppingList}/>
                <h2>Shopping List</h2>
                <button>Reset</button>
                <button>Clear</button>
                <ShoppingList 
                    getShoppingList = {getShoppingList}
                    shoppingList = {shoppingList}
                />
            </main>
        </div>
    )
}

export default App;
