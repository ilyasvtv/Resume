import store from "../../store/store";

const Photo = () => {
    return (
        <div className="photo-block">
            <span className="category">Photo : </span>
            {store.photo[0]["value"].length > 0 && <img width={100} height={100} src={store.photo[0]["value"]} alt="#" />}
        </div>
    )
}

export default Photo;