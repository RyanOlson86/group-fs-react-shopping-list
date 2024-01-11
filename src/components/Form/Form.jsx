import { useState } from "react"
import axios from "axios"
import InputField from "../InputField/InputField"
import './Form.css'

const Form = ({ getShoppingList }) => {
    const [itemInput, setItemInput] = useState('')
    const [quantityInput, setQuantityInput] = useState('')
    const [unitInput, setUnitInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submit', unitInput);

        axios.post('/api/shopping', {
            item: itemInput,
            quantity: quantityInput,
            unit: unitInput
        }).then((response) => {
            console.log('successfully POSTed');
            setItemInput('')
            setQuantityInput('')
            setUnitInput('')
            getShoppingList()
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <div className="Form">
            <h2>Add Item</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
                <InputField
                    name="Item"
                    id="itemInput"
                    type="text"
                    required={true}
                    setFn={setItemInput}
                    input={itemInput}
                />
                <InputField 
                    name="Quantity"
                    id="quantityInput"
                    type="number"
                    required={true}
                    setFn={setQuantityInput}
                    input={quantityInput}
                />
                <InputField 
                    name="Unit"
                    id="unitInput"
                    type="text"
                    setFn={setUnitInput}
                    input={unitInput}
                />
                <button>🥦 Add to Shopping List 🍏</button>
            </form>
        </div>
    )
}

export default Form