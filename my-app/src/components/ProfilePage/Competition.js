import React from 'react';

export default class Competition extends React.Component{
    render(){

        //image file variable
        var imagenumber1 = require('../../Content/profilePage/img1/numbers-01.jpg');
        var imagenumber2 = require('../../Content/profilePage/img1/numbers-02.jpg');
        var imagenumber6 = require('../../Content/profilePage/img1/numbers-06.jpg');
        var imagenumber9 = require('../../Content/profilePage/img1/numbers-09.jpg');
        var imagenumber12 = require('../../Content/profilePage/img1/numbers-12.jpg');
        var unique = require('../../Content/profilePage/img1/n22.jpg');
        
        //css file variable

        return(
            <div>
                <div className="container competition">
                    <h6>Competition Photos</h6>
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                                <a href="img1/numbers-01.jpg"><img src={imagenumber1} className="ImageG"/></a>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                                <a href="img1/numbers-01.jpg"><img src={imagenumber2} className="ImageG"/></a>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                                <a href="img1/numbers-01.jpg"><img src={imagenumber6} className="ImageG"/></a>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                                <a href="img1/numbers-01.jpg"><img src={imagenumber9} className="ImageG"/></a>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                                <a href="img1/numbers-01.jpg"><img src={imagenumber12} className="ImageG"/></a>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                                <a href="img1/numbers-01.jpg"><img src={unique} className="ImageG"/></a>
                            </div>
                            <a href="#" className="AllImage">See all</a>
                    </div>
                </div>
            </div>
        );
    }
}