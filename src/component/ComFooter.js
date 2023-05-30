import './ComFooter.css'
export default function Footer (){
    return(
        <div id="box-footer">
            <div id="sellerlist">
                <div>
                    Sellerlist
                </div>
                <p>
                    Your number one site for selling and buying <br></br>clothes, cosmetics and home goods.
                </p>
            </div>
            <div id="buy">
                <h4>Buy</h4>
                <p>Create a profile<br></br> set up payment type <br></br>inbox.</p>
            </div>

            <div id="help">
            <h4>Help</h4>
                <p>FAQ <br></br> Customer service <br></br>How to guides <br></br>Contact us </p>
                
            </div>

            <div id="join">
                <h4 id='title-join'>
                    Join our  newsletter 
                </h4>
                <form>
                    <input id="e-mail" type="email" placeholder='Enter your e-mail'>
                            
                    </input>
                    <button onClick=''></button>
                </form>
            </div>
            
            <div id="sell">
            <h4>Sell</h4>
                <p>Create a profile <br></br>Lidst your items<br></br> Boost your items.</p>
            </div>
            <p> Terms and conditions <br></br>Privacy policy </p>
            <div id="follow-us">

            </div>
            
        </div>
    )
}