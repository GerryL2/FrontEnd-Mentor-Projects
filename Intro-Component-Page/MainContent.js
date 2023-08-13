import React, {useState} from "react"
import Error from "./images/icon-error.svg"

export default function MainContent() {
    const [thisInput, setThisInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errorShown, setErrorShown] = useState(true)

    function toggle(event) {
        event.preventDefault()
        const {name, value} = event.target

        setThisInput(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }


    const handleButtonClick = () => {
        if (
            thisInput.firstName === "" ||
            thisInput.lastName === "" ||
            thisInput.email === "" ||
            thisInput.password === ""
        ) {
            setErrorShown(false);
        } else {
            setErrorShown(true);
        }
    };

    const styles = {
        display: errorShown ? "none" : "block"
    }

    return(
        <div className="content-container">
            <div className="left--content">
                <h1 className="left--content_title">Learn to code by watching others</h1>
                <p className="left--content_desc">
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                    but understanding how developers think is invaluable. 
                </p>
            </div>
            <div className="right--content">
                <div className="right--content_free">
                    <p><span>Try it free 7 days</span> then $20/mo. therafter</p>
                </div>
                <div className="right--content_form">
                    <div>
                        <input type="text" 
                            value={thisInput.firstName}
                            name="firstName"
                            onChange={toggle}
                            placeholder="First Name"
                        />
                        <img style={styles} src={Error} alt="" />
                        <p style={styles} className="error-text">First name cannot be empty</p>
                    </div>
                    <div>
                        <input type="text" 
                            value={thisInput.lastName}
                            name="lastName"
                            onChange={toggle}
                            placeholder="Last Name"
                        />
                        <img style={styles} src={Error} alt="" />
                        <p style={styles} className="error-text">Last Name cannot be empty</p>
                    </div>
                    <div>
                        <input type="email" 
                            value={thisInput.email}
                            name="email"
                            onChange={toggle}
                            placeholder="Email"
                            
                        />
                        <img style={styles} src={Error} alt="" />
                        <p style={styles} className="error-text">Looks like this is not an email</p>
                    </div>
                    <div>
                        <input type="password" 
                            value={thisInput.password}
                            name="password"
                            onChange={toggle}
                            placeholder="Password"
                        />
                        <img style={styles} src={Error} alt="" />
                        <p style={styles} className="error-text">Password cannot be empty</p>
                    </div>
                    <button onClick={handleButtonClick}>Claim your free trial</button>
                    <p className="terms"><small>By clicking the button, you're agreeing to our <span>Terms and Services</span></small></p>
                </div>
            </div>
        </div>
    )
}