import React from 'react';

export default class Header extends React.Component{
    render(){

        //image variables
        // var manandwomen = require('../../Content/img1/images-of-man-and-woman-in-love.jpg');
        var manandwomen = require('../../Content/profilePage/img1/images-of-man-and-woman-in-love.jpg');
        var notificatiion = require('../../Content/profilePage/icons/notificatiion.png');
        var Competition = require('../../Content/profilePage/icons/Competition.png');
        var house = require('../../Content/profilePage/icons/house_W.png');

        var glostarslogo = require('../../Content/profilePage/icons/glostars_logo_small_lv.png');
        var upload = require('../../Content/profilePage/icons/upload_full_2_A.png');
        var power = require('../../Content/profilePage/icons/power.png');
        //css image variables
        // const mandw = require('');

        // // css variables
        // var Imagebutton = {

        // }


        return(
            <div>
                <header>
                    <div className="container-floating Header">
                    <nav className="navbar navbar-toggleable-md navbar-light">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="mainlogo">
                            <a className="navbar-brand" href="#"><img src={glostarslogo} className="logo"/></a>
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
                                <a href="#"><img src={Competition} className="naviconCompetition"/></a>
                                <a href="#"><img src={notificatiion} className="naviconNotification"/></a>
                                <a href="#"><img src={manandwomen} className="navprofilepic"/></a>
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