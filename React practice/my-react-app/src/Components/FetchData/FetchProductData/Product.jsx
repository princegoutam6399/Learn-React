import React from 'react'
import data from './Products.json'

const Product = () => {
    return (
        <div>
            <div className="head-text bg-danger-subtle p-3 text-center">
                <h2>Products Details</h2>
            </div>
            <div className="data">
                {
                    data.map((data, index) => {
                        return (
                            <div className="output-data bg-success-subtle m-3 card" key={index}>
                                <div className="cards">
                                    <h3>{data.product_id}</h3>
                                    <h4>{data.product_name}</h4>
                                    <h4>{data.price}</h4>
                                    <h4>{data.quantity}</h4>
                                    <h4>{data.category}</h4>
                                    <h4>{data.brand}</h4>
                                    <h4>{data.color}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product