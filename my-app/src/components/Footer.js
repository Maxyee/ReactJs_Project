import React from 'react';

export default class Footer extends React.Component{
    render()
    {
        var styleholo = {
            color: "#8B8989"
        }
        return(
            <div>
                <br/>

                <div className="foot">
                    <div className="mainfooter">

                        <div className="footer1">
                            <a href="/Account/AboutUs" className="F1">@Content.About</a>
                            <a href="/Account/Media" className="F1">@Content.Media</a>
                            <a href="/Account/FAQ" className="F1">@Content.FAQs</a>
                            <a href="/Account/Index" className="F1">@Content.Contact</a>
                        </div>


                        <div className="footer2ndPart">

                            <div className="footer2">

                                <div className="follow">
                                    Follow us
                                </div>
                                <div className="foollowIcons">
                                    <a href="https://www.facebook.com/Glostars/"><img src="~/Content/NewDesign/LPIcons/FB.png" className="footericonsF"/></a>
                                    <a href="https://www.instagram.com/glostars_official/"><img src="~/Content/NewDesign/LPIcons/INST.png" className="footericonsIST"/></a>
                                    <a href="https://twitter.com/GlostarsLtd"><img src="~/Content/NewDesign/LPIcons/TW.png" className="footericons"/></a>
                                    <a href="https://vk.com/glostars"><img src="~/Content/NewDesign/LPIcons/VK.png" className="footericons"/></a>
                                    <a href="https://plus.google.com/+Glostars"><img src="~/Content/NewDesign/LPIcons/Gplus.png" className="footericons"/></a>
                                    <a href="https://www.youtube.com/channel/UC-TsszNCBj6QbmLvRwczGLQ"><img src="~/Content/NewDesign/LPIcons/YT.png" className="footericons"/></a>
                                </div>
                            </div>


                            <div className="footer3">
                                <div className="DownloadApp">Download the App</div>
                                <div className="AppIcons">
                                    
                                    <a href="https://play.google.com/store/apps/details?id=com.golstars.www.glostars"><img src="~/Content/NewDesign/LPIcons/Android.png" className="footericons"/></a>

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