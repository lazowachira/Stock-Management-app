import { Link, useNavigate, } from "react-router-dom";
import { useState } from "react";

const StockCreate = () => {

    const [id, idchange] = useState("");
    const [title, titlechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [deliverydate, deliverydatechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const Navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const stockdata = { title, description, deliverydate, active };

        fetch("http://localhost:5000/stock", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(stockdata)
        }).then((res) => {
            alert('Saved successfully.')
            Navigate('');

        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Stock Create</h2>

                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input required value={title} onMouseDown={e => valchange(true)} onChange={e => titlechange(e.target.value)} className="form-control"></input>{title.length == 0 && validation && <span className="text-danger">Enter the Title</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input value={description} onChange={e => descriptionchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Delivery Date</label>
                                            <input required value={deliverydate} onChange={e => deliverydatechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input><label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StockCreate;