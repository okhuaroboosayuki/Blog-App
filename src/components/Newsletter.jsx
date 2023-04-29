import "../assets/scss/footer.scss";

function Newsletter(){
    return(
        <div className="newsletter">
            <div className="newsletter_top">
                <h1 className="newsletter_top_heading">Subcribe to Our Newsletter.</h1>
                <p className="newsletter_top_paragraph">
                    Subscribe now to get all latest updates
                </p>
            </div>

            <div className="newsletter_bottom">
                <input type="email" placeholder="enter your email" />
                <button>subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter;