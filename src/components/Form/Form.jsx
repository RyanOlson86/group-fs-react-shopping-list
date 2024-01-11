import { useState } from "react"

const Form = () => {
    const [itemInput, setItemInput] = useState('')

    return (
        <>
            <h2>Add Item</h2>
            <form>
                <label htmlFor="itemInput">Enter Item</label>
                <input
                    required type="text"
                    id="itemInput"
                    placeholder="Add Item"
                    onChange={(evt) => {
                        setItemInput(evt.target.value)
                    }}
                    value={itemInput} />
                <label htmlFor="quantityInput">Enter Quantity</label>
                <input required type="number" id="quantityInput" placeholder="Add Quantity" />
                <label htmlFor="unitInput">Enter Unit</label>
                <input type="text" id="unitInput" placeholder="Enter Unity" />
                <p>Item Input: {itemInput}</p>
                <button>Save</button>
            </form>
        </>
    )
}

export default Form