import React, { useState } from 'react';
import Courses from '../../Fake/Courses';
import './Course.css'
import Item from '../Item/Item';


const Course = (props) => {

   
    const onlineCourse = Courses ;
    const [products, setProducts] = useState(onlineCourse);
    
    let [cart, setCart] = useState([])
    
    const handleEnroll = (product)=>{
        
        const newCart = [...cart, product]
        setCart  (newCart);
    }

  

    return (
        
        <div  className="main">
         
          <div className="course-gallery">
              <h2 style={{textAlign:"center"}}></h2>

              {
              products.map(course => <Item 
                course ={course} 
                handleEnroll={handleEnroll} ></Item>)
                
              }
            </div>


            <div className="ord"> 
                <h1> summery </h1>
            <h2 style= {{marginLeft:"10px"}}>course: {cart.length}</h2>
                <h2 style= {{marginLeft:"10px"}}>  Total: </h2>
            </div>


        </div>
    );
};

export default Course;