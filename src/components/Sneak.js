function  Sneak() {


    return (
        <header>
        <div>
        <img src={require('./images/icon-preview.svg').default} alt="" />
     
            <h2>Sneak preview</h2>
            <p>Quick preview of all snippets on your Clipboard for easy access.</p>   
            <img src={require('./images/logo-google.png')} alt=""/>
            <img src={require('./images/logo-hp.png')} alt=""/>
            <img src={require('./images/logo-ibm.png')} alt=""/>
            <img src={require('./images/logo-microsoft.png')} alt=""/>
            <img src={require('./images/logo-vector-graphics.png')} alt=""/>
            


            <h1>Clipboard for iOS and Mac OS</h1>
            <p>Available for free on the App Store.Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard. Download for iOS Download for Mac FAQs Contact Us Privacy Policy Press Kit Install Guide</p>
            <div>
        <button class="btn btn-primary" >
          Download for iOS

        </button>
        <button class="btn btn-secondary">
          Download for Mac
        </button>
        
      </div>
        </div>
        </header>
    )
   
}

export default Sneak;
