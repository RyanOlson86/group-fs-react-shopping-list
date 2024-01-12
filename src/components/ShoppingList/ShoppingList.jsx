import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './ShoppingList.css'

const ShoppingList = ({getShoppingList, shoppingList}) => {
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
          <button className="buy" id={id} onClick={isBought}>
          <FontAwesomeIcon className="cart" icon={faCartShopping} />
          </button>
          <button className="delete" id={id} onClick={deleteItem}>
          <FontAwesomeIcon className="trash" icon={faTrash} />
          </button>
        </div>
      );
    }
  };
  return (
    <>
      <div className="spreadList">
        {shoppingList.map((element) => (
          <div key={element.id} className="item">
            <h3>{element.item}</h3>
            <p>
              {element.quantity} {element.unit}
            </p>
            <ChangeToPurchased id={element.id} bought={element.bought} />
          </div>
        ))}
      </div>
    </>
  );
};
export default ShoppingList;
