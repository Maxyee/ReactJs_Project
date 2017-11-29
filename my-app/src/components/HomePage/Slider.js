import React from 'react';

export default class Slider extends React.Component{
    render(){

        var imagenumber1 = require('../../Content/Home/img1/numbers-01.jpg');
        var imagenumber2 = require('../../Content/Home/img1/numbers-02.jpg');
        var imagenumber6 = require('../../Content/Home/img1/numbers-06.jpg');
        var imagenumber9 = require('../../Content/Home/img1/numbers-09.jpg');
        var imagenumber12 = require('../../Content/Home/img1/numbers-12.jpg');



        return(
            <div>
                <div className="col-xl-12 mainC">
                        <div id="carouselExampleControls" className="carousel carousel-showmanymoveone slide" data-type="multi" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber1} alt="First slide"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber2} alt="Second slide"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber6} alt="Second slide"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber9} alt="Second slide"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber12} alt="Second slide"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber1} alt="Second slide"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber2} alt="Second slide"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber6} alt="Second slide"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber9} alt="Second slide"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={{imagenumber12}} alt="Second slide"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber1} alt="Second slide"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 ImgC"><a href="#">
                                        <img className="d-block w-100" src={imagenumber2} alt="Second slide"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="container photoinfo">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-xl-4 Photo">Competition Photos</div>
                                <div className="col-md-4 col-lg-4 col-xl-4 following">Public Photos</div>
                                <div className="col-md-4 col-lg-4 col-xl-4 follower">Random Photos</div>
                            </div>
                    </div>
            </div>
        );
    }
}