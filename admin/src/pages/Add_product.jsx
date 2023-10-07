import React from "react";

function Add_product() {
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          {/* /. ROW  */}
          <div className="row">
            <div className="panel-body">
              <div className="form-group">
                <label>ADD PRODUCT</label>
                <select className="form-control">
                  <option>Others</option>
                  <option>Shirt</option>
                  <option>T-shirt</option>
                  <option>Jecket</option>
                </select>
              </div>
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>CATEGORY NAME</label>
                <select className="form-control">
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                  <option>others</option>
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
                        <label>Product Name</label>
                        <input className="form-control" type="text" />
                        <p className="help-block"></p>
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <label>Main price</label>
                        <input className="form-control" type="text" />
                        <p className="help-block"></p>
                      </div>
                      <div className="form-group">
                        <label>Desc price</label>
                        <input className="form-control" type="text" />
                        <p className="help-block"></p>
                      </div>
                      <div className="form-group">
                        <label>Product image</label>
                        <input className="form-control" type="text" />

                        <img src="" alt="" />
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
    </div>
  );
}

export default Add_product;
