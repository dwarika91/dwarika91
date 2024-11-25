import React from "react"
import logo from "../src/assets/amazon.png"

const CreatAccount = () => {
    return (
        <div style={{display:"flex", justifyContent:"center"}} className="main">
            <div>
            <img src={logo} alt="" style={{width:"120px", height:"90px", position:"relative", left:"100px"}}/>
            <div style={{width:"280px", border:"1px solid gray", borderRadius:"10px", padding:"20px", backgroundColor:"white"}}>
                 <h1 style={{fontSize:"28px", fontFamily:" Arial, sans-serif"}}>Create Account</h1>
                <div>
                    <label htmlFor="n" style={{fontWeight:"550" }} >Your Name</label> <br /> 
                    <input type="text" id="n" placeholder="Fist and last name " style={{width:"95%", marginLeft:"0.5%", height:"20px", marginTop:"5px"}} />
                </div>
                <div style={{marginTop:"5px"}}> <label htmlFor="mn" style={{fontWeight:"550"}}>Mobile Number</label><br /></div>
                <div >   <select style={{width:"20%" , height:"25px" , marginTop:"5px"}}>
                            <option value=""> India +91</option>
                            <option value="">haiti + 509</option>
                            <option value=""> Hungary 354</option>
                            <option value="">Guyana + 592</option>
                            <option value="">Honduras +504</option>
                            <option value=""> Hong kong + 852</option>
                        </select>
                    <input type="text" placeholder="Mobil Number" id="mn" style={{width:"75%", marginLeft:"2px", height:"20px"}}/>
                </div>

                <div style={{marginTop:"5px"}} >
                   <label htmlFor="pa" className="pass" style={{fontWeight:"550"}}>Password</label><br /> <input type="text" id="pa" placeholder="At least 6 characters" style={{width:"95%", marginLeft:"0.5%", height:"20px", marginTop:"5px"}}/>
                </div>

                <div style={{marginTop:"15px"}}>
                    <span>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</span>
                </div>
                <div className="verify-btn">
                    <center><button style={{marginTop:"20px", padding:"5px", width:"290px", backgroundColor:"gold", border:"1px solid gray", borderRadius:"10px"}} id="bt">Verify mobile number</button></center>
                </div><hr />

                <h5 style={{fontFamily:"Arial, sans-serif"}}>Buying for work?</h5>
                <span style={{position:"relative", bottom:"15px"}}><a href="" style={{textDecoration:"none"}}>Create a free business account</a></span><hr />

                <div>
                    <h5>Already have an account? <a href="" style={{textDecoration:"none"}}>Sign in</a></h5>
                    <p style={{fontSize:"13px"}}>By creating an account or logging in, you agree to Amazon’s <a href="">Conditions of use</a>and<a href="">Privacy Policy</a>.</p>
                </div>
            </div>
            </div>
            
            <footer>
                <center><ul style={{listStyle:"none", display:"flex", justifyContent:"center", gap:"25px", marginRight:"50px"}} className="ul">
                    <li><a href="" style={{textDecoration:"none"}}>Conditions of use</a></li>
                    <li><a href="" style={{textDecoration:"none"}}>Privacy Policy</a></li>
                    <li><a href="" style={{textDecoration:"none"}}>help</a></li>
                </ul></center>
                <center><p>© 1996-2024, Amazon.com, Inc. or its affiliates</p></center>
            </footer>

        </div>
    )
}

export default CreatAccount

