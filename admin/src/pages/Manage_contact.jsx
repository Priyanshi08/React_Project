import {toast} from 'react-toastify'
import React, { useState, useEffect } from "react";

import axios from "axios";


function Manage_contact() {
    useEffect(() => {
        fetch();
      }, []);
    
      const [data, setData] = useState([]);
    
      const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/contact`);
        console.log(res.data);
        setData(res.data);
      };
    
      const onDelete= async(id)=>{
        const res = await axios.delete(`http://localhost:3000/contact/${id}`);
        console.log(res.data);
        if(res.status=="200"){
            fetch();
            toast.success('Delete Successfull!!');
        }
      };
    
  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line">Manage Contact</h1>
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
              <div class="panel-heading">Manage Contact</div>
              <div class="panel-body">
                <div class="table-responsive">
                  <table class="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((value, index, entarr) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.sub}</td>
                            <td>{value.msg}</td>
                            <td>
                              <button className="btn btn-danger" onClick={()=>onDelete(value.id)}>Delete</button>
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


  )
}

export default Manage_contact