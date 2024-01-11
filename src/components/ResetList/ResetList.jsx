import axios from "axios";
const ResetList = ({getShoppingList}) => {
    const resetItems = () => {
        axios
          .delete(`/api/shopping-reset`)
          .then((reponse) => {
            getShoppingList();
          })
          .catch((error) => {
            console.log("Error inside of resetItems", error);
          });
      };
      const confirmReset = () => {
        swal({
          title: 'Are you sure?',
          text: 'Reseting will delete all purchased items permanently.',
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((value) => {
          if (value) {
            resetItems()
          }
        })
      }

    return (
        <button onClick={confirmReset}>Reset</button>
    )
  };

  export default ResetList
