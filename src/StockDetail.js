import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StockDetail = () => {
    const { stockid } = useParams();

    const [stockdata, stocktdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/stock/" + stockid).then((res) => {
            return res.json();
        }).then((resp) => {
            stocktdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            <div>
                {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

                <div className="container">

                    <div className="card row" style={{ "textAlign": "left" }}>
                        <div className="card-title">
                            <h2>Stock Create</h2>
                        </div>
                        <div className="card-body"></div>

                        {stockdata &&
                            <div>
                                <h2>The Stock name is: <b>{stockdata.title}</b>  ({stockdata.id})</h2>
                                <h3>Stock Details</h3>
                                <h5>Description is: {stockdata.description}</h5>
                                <h5>The delivery dateis on: {stockdata.deliverydate}</h5>
                                <Link className="btn btn-danger" to="/">Back to Listing</Link>
                            </div>
                        }
                    </div>
                </div>
                {/* </div>
            </div> */}
            </div >
        </div>
    );
}

export default StockDetail;

