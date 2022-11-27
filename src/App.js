import './App.css';
import React, {useState} from "react";

const App = () => {
    const [color, setColor] = useState("");
    return (
        <div align="center">
            <div style={{backgroundColor: color, height: "100vh"}} className=" w-12">

                <input type="text"
                       value={color}
                       placeholder="Input Color Name"
                       onChange={(e) => setColor(e.target.value)}/>

            </div>
        </div>
    )
}

export default App;
