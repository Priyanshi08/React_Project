import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Edit_user() {
  const redirect = useNavigate();
  useEffect(() => {
    editdata();
  }, []);

  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const { id } = useParams();
  const [editid, setid] = useState("");
  const editdata = async () => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    // console.log(res.data);
    setFormvalue(res.data);
  };

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  function validation() {
    var result = true;
    if (formvalue.name == "") {
      toast.error("Name Field is required !");
      result = false;
    }
    if (formvalue.email == "") {
      toast.error("Email Field is required !");
      result = false;
    }
    if (formvalue.password == "") {
      toast.error("Password Field is required !");
      result = false;
    }
    if (formvalue.mobile == "") {
      toast.error("Mobile Field is required !");
      result = false;
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(`
            http://localhost:3000/user/${id},
            formvalue`);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          password: "",
          mobile: "",
        });
        toast.success("Update Success !");
        return redirect("/manage_user");
      }
    }
  };
  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line">Edit User</h1>
          </div>
        </div>
        {/* /. ROW  */}
        <div className="row">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-primary">
                <div className="panel-heading">Edit User</div>
                <div className="panel-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={onchange}
                      value={formvalue.name}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={onchange}
                      value={formvalue.email}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={onchange}
                      value={formvalue.password}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Mobile</label>
                    <input
                      type="mobile"
                      name="mobile"
                      onChange={onchange}
                      value={formvalue.mobile}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <button
                      type="button"
                      onClick={onsubmit}
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. PAGE INNER  */}
      </div>
      {/* /. PAGE WRAPPER  */}
    </div>
  );
}

export default Edit_user;
