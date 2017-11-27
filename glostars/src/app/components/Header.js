import React from 'react';
import './NAV.css'


export class Header extends React.Component {
    render(){

        // var headerStyle = {
        //     position:fixed,
        //     zIndex:1030
        // }

        // var Color = {
        //     fontSize:20
        // };

        return(
            <div>
                {/* <h1 style={Color}>i am from header</h1> */}
                <header style="position:fixed;z-index:1030;">
                    <div class="container-floating">

                        <div class ="row RNM">
                            <div class="col-sm-6 col-md-6 col-lg-7 col-xl-6 LGC">
                                <div class="logo"><img src="/Content/NewDesign/icons/glostars%20logo%20small%20lv.png" class="logo"/></div>
                            </div>

                            <button class="btn navber-togglers hidden-xl-up LG-button" type="button" data-toggle="collapse" data-target=".navheadercollapse" aria-expanded="false" aria-controls="CollapseNavbar"> Login</button>

                            <div class=" col-sm-10 col-md-10 col-lg-9 col-xl-6 col-xl-offset-4 hidden-xs navLogin">
                                <nav class="navbar navbar-toggleable-lg navbar-inverse">
                                    <div class="navbar-collapse collapse navheadercollapse">
                                        <ul class="navbar-nav row navigation">

                                        <div class=" nav-item">
                                            <div class="form-group email">
                                                <input class="form-control form-size" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." id="Email" name="Email" placeholder="Email" type="text" value=""/>
                                                <div class="login-bottom-text radio hidden-sm" style="margin-left: 10px;">
                                                    <label class="remember">                   
                                                        <input data-val="true" data-val-required="The Remember me field is required." id="RememberMe" name="RememberMe" type="checkbox" value="true" class="checkbox-circle"/><input name="RememberMe" type="hidden" value="false"/>
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="nav-item">
                                            <div class="form-group remember pass">
                                                <input class="form-control form-size" data-val="true" data-val-required="The Password field is required." id="Password" name="Password" placeholder="Password" type="password"/>
                                                <div class="login-bottom-text hidden-sm" style="margin-left: 10px;"><a href="/Account/ForgotPassword" class="ForgotPassword" style="color: white;">Forgot password?</a></div>
                                            </div>
                                        </div>

                                        <p class="nav-item or" style="margin-left: 10px;">or</p>

                                        <div class="nav-item1">
                                            <div class="facebook" style="margin-left: 10px;">
                                                <a href="/Authorize/Facebook"><img src="/Content/NewDesign/LPIcons/FB%20log%20in.png" class="FB-login"/></a>
                                            </div>
                                        </div>
                            
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}