import React from "react";
function About(){
    return(
        <div>
            <section  className="py-3 bg-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 my-auto text-center">
                                <h5>About Us</h5>
                            </div>
                          
                        </div>
                    </div>
                </section>
            {/* vision */}
                <section className="section bg-light border-top ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Vision, Mission and Value</h3>
                            <div className="underline mx-auto"></div>
                            
                            
                        </div>
                        <div className="col-md-4 text-center ">
                            <h6>Our Vision</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>    
                        </div>

                        <div className="col-md-4 text-center ">
                            <h6>Our Mission</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>    
                        </div>

                        <div className="col-md-4 text-center ">
                            <h6>Our Core Value</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>    
                        </div>
                        </div>
                    </div>
            
            </section>
           
        </div>
    );
}
export default About;