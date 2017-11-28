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
                <div class="container-floating profilePortion">
                    <div class="row PFPI">
                        <div class="col-lg-4 col-xl-4 PI">
                            <div class="ProfileImageName">
                                <img src={manandwoman} class="profilepic"/>
                                <div> <h5>Your name</h5>
                                    <p>some text some text some text</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-5 col-lg-4 col-xl-4 AB">
                            <div class="AboutProfile">
                                <div class="AboutProfiletext">
                                    <h5>About me:</h5>
                                    <p>Some text some text some text some text some text some text some text</p>

                                    <h5>Interests:</h5>
                                    <p>Some text some text some text some text some text some text some text</p>
                                </div>

                                <a href="#" class="EditProfile" data-toggle="modal" data-target="#ModelName" aria-hidden="true">Edit</a>
                            </div>
                        </div>


                        <div class="col-md-5 col-lg-4 col-xl-4 RG">
                            <div class="recognition">
                                <h5>Recognition:</h5>
                                <br/>
                                <a href="#"><img src={badgeWeekly} class="badges"/></a>
                                <a href="#"><img src={badgeMonthly} class="badges"/></a>
                                <a href="#"><img src={badgeGrand} class="badges"/></a>
                                <a href="#"><img src={badgeExhibition} class="badges"/></a>
                            </div>
                        </div>

                    </div>

                    <br/>

                </div>

                <div class="container photoinfo">
                    <div class="row">
                        <div class="col-md-4 col-lg-4 col-xl-4 Photo">31 Photos</div>
                        <div class="col-md-4 col-lg-4 col-xl-4 following">34 Following</div>
                        <div class="col-md-4 col-lg-4 col-xl-4 follower">23 Followers</div>
                    </div>
                </div>
                <br/>

            </div>
        );
    }
}