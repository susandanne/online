import React from 'react';



const Item = (props) => {

    console.log(props)

    return (
        <div style={{ padding:"10px 10px", border: "1px solid yellow"}}>
                <p><b> Title : {props.course.title}</b><br/>
                 Description :{props.course.description}<br/>
                 Instructor : {props.course.instructor}</p>
                <p>Price :$ {props.course.price}</p>
                <button onClick = {()=> props.handleEnroll(props.courses)}>get admission</button>
                <br/>
        </div>
    );
};

export default Item;