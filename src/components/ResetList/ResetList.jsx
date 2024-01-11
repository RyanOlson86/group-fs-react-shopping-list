import axios from "axios";
const ResetList = ({getShoppingList}) => {
    const resetItems = (event) => {
        axios
          .delete(`/api/shopping-reset`)
          .then((reponse) => {
            getShoppingList();
          })
          .catch((error) => {
            console.log("Error inside of resetItems", error);
          });
      };
    
    return (
        <button onClick={resetItems}>Reset</button>
    )
  };

  export default ResetList
