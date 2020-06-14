import React from 'react'
import "../styles/footer.css"

 function Footer() {
    return (
        <div>
            <div className="row footer">
               
                <button type="button" className="btn btn-social-icon btn-facebook btn-rounded"><i className="fa fa-facebook"></i></button>
                <button type="button" className="btn btn-social-icon btn-twitter btn-rounded"><i className="fa fa-twitter"></i></button>
                <button type="button" className="btn btn-social-icon btn-linkedin btn-rounded"><i className="fa fa-linkedin"></i></button>

            </div>
        </div>
    )
}
export default Footer