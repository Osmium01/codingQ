import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useDispatchCart, useCart } from './ContextRuducer';
import "../components/ContextRuducer"


export default function Card(props) {
    let options = props.options;
    let priceOptions = Object.keys(options)
    let dispatch = useDispatchCart();
    let data=useCart();
    const priceRef=useRef();

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const handleaddtocart = async () => {

        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: props.finalPrice, qty: qty, size: size })
        await console.log(data);
    }
    let finalPrice=qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)

    },[])

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.foodItem.img} id="card" className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }}></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        {/* <p className="card-text">Some thing we lear about c++.</p> */}
                        <div className='container w-100'>
                            <select className='m-2 h-100  bttth' onChange={(e) => setQty(e.target.value)}>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (<option key={i + 1} value={i + 1} >{i + 1}</option>
                                        )

                                    })
                                }
                            </select>
                            <select className='m-2 h-100  bttth'  ref = {priceRef}onChange={(e) => setSize(e.target.value)}>
                                {
                                    priceOptions.map((data) => {
                                        return <option key={data} value={data}>{data}</option>
                                    })
                                }
                            </select>
                            <div className='d-inline h-100'><b>₹</b>{finalPrice}</div>
                        </div>
                        <hr>

                        </hr>
                        <div className='btn  justify-center ms-2 bg-secondary ' onClick={handleaddtocart}>Add to Cart</div>

                    </div>
                </div>
            </div>



        </div>
    )
}
