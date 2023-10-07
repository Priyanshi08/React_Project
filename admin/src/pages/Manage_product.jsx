import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Manage_product() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/product`);
    console.log(res.data);
    setData(res.data);
  };

  const onDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/product/${id}`);
    console.log(res.data);
    if (res.status == "200") {
      fetch();
      toast.success("Delete Successfull!!");
    }
  };

  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">Manage categery</h1>
              <h1 className="page-subhead-line">
                This is dummy text , you can replace it with your original text.{" "}
              </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12">
              {/*   Kitchen Sink */}
              <div className="panel panel-default">
                <div className="panel-heading">Manage categery</div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Password</th>
                          <th>Mobile</th>
                          <th>Countries</th>
                          <th>Gender</th>
                          <th>Created_at</th>
                          <th>Updated_at</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((value, index, entarr) => {
                          return (
                            <tr>
                              <td>{value.id}</td>
                              <td>{value.cate_name}</td>
                              <td>{value.title}</td>
                              <td>{value.main_price}</td>
                              <td>{value.disc_price}</td>
                              <td>{value.desc}</td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => onDelete(value.id)}
                                >
                                  Delete
                                </button>
                                <button className="btn btn-primary">
                                  Edit
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* End  Kitchen Sink */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_product;
