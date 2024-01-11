import { useState } from "react"

const Form = () => {
    const [itemInput, setItemInput] = useState('')
    const [quantityInput, setQuantityInput] = useState('')
    const [unitInput, setUnityInput] = useState('')

    return (
        <>
            <h2>Add Item</h2>
            <form>
                <label htmlFor="itemInput">Enter Item</label>
                <input
                    required
                    type="text"
                    id="itemInput"
                    placeholder="Add Item"
                    onChange={(event) => {
                        setItemInput(event.target.value)
                    }}
                    value={itemInput} />
                <label htmlFor="quantityInput">Enter Quantity</label>
                <input
                    required
                    type="number"
                    id="quantityInput"
                    placeholder="Add Quantity"
                    onChange={(event) => setQuantityInput(event.target.value)}
                    value={quantityInput} />
                <label htmlFor="unitInput">Enter Unit</label>
                <input
                    type="text"
                    id="unitInput"
                    placeholder="Enter Unity"
                    onChange={(event) => setUnityInput(event.target.value)}
                    value={unitInput} />
                <p>Item Input: {itemInput}</p>
                <p>Quantity Input: {quantityInput}</p>
                <p>Unit Input: {unitInput}</p>
                <button>Save</button>
            </form>
        </>
    )
}

export default Form