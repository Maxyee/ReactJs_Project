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
                    <div className="container-floating Header">
                        <nav className="navbar navbar-toggleable-md navbar-light">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="mainlogo">
                                <a className="navbar-brand MLogo" href=".."><img src={glostarlogo} className="logo"/></a>
                            </div>

                            <div className="collapse navbar-collapse navP" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                    <form className="searchportion">
                                    <input className="form-control Search" type="text" placeholder="Search..."/>
                                    <button className="btn my-2 my-sm-0 uploadbutton" type="submit"><img src={upload} className="uploadicon"/></button>
                                    </form>
                                    </li>
                                </ul>

                                <div className="navright">
                                    <a href="#"><img src={house} className="naviconHouse"/></a>
                                    <a href="#"><img src={competition} className="naviconCompetition"/></a>
                                    <a href="#"><img src={notificatiion} className="naviconNotification"/></a>
                                    <a href="#"><img src={manandwoman} className="navprofilepic"/></a>
                                    <button className="btn my-2 my-sm-0 accountholdername" type="submit">Your First name here</button>
                                    <a href="#"><img src={power} className="naviconPower"/></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

            </div>
        );
    }
}