import React from 'react';

export class Header extends React.Component {
    render(){
        return(
            <div>
                <header style="position: fixed;z-index:1030;">
                    <div class="container-floating">

                        <div class="row RNM">
                            <div class="col-sm-6 col-md-6 col-lg-7 col-xl-6 LGC">
                                <div class="logo"><img src="~/Content/NewDesign/icons/glostars%20logo%20small%20lv.png" class="logo"/></div>
                            </div>

                            <button class="btn navber-togglers hidden-xl-up LG-button" type="button" data-toggle="collapse" data-target=".navheadercollapse" aria-expanded="false" aria-controls="CollapseNavbar"> Login</button>

                            <div class=" col-sm-10 col-md-10 col-lg-9 col-xl-6 col-xl-offset-4 hidden-xs navLogin">
                                <nav class="navbar navbar-toggleable-lg navbar-inverse">
                                    <div class="navbar-collapse collapse navheadercollapse">
                                        <ul class="navbar-nav row navigation">


                                            @Html.Partial("Login2", new LoginViewModel())
                                        
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