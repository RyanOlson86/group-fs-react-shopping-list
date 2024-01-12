import { useState } from "react"
import axios from "axios"
import InputField from "../InputField/InputField"
import { library, findIconDefinition, icon } from "@fortawesome/fontawesome-svg-core"
// import { fas } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

// library.add(fas)
// const glasses = findIconDefinition({ prefix: 'fas', iconName: 'glasses' })
// const i = icon(glasses)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
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
            alert('Item and quantity inputs are required.')
        })

    }
    return (
        <div className="Form">
            <h2>Add Item</h2>
            <FontAwesomeIcon icon={faTrash} />
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
                <p style={{fontSize: ".85em"}}><span style={{color: "red"}}>*</span> indicates a required field</p>
                <button>🥦 Add to Shopping List 🍏</button>
            </form>
        </div>
    )
}

export default Form