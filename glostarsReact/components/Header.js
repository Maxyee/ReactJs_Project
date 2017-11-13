import React from 'react';
import Logo from './HeaderSection/Logo';


export default class Header extends React.Component{
    render() {
        return (
           <header>        
           <div class="row RNM">
               <div class="col-sm-6 col-md-6 col-lg-7 col-xl-6 LGC">
                   {/* <div class="logo"><img src="icons/glostars%20logo%20small%20lv.png" class="logo"/></div> */}
                   <Logo/>
               </div>
               
               <button class="btn navber-togglers hidden-xl-up LG-button" type="button" data-toggle="collapse" data-target=".navheadercollapse" aria-expanded="false" aria-controls="CollapseNavbar"> Login</button>
               
               <div class=" col-sm-10 col-md-10 col-lg-9 col-xl-6 col-xl-offset-4 hidden-xs navLogin">
                   <nav class="navbar navbar-toggleable-lg navbar-inverse">
                       <div class="navbar-collapse collapse navheadercollapse">
                           <ul class="navbar-nav row navigation">
                               <div class=" nav-item">
                                   <div class="form-group email">
                                       <input type="text" class="form-control form-size" placeholder="Email"/>
                                       <div class="login-bottom-text radio hidden-sm">
                                           <label class="remember">
                                             <input type="radio" id="" class="checkbox-circle"/>
                                             Remember me
                                           </label>
                                       </div>
                                   </div>
                               </div>

                               <div class="nav-item">
                                   <div class="form-group remember pass">
                                       <input type="text" class="form-control form-size" placeholder="Password"/>
                                       <div class="login-bottom-text hidden-sm"><a href="#" class="ForgotPassword">Forgot password?</a></div>
                                   </div>
                               </div>

                               <div class="nav-item logB">
                                   <div class="form-group">
                                       <input type="button" value="Log in" class="btn btn-default btn-header-login login-button"/>
                                   </div>
                               </div>
                               <p class="nav-item or">or</p>
               
                               <div class="nav-item1">
                                   <div class="facebook">
                                       <a href="#"><img src="LPIcons/FB%20log%20in.png" class="FB-login"/></a>
                                   </div>
                               </div>
                           </ul>
                       </div>
               
                   </nav>
               </div>
           </div>        
       </header>
        );
     }
}