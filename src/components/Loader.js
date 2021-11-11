const Loader = ({errMsg}) => {
    return(
        <div className="container2">
            <div className="loading">
                {errMsg ? errMsg : "Загружаем данные, пожалуйста, подождите..."}
            </div>
        </div>

    );
}

export default Loader;