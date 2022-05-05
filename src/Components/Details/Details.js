import React from "react";
import {TechnicalDetails,NonTechnicalDetails,WorkshopDetails} from '../../Details'
export default function Details({props}){
    let component;
    function DetailsRender(){
        var a=window.location.pathname.split('/');
        if(a[2]==='Technical'){
            component=TechnicalDetails.find((e)=>{
                e.id===a[3]
            })
        }
        console.log(component)
    }
    return(
        <div>
            {DetailsRender()}
        </div>
    )
}