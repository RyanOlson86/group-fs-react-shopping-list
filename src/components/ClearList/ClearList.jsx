import axios from "axios";
import swal from "sweetalert"

const ClearList = ({getShoppingList}) => {
    const clearItems = () => {
        axios
          .delete(`/api/shopping-clear`)
          .then((reponse) => {
            getShoppingList();
          })
          .catch((error) => {
            console.log("Error inside of clearItems", error);
          });
      };

      const confirmClear = () => {
        swal({
          title: 'Are you sure?',
          text: 'Clearing will delete all items permanently.',
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((value) => {
          if (value) {
            clearItems()
          }
        })
      }
    
    return (
        <button onClick={confirmClear}>Clear</button>
    )
  };

  export default ClearList