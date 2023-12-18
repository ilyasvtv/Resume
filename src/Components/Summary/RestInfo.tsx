import store from "../../store/store";

const RestInfo = () => {
    return (
        <>
            {store.tags.map(tag => {
                return (store as any)[tag].map((el: any, index: number) => {
                    if (!!el.length) {
                        return el.map((el: any, index: number) => {
                            return <div className={index === 0 ? "first" : "rest"} key={index}>
                                <span className="category">{el["name"]} : </span>
                                <span className="value">{el["value"]}</span>
                            </div>
                        })
                    } else {
                        return <div className={index === 0 ? "first" : "rest"} key={index}>
                            <span className="category">{el["name"]} : </span>
                            <span className="value">{el["value"]}</span>
                        </div>
                    }
                })
            })}
        </>
    )
}

export default RestInfo;