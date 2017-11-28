import React from 'react';

export default class Footer extends React.Component{
    render()
    {
        var styleholo = {
            color: "#8B8989"
        };

        var facebook = require('../../Content/NewDesign/LPIcons/FB.png');
        var instagram = require('../../Content/NewDesign/LPIcons/INST.png');
        var twitter = require('../../Content/NewDesign/LPIcons/TW.png');
        var VK = require('../../Content/NewDesign/LPIcons/VK.png');
        var plus = require('../../Content/NewDesign/LPIcons/Gplus.png');
        var youtube = require('../../Content/NewDesign/LPIcons/YT.png');
        var android = require('../../Content/NewDesign/LPIcons/Android.png');

        return(
            <div>
                <br/>

                <div className="foot">
                    <div className="mainfooter">

                        <div className="footer1">
                            <a href="/Account/AboutUs" className="F1">About</a>
                            <a href="/Account/Media" className="F1">Media</a>
                            <a href="/Account/FAQ" className="F1">FAQs</a>
                            <a href="/Account/Index" className="F1">Contact</a>
                        </div>


                        <div className="footer2ndPart">

                            <div className="footer2">

                                <div className="follow">
                                    Follow us
                                </div>
                                <div className="foollowIcons">
                                    <a href="https://www.facebook.com/Glostars/"><img src={facebook} className="footericonsF"/></a>
                                    <a href="https://www.instagram.com/glostars_official/"><img src={instagram} className="footericonsIST"/></a>
                                    <a href="https://twitter.com/GlostarsLtd"><img src={twitter} className="footericons"/></a>
                                    <a href="https://vk.com/glostars"><img src={VK} className="footericons"/></a>
                                    <a href="https://plus.google.com/+Glostars"><img src={plus} className="footericons"/></a>
                                    <a href="https://www.youtube.com/channel/UC-TsszNCBj6QbmLvRwczGLQ"><img src={youtube} className="footericons"/></a>
                                </div>
                            </div>


                            <div className="footer3">
                                <div className="DownloadApp">Download the App</div>
                                <div className="AppIcons">
                                    
                                    <a href="https://play.google.com/store/apps/details?id=com.golstars.www.glostars"><img src={android} className="footericons"/></a>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="terms">
                        <a href="/Data/Terms" className="TR">Terms</a>
                        <a href="/Data/Index" className="TR">Privacy</a>
                        <a className="TR" style={styleholo}>&copy;Glostars 2017</a>
                    </div>
                </div>
            </div>
        );
    }
}