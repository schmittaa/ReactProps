
import React from "react";
import Elon from '../Images/Elon.jpeg';
import Jeff from '../Images/Jeff.jpg';
const  Profile = User => {
          return<div>
                 <div style={{ display: "inline-block"}}>
                    {User.children}<br/>
                    <h2>Name : </h2><h3 style={{color:"grey"}}>{User.FullName}</h3><br/>
                    <h2>Bio : </h2><p>{User.Bio}</p>
                    <h2>Profession :</h2><p> {User.Profession}</p>
                   
                    </div>
                </div>
}
       
    
export default Profile;