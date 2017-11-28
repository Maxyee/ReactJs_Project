import React from 'react';

export default class Body extends React.Component{
    render()
    {
        const bgImg = require('../Content/NewDesign/img1/jump.jpg');
        
   
        var numberone = {
            paddingTop:80,
            backgroundImage: 'url(' + bgImg + ')'
        };

        var numbertwo = {
            textShadow: "0 0 10px #640064"   
        };

        var numberthree = {
            fontSize:17
        };

        var numberfour = {
            fontSize:15
        };

        var item1Pic = require('../Content/profilePage/landingpagephoto/first.png');
        var item2Pic = require('../Content/profilePage/landingpagephoto/secound.png');
        var item3Pic = require('../Content/profilePage/landingpagephoto/third.png');

        return(
            <div>
                <div className="signupPortion" style={numberone}>
                    <h1 style={numbertwo}>Cradle of creativity!</h1>
                    <h3 style={numbertwo}>Win awards and spots in photo exhibitions</h3>
                    <button type="button" className="btn login-button Signup" data-toggle="modal" data-target="#ModelName" aria-hidden="true">
                        Sign up
                    </button>
                </div>

                <div className="container">
                    <div className=" Ppart">
                        <section>
                            <div className="item-1">           
                                <img src={item1Pic} className="Pimage1"/>
                                <p className="P2">
                                    <b style={numberthree}>Tired of uploading photos and not getting anything in return?</b>
                                    <br />
                                    <span style={numberfour}>
                                        Sign up, upload your favourite photos and take a shot in our constantly running photo competition. Prizes are
                                        given away weekly, monthly and at the end of four-month period there is a final with prizes for top 5 rated
                                        photos. We don’t have any judges, photos are rated by the user community itself.
                                    </span>
                                    <br/>
                                </p>
                            </div>
                        </section>
                        <hr/>
                        <section>
                            <div className="item-2">              
                                <img src={item2Pic} className="Pimage" />
                                <p className="ptext">
                                    <b style={numberthree}>Are you looking for a way to get yourself known?</b>
                                    <br />
                                    <span style={numberfour}>
                                        At the end of the four-month period International Photo Exhbition is organized with 50 top rated photos from
                                        all over the world. Mobile camera is enough to succeed, all you need is a moment to capture and a little
                                        bit of creativity.
                                    </span>
                                    <br/>
                                </p>
                            </div>
                        </section>
                        <hr/>
                        <section>
                            <div className="item-3">             
                                <img src={item3Pic} className="Pimage1" />
                                <p className="P2">
                                    <b style={numberthree}>Do you want to explore new places and connect with new people?</b>
                                    <br />
                                    <span style={numberfour}>
                                        Join our growing international community, we have users from all over the world. Enjoy the views captured
                                        by people with different backgrounds and skill levels. Everybody is welcome!
                                    </span>
                                    <br/>
                                </p>
                            </div>
                        </section>

                    </div>
                </div>

            </div>
        );
    }
}