import React from 'react';

export default class Header extends React.Component{
    render(){

        //image file variables..
        var manandwoman = require('../../Content/Home/img1/images-of-man-and-woman-in-love.jpg');
        var glostarlogo = require('../../Content/Home/icons/glostars_logo_small_lv.png');
        var upload = require('../../Content/Home/icons/upload_full_2_A.png');
        var house = require('../../Content/Home/icons/house_W.png');
        var competition = require('../../Content/Home/icons/Competition.png');
        var notificatiion = require('../../Content/Home/icons/notificatiion.png');
        var power = require('../../Content/Home/icons/power.png');
        
        //css file variables...

        return(
            <div>
                <header>
                    <div class="container-floating Header">
                        <nav class="navbar navbar-toggleable-md navbar-light">
                            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="mainlogo">
                                <a class="navbar-brand MLogo" href="#"><img src={glostarlogo} class="logo"/></a>
                            </div>

                            <div class="collapse navbar-collapse navP" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                    <form class="searchportion">
                                    <input class="form-control Search" type="text" placeholder="Search..."/>
                                    <button class="btn my-2 my-sm-0 uploadbutton" type="submit"><img src={upload} class="uploadicon"/></button>
                                    </form>
                                    </li>
                                </ul>

                                <div class="navright">
                                    <a href="#"><img src={house} class="naviconHouse"/></a>
                                    <a href="#"><img src={competition} class="naviconCompetition"/></a>
                                    <a href="#"><img src={notificatiion} class="naviconNotification"/></a>
                                    <a href="#"><img src={manandwoman} class="navprofilepic"/></a>
                                    <button class="btn my-2 my-sm-0 accountholdername" type="submit">Your First name here</button>
                                    <a href="#"><img src={power} class="naviconPower"/></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

            </div>
        );
    }
}