import trashcan from "./trashcan.png";

const DeleteButton = () => {
    return(
        <button className="delete"><img src={trashcan} alt={trashcan}/></button>
    );
}

export default DeleteButton;