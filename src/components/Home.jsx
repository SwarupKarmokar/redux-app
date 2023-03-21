import React from "react";
import { DivStyle, HeadingStyle, Button } from './HomeStyle'


const User = (props) => {
    return (
        <div>
            <HeadingStyle>Home from container</HeadingStyle>
            <DivStyle>
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ738b2CqXiD5cz858oZ2smt8bQl9UXIM-mnw&usqp=CAU" alt="Oops" />
                </div>

                <div className="text-wrapper">
                    <h4>Iphone</h4>
                    <h4>Price: 34000</h4>
                    <Button>Add</Button>
                </div>

            </DivStyle>
        </div>
    )
}

export default User;