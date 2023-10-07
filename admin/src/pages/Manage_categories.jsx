import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Manage_categories() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  };

  const onDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/categories/${id}`);
    console.log(res.data);
    if (res.status == "200") {
      fetch();
      toast.success("Delete Successfull!!");
    }
  };

  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line">Manage Categories</h1>
            <h1 className="page-subhead-line">
              This is dummy text , you can replace it with your original text.
            </h1>
          </div>
        </div>
        {/* /. ROW  */}
        <div class="row">
          <div class="col-md-12">
            {/*   Kitchen Sink */}

            <div class="panel panel-default">
              <div class="panel-heading">Manage Categories</div>
              <div class="panel-body">
                <div class="table-responsive">
                  <table class="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#ID</th>
                        <th>Categories Name</th>
                        <th>Categories Description</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((value, index, entarr) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.cate_name}</td>
                            <td>{value.cate_desc}</td>
                            <td>
                              <img src={value.cate_img} width={80}></img>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => onDelete(value.id)}
                              >
                                Delete
                              </button>
                              <button className="btn btn-primary">Edit</button>
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
      {/*PAGE INNER */}
    </div>
  );
}

export default Manage_categories;
