import React from 'react'
import { useParams } from 'react-router-dom'
export default function InvoiceDetails() {
  
    const {id} = useParams()
    if(id!="null") {
        // this is to check if the mode is update or create if id is not null then the mode is update
        console.log(id);
        return <div>
            <h3>
            form to create the new invoice</h3>
        </div>

    }
    
    else{
        // if the id is null then the mode is update
        return <div>

            <h3>
                
            from to edit the details</h3>
        </div>

    }
    

}
