import React from "react";

function Add_categories() {
  return (
    <div id="page-wrapper">
      <div id="page-inner">
        {/* /. ROW  */}
        <div className="row">
          <div className="panel-body">
            <div className="form-group">
              <label>ADD CATEGERY</label>
              <select className="form-control">
                <option>Others</option>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
          </div>


          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="panel panel-info">
                <div className="panel-heading">BASIC FORM</div>
                <div className="panel-body">
                  <form role="form">
                    <div className="form-group">
                      <label>Enter Name</label>
                      <input className="form-control" type="text" />
                      <p className="help-block">Help text here.</p>
                    </div>
                    <div className="form-group">
                      <label>Enter Email</label>
                      <input className="form-control" type="text" />
                      <p className="help-block">Help text here.</p>
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue=""
                      />
                    </div>
                    <button type="submit" className="btn btn-info">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_categories;
