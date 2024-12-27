import { useState } from "react";

function Calcutor() {

    const [dis, setdis] = useState([])
    const Array = ['AC', '←', '/', '9', '8', '7', '5', '6',  '4',  '3', '2', '1', '0', '00','-','*','+', '=',]



    const cal = (item) => {

        setdis(item)
        if (item == "=") {
            const sum = eval(dis)
            setdis(sum)
        }
        else if (item == "AC") {
            setdis("")

        }
        else if(item=="←"){
            const ab =dis.slice(0,-1)
            setdis(ab)

        }


        else {

            setdis(dis + item)
        }


    }





    return (
        <>
            <div className="main">
                
                 <div className="cal">

                <input type="text" readOnly value={dis} />
                {Array.map((item) => <button onClick={() => { cal(item) }}> {item}</button>)}

            </div></div>
        </>
    );
}


export default Calcutor;
