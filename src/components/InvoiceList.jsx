import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function () {
    const navigate = useNavigate();
    // this data is assumed to be gotten from the backend in the form of array of objects with all the invoice details  
    let data = [
        {
            'Id': '1',
            'Date': '1-2-2024',
            'InvoiceNumber': 1,
            'CustomerName': 'Kuamr',
            'BillingAddress': 'telangana',
            'ShippingAddress': 'Hyderabad',
            'GSTIN': 1234567,
            'Items': ['cake','cake'],
            'BillSundrys': ['bake','bake'],
            'TotalAmount': '1000'
        },
        {
            'Id': '2',
            'Date': '1-2-2024',
            'InvoiceNumber': 2,
            'CustomerName': 'Kuamr',
            'BillingAddress': 'telangana',
            'ShippingAddress': 'Hyderabad',
            'GSTIN': 1234567,
            'Items': ['cake','cake'],
            'BillSundrys': ['bake','bake'],
            'TotalAmount': '1000'
        },
        {
            'Id': '3',
            'Date': '1-2-2024',
            'InvoiceNumber': 3,
            'CustomerName': 'Kuamr',
            'BillingAddress': 'telangana',
            'ShippingAddress': 'Hyderabad',
            'GSTIN': 1234567,
            'Items': ['cake','cake'],
            'BillSundrys': ['bake','bake'],
            'TotalAmount': '1000'
        },
        {
            'Id': '4',
            'Date': '1-2-2024',
            'InvoiceNumber': 4,
            'CustomerName': 'Kuamr',
            'BillingAddress': 'telangana',
            'ShippingAddress': 'Hyderabad',
            'GSTIN': 1234567,
            'Items': ['cake','cake'],
            'BillSundrys': ['bake','bake'],
            'TotalAmount': '1000'
        },
        {
            'Id': '5',
            'Date': '1-2-2024',
            'InvoiceNumber': 5,
            'CustomerName': 'Kuamr',
            'BillingAddress': 'telangana',
            'ShippingAddress': 'Hyderabad',
            'GSTIN': 1234567,
            'Items': ['cake','cake'],
            'BillSundrys': ['bake','bake'],
            'TotalAmount': '1000'
        }

    ]
    const handleRowClick = (id) =>{
    //this function is used to open the invoice details in update mode
        navigate(`/InvoiceDetails/:${id}`)
    }
    const handleNew = ()=>{
    //this fucntion is to open invoice details in create mode
        navigate(`/InvoiceDetails/null`)
    }



    const DisplayData = (list) => {
       // function to iterate over the recieved data and bild the corresponding table
        return list.map((val, index) => {
            console.log(val);
         return <tr onClick={()=>handleRowClick(val.Id)}>
            <td>{val.Id}</td>
            <td>{val.Date}</td>
            <td>{val.InvoiceNumber}</td>
            <td>{val.CustomerName}</td>
            <td>{val.BillingAddress}</td>
            <td>{val.ShippingAddress}</td>
            <td>{val.GSTIN}</td>
            <td>{val.Items}</td>
            <td>{val.BillSundrys}</td>
            <td>{val.TotalAmount}</td>
        </tr>
       
        })
    }
    return (
        <>
        <table className='table table-hover' id='name'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Invoice Number</th>
                    <th>Customer name</th>
                    <th>Billing Address</th>
                    <th>Shipping address</th>
                    <th>GSTIN</th>
                    <th>Items</th>
                    <th>BillSundrys</th>
                    <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
            {DisplayData(data)}
            </tbody>
            
        </table>
        <button className='btn btn-primary' onClick={handleNew}>ADD</button>
        </>
    )
}
