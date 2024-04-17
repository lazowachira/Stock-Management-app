import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StockListing = () => {
    const [stockdata, stockdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/stock/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/stock/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:5000/stock/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    useEffect(() => {
        fetch('http://localhost:5000/stock').then((res) => {
            return res.json();
        }).then((resp) => {
            stockdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        }
        )
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>StockListing</h2>
                </div>
                <div className="card body">
                    <div className="divbtn">
                        <Link to="stock/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Delivery Date</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {stockdata &&
                                stockdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.deliverydate}</td>
                                        <td>
                                            <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default StockListing;