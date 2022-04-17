import { useState, useEffect } from "react";
import { add_flat } from "../Redux/action";
import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
export const Home =()=>{
        // const [flat1,setFlat]= useState([]);
        const data =useSelector((store)=>store.flat);
        console.log(data)
        const dispatch = useDispatch();

        useEffect(()=>{
           handledata()
        },[]);

        const handledata =()=>{
            axios.get("http://localhost:3002/flat").then((res)=>{
                console.log(res.data)
                dispatch(add_flat(res.data));
                // setFlat(res.data);
            })
        };

    return(
        <div>
            <div>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            {
                data.map((e)=>{
                    return <div key={e.id}>
                        <p>{e.Type}</p>
                        <p>{e.Block}</p>
                        <p>{e.No}</p>
                        <img src={e.image} alt="" />
                    </div>
                })
            }
        </div>
    )
}