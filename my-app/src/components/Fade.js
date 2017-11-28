import React from 'react';

export default class Fade extends React.Component{
    render(){

        var styleone = {
            backgroundColor: "white"
        };
        
        // var styletwo = {
            
        // }
      
        // var stylethree = {
            
        // }
      
        // var stylefour = {
            
        // }
                                          


        return(
            <div>
                <div className="modal fade modal-md" id="ModelName" tabIndex="-1" role="dialog" aria-labelledby="ModelNameLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="HeaderOfSignup"></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="container PopupSignup">
                                <h5 className="HeaderOfSignup"><b>Sign up</b></h5>
                            
                                <input className="signupFrom" type="text" name="Name" id="Name" placeholder="First name" required autoComplete="off"/>
                                
                                <input className="signupFrom" type="text" name="LastName" id="LastName" placeholder="Last name" required autoComplete="off"/>
                            
                                <input className="signupFrom" type="email" name="Email" id="Email" placeholder="@Resources.Content.Email" required autoComplete="off"/>
                                
                                <input className="signupFrom" type="password" name="Password" placeholder="@Resources.Content.Password (minimum 8 characters)" pattern=".{8,}" required title="Must be at least 8 characters" autoComplete="off"/>
                                <br/>
                                
                                <select className="signupFrom" data-val="true" data-val-required="The Gender field is required." id="Gender" name="Gender" required>
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <br/>
                                <label className="date"><b>Date of birth</b></label>
                                <div>
                                    <select className="day" data-val="true" data-val-number="The field Day must be a number." data-val-required="The Day field is required." id="BirthdayDay" name="BirthdayDay" required>
                                        <option value="">Day</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>

                                    <select className="month" data-val="true" data-val-number="The field Month must be a number." data-val-required="The Month field is required." id="BirthdayMonth" name="BirthdayMonth" required="required">
                                        <option value="">Month</option>
                                        <option value="1">Jan</option>
                                        <option value="2">Feb</option>
                                        <option value="3">Mar</option>
                                        <option value="4">Apr</option>
                                        <option value="5">May</option>
                                        <option value="6">Jun</option>
                                        <option value="7">Jul</option>
                                        <option value="8">Aug</option>
                                        <option value="9">Sep</option>
                                        <option value="10">Oct</option>
                                        <option value="11">Nov</option>
                                        <option value="12">Dec</option>
                                    </select>
                                
                                    <select className="year" data-val="true" data-val-number="The field Year must be a number." data-val-required="The Year field is required." id="BirthdayYear" name="BirthdayYear" required="required">
                                        <option value="">Year</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                    </select>
                                </div>
                            
                                <small>@Resources.Content.AgreeToTerms <a className="Terms date" href="#" data-toggle="modal" data-target="#ModelNameTerm2" aria-hidden="true">@Resources.Content.ToULink</a> </small>
                               
                                <br/>
                                <br/>
                                <button type="submit" className="CreateAccount date">@Resources.Content.CreateAccount</button>
                                <br/>
                                <p className="optionOFSignup">or</p>
                               
                                <a href="/Authorize/Facebook" className="btn AccountSignup"><img src="~/Content/NewDesign/LPIcons/FBsignup.png" className="FB-Signup"/></a>
                            </div>

                            <div className="modal fade modal-md" id="ModelNameTerm2" tabIndex="-1" role="dialog" aria-labelledby="ModelNameLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content" style={styleone}>

                                        <div className="modal-header">
                                            <h5 className="HeaderOfSignup"></h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>



                                        <div className="container PopupSignup">

                                            <h5 className="HeaderOfSignup"><b>Terms of Use</b></h5>

                                            <div className="row">
                                                1. Minimum age for using the Service is 13.
                                                <br />
                                                2. You may not post violent, nude, partially nude, discriminatory, unlawful, infringing, hateful,

                                                pornographic or sexually suggestive photos or other similar content via the Service.
                                                <br />

                                                3.	While uploading any picture please use your common sense
                                                <br />

                                                4.	You are responsible for any activity that occurs through your account and you agree you will not sell,

                                                transfer, license or assign your account, followers, username, or any account rights. You also agree that all

                                                information you provide or provided to Glostars upon registration and at all other times is true, accurate, current

                                                and complete and you agree to update your information as necessary to maintain its truth and accuracy.
                                                <br />

                                                5. You agree that you will not ask, collect or use the login credentials of other Glostars users.
                                                <br />

                                                6. You are responsible for keeping your log in credentials secret and secure.
                                                <br />

                                                7. You must not defame, stalk, bully, abuse, harass, threaten, impersonate or intimidate people or entities and

                                                you must not post private or confidential information via the Service, including, without limitation, your or any other

                                                person's credit card information, social security or alternate national identity numbers, non-public phone numbers or non-public

                                                email addresses.
                                                <br />

                                                8. You may not use the Service for any illegal or unauthorized purpose. You agree to comply with all laws, rules and regulations

                                                (for example, federal, state, local and provincial) applicable to your use of the Service and your Content (defined below), including but

                                                not limited to, copyright laws.
                                                <br />

                                                9.	You are solely responsible for your conduct and any data, text, files, information, usernames, images, graphics, photos, profiles, audio

                                                and video clips, sounds, musical works, works of authorship, applications, links and other content or materials (collectively, "Content") that

                                                you submit, post or display on or via the Service.
                                                <br />

                                                10. You must not change, modify, adapt or alter the Service or change, modify or alter another website so as to falsely imply that it is

                                                associated with the Service or Glostars.
                                                <br />

                                                11.	You must not create or submit unwanted email, comments, stars or other forms of commercial or harassing communications (a/k/a "spam") to any

                                                Glostars users.
                                                <br />

                                                12.	You must not use domain names or web URLs in your username without prior written consent from Glostars.
                                                <br />

                                                13. You must not interfere or disrupt the Service or servers or networks connected to the Service, including by transmitting any worms, viruses,

                                                spyware, malware or any other code of a destructive or disruptive nature. You may not inject content or code or otherwise alter or interfere with the way any

                                                Glostars page is rendered or displayed in a user's browser or device.
                                                <br />

                                                14. You must not create accounts with the Service through unauthorized means,

                                                including but not limited to, by using an automated device, script, bot, spider, crawler or scraper.
                                                <br />

                                                15.	You must not attempt to restrict another user from using or enjoying the Service and you must not

                                                encourage or facilitate violations of these Terms of Use or any other Glostars terms.
                                                <br />

                                                16.	Violation of these Terms of Use may, in Glostars's sole discretion, result in termination of your Glostars

                                                account. You understand and agree that Glostars cannot and will not be responsible for the Content posted on the

                                                Service and you use the Service at your own risk. If you violate the letter or spirit of these Terms of Use, or

                                                otherwise create risk or possible legal exposure for Glostars, we can stop providing all or part of the Service to you.
                                                <br />

                                                17.	Glostars may use the content for marketing purpose with the consent of owner.
                                                <br />
                                                <br />

                                                <strong>Service:</strong>Here the term service has been defined as the Glostars website

                                                offering facility to upload, host, share, star, report and delete picture; also the opportunity

                                                to compete for prizes based on the stars provided by the registered users.
                                            </div>

                                            <div>
                                                <button id="modal-close-btn-2" type="button" className="btn btn-default" aria-label="Close">
                                                    <span aria-hidden="true">Close</span>
                                                </button>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}