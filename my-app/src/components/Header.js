import React from 'react';


export default class Header extends React.Component{
    render(){
        return(
            <div>
            <header style="position:fixed;z-index:1030;">
                    <div className="container-floating">

                        <div className ="row RNM">
                            <div className="col-sm-6 col-md-6 col-lg-7 col-xl-6 LGC">
                                <div className="logo"><img src={logo} className="logo"/></div>
                            </div>

                            <button classNameName="btn navber-togglers hidden-xl-up LG-button" type="button" data-toggle="collapse" data-target=".navheadercollapse" aria-expanded="false" aria-controls="CollapseNavbar"> Login</button>

                            <div className=" col-sm-10 col-md-10 col-lg-9 col-xl-6 col-xl-offset-4 hidden-xs navLogin">
                                <nav className="navbar navbar-toggleable-lg navbar-inverse">
                                    <div className="navbar-collapse collapse navheadercollapse">
                                        <ul className="navbar-nav row navigation">

                                        <div className=" nav-item">
                                            <div className="form-group email">
                                                <input className="form-control form-size" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." id="Email" name="Email" placeholder="Email" type="text" value=""/>
                                                <div className="login-bottom-text radio hidden-sm" style="margin-left: 10px;">
                                                    <label className="remember">                   
                                                        <input data-val="true" data-val-required="The Remember me field is required." id="RememberMe" name="RememberMe" type="checkbox" value="true" className="checkbox-circle"/><input name="RememberMe" type="hidden" value="false"/>
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="nav-item">
                                            <div className="form-group remember pass">
                                                <input className="form-control form-size" data-val="true" data-val-required="The Password field is required." id="Password" name="Password" placeholder="Password" type="password"/>
                                                <div className="login-bottom-text hidden-sm" style="margin-left: 10px;"><a href="/Account/ForgotPassword" className="ForgotPassword" style="color: white;">Forgot password?</a></div>
                                            </div>
                                        </div>

                                        <p className="nav-item or" style="margin-left: 10px;">or</p>

                                        <div className="nav-item1">
                                            <div className="facebook" style="margin-left: 10px;">
                                                <a href="/Authorize/Facebook"><img src="/Content/NewDesign/LPIcons/FB%20log%20in.png" className="FB-login"/></a>
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