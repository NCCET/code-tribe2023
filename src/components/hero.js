
import logo from '../images/logo.svg'


function  Hero() {
  function hangleClick() {
    console.log("Button is clicked");
  }


    return (
        <div>

<img src={logo}  alt="" />
        
       <header>
    <div class="container container--small">

      <h1>A history of everything you copy
      </h1>
      <p>
        Clipboard allows you to track and organize
        everything you copy. Instantly access your
        clipboard on all your devices.
      </p>
      <div>
        <button class="btn btn-primary" onClick={hangleClick}>
          Download for iOS

        </button>
        <button class="btn btn-secondary" onClick={hangleClick}>
          Download for Mac
        </button>
        
      </div>
    </div> 
  </header>

    </div>
    )
   
}

export default Hero;
