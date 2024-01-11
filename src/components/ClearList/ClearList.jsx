import axios from "axios";
const ClearList = ({getShoppingList}) => {
    const clearItems = (event) => {
        axios
          .delete(`/api/shopping-clear`)
          .then((reponse) => {
            getShoppingList();
          })
          .catch((error) => {
            console.log("Error inside of clearItems", error);
          });
      };
    
    return (
        <button onClick={clearItems}>Clear</button>
    )
  };

  export default ClearList