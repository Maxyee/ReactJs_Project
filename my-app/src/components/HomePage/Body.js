import React from 'react';

export default class Body extends React.Component{
    render(){     
        return(
            <div>
                <div class="container EC">
                    <div class="links">
                        <a href="MyFeeds.html" class="feeds"><h3 class="MFeed">My Feeds</h3></a>
                        <a href="News.html" class="feeds"><h5 class="MNews">News</h5></a>

                    </div>
                    <hr class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-9 hr"/>

                    <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 MyFeed">
                        <div class="Picture">
                            <img src="img1/images-of-man-and-woman-in-love.jpg" class="profilepic"/>
                            <h6 class="name">fhidfih</h6>
                        </div>


                        <div class="container FC">
                            <div class="row">
                                <div class="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11 float-right FC">
                                    <img src="img/privacy_competition_photo.png" class="Privacy float-right"/><p class="float-right"> 6 hours ago</p>
                                    <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
                                        <div class="carousel-inner">

                                            <div class="active carousel-item" data-toggle="modal" data-target="#ModelName" aria-hidden="true">
                                                <img src="img1/numbers-01.jpg" class="ranimg"/>
                                            </div>

                                            <div class="item carousel-item" data-toggle="modal" data-target="#ModelName1" aria-hidden="true">
                                                <img src="img1/numbers-02.jpg" class="ranimg"/>
                                            </div>

                                            <div class="item carousel-item" data-toggle="modal" data-target="#ModelName2" aria-hidden="true">
                                                <img src="img1/numbers-06.jpg" class="ranimg"/>
                                            </div>

                                            <div class="item carousel-item" data-toggle="modal" data-target="#ModelName3" aria-hidden="true">
                                                <img src="img1/numbers-09.jpg" class="ranimg"/>
                                            </div>

                                            <div class="item carousel-item" data-toggle="modal" data-target="#ModelName4" aria-hidden="true">
                                                <img src="img1/numbers-12.jpg" class="ranimg"/>
                                            </div>

                                            <div class="item carousel-item" data-toggle="modal" data-target="#ModelName5" aria-hidden="true">
                                                <img src="img1/numbers-01.jpg" class="ranimg"/>
                                            </div>

                                            <div class="item carousel-item" data-toggle="modal" data-target="#ModelName6" aria-hidden="true">
                                                <img src="img1/numbers-02.jpg" class="ranimg"/>
                                            </div>

                                            <div class="item carousel-item" data-toggle="modal" data-target="#ModelName7" aria-hidden="true">
                                                <img src="img1/numbers-06.jpg" class="ranimg"/>
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <a href="#"><img src="img/Star%20small%203.png" class="stars"/></a>
                                            <a href="#"><img src="img/Star%20small%201.png" class="stars"/></a>
                                            <a href="#"><img src="img/Star%20small%201.png" class="stars"/></a>
                                            <a href="#"><img src="img/Star%20small%201.png" class="stars"/></a>
                                            <a href="#"><img src="img/Star%20small%201.png" class="stars"/></a>
                                            <a href="#"><img src="img/comments.png" class="comments float-right"/></a>
                                        </div>
                                        <div>
                                        </div>
                                    </div>

                                    <div class="clearfix">
                                        <div id="thumbcarousel" class="carousel slide" data-interval="false">
                                            <div class="carousel-inner car">
                                                <div class="item active carousel-item">
                                                    <div data-target="#carousel" data-slide-to="0" class="thumb">
                                                        <img src="img1/numbers-01.jpg"/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="1" class="thumb">
                                                        <img src="img1/numbers-02.jpg"/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="2" class="thumb">
                                                        <img src="img1/numbers-06.jpg"/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="3" class="thumb">
                                                        <img src="img1/numbers-09.jpg"/>
                                                    </div>
                                                </div>
                                                <div class="item carousel-item">
                                                    <div data-target="#carousel" data-slide-to="4" class="thumb">
                                                        <img src="img1/numbers-12.jpg"/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="5" class="thumb">
                                                        <img src="img1/numbers-01.jpg"/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="6" class="thumb">
                                                        <img src="img1/numbers-02.jpg"/>
                                                    </div>
                                                    <div data-target="#carousel" data-slide-to="7" class="thumb">
                                                        <img src="img1/numbers-06.jpg"/>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        

                                            <a class="carousel-control-prev arrow" href="#thumbcarousel" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next arrow" href="#thumbcarousel" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
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