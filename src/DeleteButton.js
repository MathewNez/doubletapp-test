import trashcan from "./trashcan.png";

const DeleteButton = () => {

    const handleClick = () => {
      console.log("delete button was clicked");
    }

    return(
        <button className="delete" onClick={handleClick}><img src={trashcan} alt={trashcan}/></button>
    );
}

export default DeleteButton;