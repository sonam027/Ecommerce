import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Rating from "./Rating";


const ProductDetails = () => {



    const { productId } = useParams();
    const [data, setData] = useState([])




    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`).then((resp) => setData(resp.data))
            .catch((err) => {
                console.log("Err: ", err);
            });
    };



   
   
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);

    }, [productId]);




    return ( 
        
    
        <div className="col-md-6 card single-product" style={{ marginLeft: '20px', marginBottom: '20px',paddingBottom:'20px' ,border:'2px solid #84b0f2',borderRadius:'15px'}} key={data.id}>
            <div className="product-content">
                <div className="row">
                    <div className="col-md-5">
                        <div className="product-image" >
                        <TransformWrapper
                        defaultScale={1}
                        defaultPositionX={100}
                        defaultPositionY={100}
                         >
                        <TransformComponent>
                        <img width="200px" height="250px"  src={data.image} alt={data.title} className="mt-4"/>
                        </TransformComponent>
                        </TransformWrapper>
                        </div>
                    </div>
                    <div className="col-md-7 ">
                        <div className="content">
                            <button className='btn btn-primary mt-4'  style={{borderRadius:'30px', width:'150px',backgroundColor:'#84b0f2',marginBottom:'15px'}}>{data.category}</button>
                            <div className="header" style={{marginBottom:'15px',color:'#3498DB'}}>{data.title}</div>
                            <div className="description" style={{marginBottom:"30px"}}>{data.description}</div>
                            <div className="actualPrice"> 
                                    <span style={{color:'#3498DB', marginRight:'10px', marginBottom:'10px'}}>${data.price}</span>
                                    <span className="crossPrice" style={{ textDecorationLine: 'line-through'}}>{(data.price+(data.price*10/100)).toFixed(2)}</span>
                            </div>
                            { /* <Rating value={data.rating.rate}/>*/}
                        </div>
                    </div>
                </div>
           </div>
       </div>

    );
};

export default ProductDetails;
