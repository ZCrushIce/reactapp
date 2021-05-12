import logo from './images/favicon-32x32.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-container">
        <h1>
            Learn to code by watching others
        </h1>
        <p className="left-p">
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
      </div>
      <div className="right-container">
        <div className="free-trial">
            <p className="right-p">
                <span>Try it free 7 days</span> then $20/mo. thereafter
            </p>
        </div>
        <form action="#" className="form">
            <div className="form-input">
                <input type="text" name="fname" id="form-field" placeholder="First Name" required/>
            </div>
            <div className="form-input">
                <input type="text" name="lname" id="form-field" placeholder="Last Name" required/>
            </div>
            <div className="form-input">
                <input type="email" name="email" id="form-field" placeholder="Email Address" required/>
            </div>
            <div className="form-input">
                <input type="password" name="password" id="form-field" placeholder="Password" required/>
            </div>
            <button className="form-button">CLAIM YOUR FREE TRIAL</button>
            <p className="form-p">
                By clicking the button, you are agreeing to our <span><a href="#">Terms and Services</a></span>
            </p>
        </form>
      </div>
    </div>
  )
}

export default App;
