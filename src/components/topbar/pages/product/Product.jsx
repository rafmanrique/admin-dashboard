import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../../../../dummyData';
import Charts from '../../charts/Charts';
import "./product.css"

const Product = () => {
  return (
    <div className='product'>
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Charts data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
              <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">987</span>
              </div>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">9987</span>
              </div>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder='Apple Airpods'/>
                <label>In Stock</label>
                <select name="inStock" id="inStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>                  
                </select>
                <label>Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>                  
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                </div>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Product