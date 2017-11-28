import React from 'react';

export default class Profile extends React.Component{
    render(){

        //image file variables
        var manandwoman = require('../../Content/profilePage/img1/images-of-man-and-woman-in-love.jpg');
        var badgeWeekly = require('../../Content/profilePage/badges/Weekly.png');
        var badgeMonthly = require('../../Content/profilePage/badges/Monthly.png');
        var badgeGrand = require('../../Content/profilePage/badges/Grand_Competition.png');
        var badgeExhibition = require('../../Content/profilePage/badges/Exhibition.png');
        //css file variables

        return(
            <div>
                <div className="container-floating profilePortion">
                    <div className="row PFPI">
                        <div className="col-lg-4 col-xl-4 PI">
                            <div className="ProfileImageName">
                                <img src={manandwoman} className="profilepic"/>
                                <div> <h5>Your name</h5>
                                    <p>some text some text some text</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-lg-4 col-xl-4 AB">
                            <div className="AboutProfile">
                                <div className="AboutProfiletext">
                                    <h5>About me:</h5>
                                    <p>Some text some text some text some text some text some text some text</p>

                                    <h5>Interests:</h5>
                                    <p>Some text some text some text some text some text some text some text</p>
                                </div>

                                <a href="#" className="EditProfile" data-toggle="modal" data-target="#ModelName" aria-hidden="true">Edit</a>
                            </div>
                        </div>


                        <div className="col-md-5 col-lg-4 col-xl-4 RG">
                            <div className="recognition">
                                <h5>Recognition:</h5>
                                <br/>
                                <a href="#"><img src={badgeWeekly} className="badges"/></a>
                                <a href="#"><img src={badgeMonthly} className="badges"/></a>
                                <a href="#"><img src={badgeGrand} className="badges"/></a>
                                <a href="#"><img src={badgeExhibition} className="badges"/></a>
                            </div>
                        </div>

                    </div>

                    <br/>

                </div>

                <div className="container photoinfo">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4 Photo">31 Photos</div>
                        <div className="col-md-4 col-lg-4 col-xl-4 following">34 Following</div>
                        <div className="col-md-4 col-lg-4 col-xl-4 follower">23 Followers</div>
                    </div>
                </div>
                <br/>

            </div>
        );
    }
}