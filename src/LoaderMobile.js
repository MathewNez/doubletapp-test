const LoaderMobile = ({errMsg}) => {
    return(
        <div className="loader-mobile">
            <div className="loading">
                {errMsg ? errMsg : "Загружаем данные, пожалуйста, подождите..."}
            </div>
        </div>

    );
}

export default LoaderMobile;