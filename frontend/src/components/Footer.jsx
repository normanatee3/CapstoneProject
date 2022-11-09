import React from 'react'


function Footer() {
    return (
        <footer className="page-footer  bg-dark text-secondary font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Normans Links</h5>
                        <ul className="list-unstyled">
                            <li><a
                                href="https://github.com/normanatee3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github:{" "}<i class="bi bi-github"></i>
                            </a></li>
                            <li><a
                                href="https://www.linkedin.com/in/norman-taylor-865a531bb/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn:{" "}<i class="bi bi-linkedin"></i>
                            </a></li>
                            {/* <li><a href="#!">Link 3</a></li> */}
                            {/* <li><a href="#!">Link 4</a></li> */}
                        </ul>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="">CoLab ON A PROJECT </h5>
                        <p> Find us on Social Media!</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-0" />
                    
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">colab Links</h5>
                        <ul className="list-unstyled">
                            {/* <li><a href="#!">Link 1</a></li> */}
                            {/* <li><a href="#!">Link 2</a></li> */}
                            {/* <li><a href="#!">Link 3</a></li> */}
                            {/* <li><a href="#!">Link 4</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">
                <p id="copy">© 2023 NKTcodes. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer