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
