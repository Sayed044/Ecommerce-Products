import React, {useEffect} from 'react';
import Layout from "../layout/Layout.jsx";
import Details from "../product/details.jsx";
import {useParams} from "react-router-dom";
import Brands from "../product/brands.jsx";
import ProductStore from "../store/productStore.js";

const ProductDetails = () => {

    const {BrandList,DetailsRequest,ReviewListRequest,BrandListRequest}=ProductStore();
    const {id} = useParams();

    useEffect(() => {
        (async ()=>{
           await DetailsRequest(id);
           await ReviewListRequest(id);
            BrandList===null? await BrandListRequest():null
        })()
    },[])


    return (
        <Layout>
            <Details/>
            <Brands/>
        </Layout>
    );
};

export default ProductDetails;