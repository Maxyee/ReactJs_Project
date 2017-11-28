import React from 'react';

export default class Public extends React.Component{
    render(){

        //image file variables
        var imagenumber1 = require('../../Content/profilePage/img1/numbers-01.jpg');
        var imagenumber2 = require('../../Content/profilePage/img1/numbers-02.jpg');
        var imagenumber6 = require('../../Content/profilePage/img1/numbers-06.jpg');
        var imagenumber9 = require('../../Content/profilePage/img1/numbers-09.jpg');
        var imagenumber12 = require('../../Content/profilePage/img1/numbers-12.jpg');
        var unique = require('../../Content/profilePage/img1/n22.jpg');
        //css file variables

        return(
            <div>
                <div class="container competition">
                <h6>Public Photos</h6>
                    <div class="row">

                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={imagenumber1} class="ImageG"/></a>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={imagenumber2} class="ImageG"/></a>
                        </div>
                        
                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={imagenumber6} class="ImageG"/></a>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={imagenumber9} class="ImageG"/></a>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={imagenumber12} class="ImageG"/></a>
                        </div>

                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 imageP">
                            <a href="img1/numbers-01.jpg"><img src={unique} class="ImageG"/></a>
                        </div>

                        <a href="#" class="AllImage">See all</a>
                    </div>
                </div>
            </div>
        );
    }
}