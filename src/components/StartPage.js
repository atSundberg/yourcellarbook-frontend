import React from "react";
// import '../App.css'

function StartPage() {
    return (
        <div>
            <div className="shape-divider-bottom">
                <div className="jumbotron jumbotron-fluid bg-warning text-white d-flex align-items-center">
                    <div className="container text-center">
                        <h1 className="font-raleway">
                            Welcome to Your Cellar Book
                        </h1>
                        {/* <p className="lead">
                            Your subtitle or additional content goes here.
                        </p> */}
                    </div>
                </div>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </div>

        // <div className="row">
        //     <div className="col-4">hej</div>
        //     <div className="col-4">på</div>
        //     <div className="col-4">dej</div>
        // </div>
    );
}

export default StartPage;
