
import React from 'react';
import one from '../assets/p01.jpg';
import two from '../assets/p02.jpg';
import three from '../assets/p03.jpg';
import four from '../assets/p04.jpg';
import five from '../assets/p07.jpg';
import six from '../assets/p06.jpg';

function Orders() {
  const details = [
    {
      image: one,
      dName: "Wade Warren",
      orderNo : "15478256",
        amount: "$124.00",
        status : "Delivered"
    },
    {
      image: two,
      dName: "Jane Cooper",
      orderNo : "48965786",
        amount: "$365.02",
        status : "Delivered"
    },
    {
      image: three,
      dName: "Guy Hawkins",
      orderNo : "78958215",
        amount: "$45.88",
        status : "Cancelled"
    },
    {
      image: four,
      dName: "Kristin Watson",
      orderNo : "20965732",
        amount: "$65.00",
        status : "Pending"
    },
    {
      image: five,
      dName: "Cody Fisher",
      orderNo : "95715620",
        amount: "$545.00",
        status : "Delivered"
    },
    {
      image: six,
      dName: "Savannah Nguyen",
      orderNo : "78514568",
        amount: "$128.20",
        status : "Delivered" 
    },
  ];

  return (
    <div className="order-con">
      <div className='order-conheading'>
      <p className='nameH'>Customer</p>
          <p className='numH'>Order No.</p>
          <p className='amountH'>Amount</p>
          <p className='statusH'>Status</p>
          </div>
      {details.map((item, index) => (
        <div className="image-card" key={index}>
          <img src={item.image} alt='image' />
          <p className='name'>{item.dName}</p>
          <p className='num'>{item.orderNo}</p>
          <p className='amount'>{item.amount}</p>
          <p
                        className={
                            item.status === "Delivered"
                                ? "status green"
                                : "status red"
                        }
                    >
                        {item.status}
                    </p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
