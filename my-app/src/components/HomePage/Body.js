import React from 'react';

export default class Body extends React.Component{
    render(){     

        //image file variables
        var manandwomen = require('../../Content/Home/img1/images-of-man-and-woman-in-love.jpg');
        var privacy_competition_photo = require('../../Content/Home/img/privacy_competition_photo.png');
        var imagenumber1 = require('../../Content/Home/img1/numbers-01.jpg');
        var imagenumber2 = require('../../Content/Home/img1/numbers-02.jpg');
        var imagenumber6 = require('../../Content/Home/img1/numbers-06.jpg');
        var imagenumber9 = require('../../Content/Home/img1/numbers-09.jpg');
        var imagenumber12 = require('../../Content/Home/img1/numbers-12.jpg');

        var star1 = require('../../Content/Home/img/Star_small_1.png');
        var star2 = require('../../Content/Home/img/Star_small_2.png');
        var star3 = require('../../Content/Home/img/Star_small_3.png');
        var star4 = require('../../Content/Home/img/Star_small_4.png');
        var comment = require('../../Content/Home/img/comments.png');
        //css file variables

        return(
            <div>
                <div className="container EC">
                    <div className="links">
                        <a href="MyFeeds.html" className="feeds"><h3 className="MFeed">My Feeds</h3></a>
                        <a href="News.html" className="feeds"><h5 className="MNews">News</h5></a>
                    </div>

                    <hr className="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-9 hr"/>

                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 MyFeed">
                        <div className="Picture">
                            <img src={manandwomen} className="profilepic"/>
                            <h6 className="name">fhidfih</h6>
                        </div>


                        <div className="container FC">
                            <div className="row">
                                <div className="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11 float-right FC">
                                    <img src={privacy_competition_photo} className="Privacy float-right"/><p className="float-right"> 6 hours ago</p>
                                    <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="false">
                                        <div className="carousel-inner">

                                            <div className="active carousel-item" data-toggle="modal" data-target="#ModelName" aria-hidden="true">
                                                <img src={imagenumber1} className="ranimg"/>
                                            </div>

                                            <div className="item carousel-item" data-toggle="modal" data-target="#ModelName1" aria-hidden="true">
                                                <img src={imagenumber2} className="ranimg"/>
                                            </div>

                                            <div className="item carousel-item" data-toggle="modal" data-target="#ModelName2" aria-hidden="true">
                                                <img src={imagenumber6} className="ranimg"/>
                                            </div>

                                            <div className="item carousel-item" data-toggle="modal" data-target="#ModelName3" aria-hidden="true">
                                                <img src={imagenumber9} className="ranimg"/>
                                            </div>

                                            <div className="item carousel-item" data-toggle="modal" data-target="#ModelName4" aria-hidden="true">
                                                <img src={imagenumber12} className="ranimg"/>
                                            </div>

                                            <div className="item carousel-item" data-toggle="modal" data-target="#ModelName5" aria-hidden="true">
                                                <img src={imagenumber1} className="ranimg"/>
                                            </div>

                                            <div className="item carousel-item" data-toggle="modal" data-target="#ModelName6" aria-hidden="true">
                                                <img src={imagenumber2} className="ranimg"/>
                                            </div>

                                            <div className="item carousel-item" data-toggle="modal" data-target="#ModelName7" aria-hidden="true">
                                                <img src={imagenumber6} className="ranimg"/>
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <a href="#"><img src={star3} className="stars"/></a>
                                            <a href="#"><img src={star1} className="stars"/></a>
                                            <a href="#"><img src={star1} className="stars"/></a>
                                            <a href="#"><img src={star1} className="stars"/></a>
                                            <a href="#"><img src={star1} className="stars"/></a>
                                            <a href="#"><img src={comment} className="comments float-right"/></a>
                                        </div>
                                        <div>
                                        </div>
                                    </div>

                                    <div className="clearfix">
                                        <div id="thumbcarousel" className="carousel slide" data-interval="false">
                                            <div className="carousel-inner car">
                                                <div className="item active carousel-item">
                                                    <div data-target="#carousel" data-slide-to="0" className="thumb">
                                                        <img src={imagenumber1}/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="1" className="thumb">
                                                        <img src={imagenumber2}/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="2" className="thumb">
                                                        <img src={imagenumber6}/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="3" className="thumb">
                                                        <img src={imagenumber9}/>
                                                    </div>
                                                </div>
                                                <div className="item carousel-item">
                                                    <div data-target="#carousel" data-slide-to="4" className="thumb">
                                                        <img src={imagenumber12}/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="5" className="thumb">
                                                        <img src={imagenumber1}/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="6" className="thumb">
                                                        <img src={imagenumber2}/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="7" className="thumb">
                                                        <img src={imagenumber6}/>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        

                                            <a className="carousel-control-prev arrow" href="#thumbcarousel" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next arrow" href="#thumbcarousel" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}