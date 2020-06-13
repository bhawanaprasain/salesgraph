import React from 'react'
import "../styles/footer.css"

 function Footer() {
    return (
        <div>
            <div className="row footer">
               
                <button type="button" class="btn btn-social-icon btn-facebook btn-rounded"><i class="fa fa-facebook"></i></button>
                <button type="button" class="btn btn-social-icon btn-twitter btn-rounded"><i class="fa fa-twitter"></i></button>
                <button type="button" class="btn btn-social-icon btn-linkedin btn-rounded"><i class="fa fa-linkedin"></i></button>

            </div>
        </div>
    )
}
export default Footer