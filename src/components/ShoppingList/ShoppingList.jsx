import axios from "axios";
import { useState } from "react";
const ShoppingList = ({ getShoppingList, shoppingList }) => {
  const deleteItem = (event) => {
    console.log("Inside of delete function", event.target.id);
    axios
      .delete(`/api/shopping/${event.target.id}`)
      .then((reponse) => {
        getShoppingList();
      })
      .catch((error) => {
        console.log("Error inside of deleteItem", error);
      });
  };

  const isBought = (event) => {
    console.log("Inside of isBought function", event.target.id);
    axios
      .put(`/api/shopping/${event.target.id}`)
      .then((reponse) => {
        getShoppingList();
      })
      .catch((error) => {
        console.log("Error inside of isBought", error);
      });
  };
  const ChangeToPurchased = ({ bought, id }) => {
    console.log("Inside of changeToPurchased", bought);
    if (bought == true) {
      return <p>PURCHASED!!!</p>;
    } else {
      return (
        <div className="itemButton">
          <button id={id} onClick={isBought}>
            Buy
          </button>
          <button id={id} onClick={deleteItem}>
            Delete
          </button>
        </div>
      );
    }
  };

  

  const handleUpdate = ({id}) => {
    event.preventDefault()
    console.log(event.target)
  }

  const HandleEdit = ({id, item, quantity, unit, bought}) => {
    const [updatedItem, setUpdatedItem] = useState(item);
    const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
    const [updatedUnit, setUpdatedUnit] = useState(unit);
    const [editState, setEditState] = useState(false);

    const editItem = (event) => {
      console.log("in editItem", editState);
      setEditState(true);
    };

    if (editState === false) {
      return (
        <>
          <button id={id} onClick={editItem}>
            Edit
          </button>
          <h3>{item}</h3>
          <p>
            {quantity} {unit}
          </p>
          <ChangeToPurchased id={id} bought={bought} />
        </>
      );
    } else {
      return (
        <form id={id} onSubmit={handleUpdate}>
          <input onChange={(event) => {
            event.preventDefault();
            setUpdatedItem(event.target.value)}} value={updatedItem} />
          {/* <input onChange={(event) => setUpdatedQuantity(event.target.value)} value={updatedQuantity} />
          <input onChange={(event) => setUpdatedUnit(event.target.value)} value={updatedUnit} /> */}
          <button type="submit">Update</button>
        </form>
      );
    }
  };

  const ListItem = ({ id, item, quantity, unit, bought }) => {
    
    

    // const editItem = (event) => {
    //   console.log("in editItem", editState);
    //   setEditState(true);
    // };

    return (
      <div key={id} className="item">
        <HandleEdit 
          id={id}
          item={item}
          quantity={quantity}
          unit={unit}
          bought={bought}
        />
      </div>
    );
  };

  return (
    <>
      <div className="spreadList">
        {shoppingList.map((element) => (
          <ListItem
            id={element.id}
            item={element.item}
            quantity={element.quantity}
            unit={element.unit}
            bought={element.bought}
            key={element.id}
          />
        ))}
      </div>
    </>
  );
};
export default ShoppingList;
