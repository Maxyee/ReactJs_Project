import React from 'react';

export default class Fade extends React.Component{
    render(){

        //image file variables
        var manandwomen = require('../../Content/Home/img1/images-of-man-and-woman-in-love.jpg');
        var privacy_competition_photo = require('../../Content/Home/img/privacy_competition_photo.png');
        var imagenumber1 = require('../../Content/Home/img1/numbers-01.jpg');
        var imagenumber2 = require('../../Content/Home/img1/numbers-02.jpg');
        var imagenumber6 = require('../../Content/Home/img1/numbers-06.jpg');
        var imagenumber9 = require('../../Content/Home/img1/numbers-09.jpg');
        var imagenumber12 = require('../../Content/Home/img1/numbers-12.jpg');

        var star1 = require('../../Content/Home/img/Star_small_1.png');
        var star2 = require('../../Content/Home/img/Star_small_2.png');
        var star3 = require('../../Content/Home/img/Star_small_3.png');
        var star4 = require('../../Content/Home/img/Star_small_4.png');
        var comment = require('../../Content/Home/img/comments.png');
        var Delete = require('../../Content/Home/img/delete.png');

        
        var glostarlogo = require('../../Content/Home/icons/glostars_logo_small_lv.png');
        var upload = require('../../Content/Home/icons/upload_full_2_A.png');
        var house = require('../../Content/Home/icons/house_W.png');
        var competition = require('../../Content/Home/icons/Competition.png');
        var notificatiion = require('../../Content/Home/icons/notificatiion.png');
        var power = require('../../Content/Home/icons/power.png');

        var fb = require('../../Content/Home/img/share_fb.png');
        var vk = require('../../Content/Home/img/share_vk_V.png');
        var tw = require('../../Content/Home/img/share_tw.png');
        //css files variables

        return(
            <div>
            <div className="modal fade zeropadding" id="ModelName" tabindex="-1" role="dialog" aria-labelledby="ModelNameLabel">
    	<div className="modal-dialog dialogueMarzin" role="document">
    		<div className="modal-content modalsize">
          
                   <div className="container modalContainer">
        <div className="row FC">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 FC">
               
                <div id="carousel1" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner imageModal">
                        <div className="active carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber9} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber12} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        
                        
                       
                    </div>
                    <div></div>
                </div>
                <div>
                         
                    <div>
                     
                    
                    </div>
                        
                        
                        </div>
                        
                <div className="clearfix slider">
                    <div id="thumbcarousel1" className="carousel slide" data-interval="false">
                        <div className="carousel-inner car">
                            <div className="item active carousel-item">
                                <div data-target="#carousel1" data-slide-to="0" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel1" data-slide-to="1" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel1" data-slide-to="2" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                                <div data-target="#carousel1" data-slide-to="3" className="thumb">
                                    <img src={imagenumber9}/>
                                </div>
                            </div>
                            <div className="item carousel-item">
                                <div data-target="#carousel1" data-slide-to="4" className="thumb">
                                    <img src={imagenumber12}/>
                                </div>
                                <div data-target="#carousel1" data-slide-to="5" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel1" data-slide-to="6" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel1" data-slide-to="7" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                            </div>
                        
                        </div>
                       
                        
                        <a className="carousel-control-prev arrow" href="#thumbcarousel1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next arrow" href="#thumbcarousel1" role="button" data-slide="next">
                            <span className="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        
                    </div>
                   
                </div>
            </div>
        </div>
                       <div className="container-floting commentBox">
                         <div className="profile">
                           <div><img src={"img1/images-of-man-and-woman-in-love.jpg"} className="profilepic_in_comment_box"/></div>
                             <div className="user_name"><h6>name name</h6>
                                  <div className="time_trof"><span>14 hours ago</span><img src="img/privacy_competition_photo.png" className="trofImg float-right"/> </div>   </div>
                           
                           </div>
                           <div className="comment">
                               <div><h6 className="writes_on_commentbox">The quick brown fox jump over the lazy dog <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a></h6></div>
                               <div>
                               
                               <div className="IconsInComment">
                                <div className="star_comment_delete">
                            <a href="#"><img src={star3} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                        
                            <a href="#"><img src={comment} className="comments_count"/></a>
                                    <a href="#"><img src={Delete} className="comments_delete"/></a>
                                 </div>
                                <div className="share float-right">
                                    <span className="share_w">share</span>
                                    <a href="#"><img src={fb} className="share_fb"/></a>
                                    <a href="#"><img src={vk} className="share_vk"/></a>
                                    <a href="#"><img src={tw} className="share_tw"/></a>
                                    </div>
                               
                               
                               </div> 
                              
                               <form className="anyclassName">
                                    <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                                   <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                               
                               </form>
                        <form className="comment_input">
                           <input type="text" placeholder="Write a comment..." className="inputcomment"/>
                           <input type="submit" value="Send" className="sendButton"/>
                           </form>
                               
                               </div>
                              
                              
                               </div>
                       
                       </div>
       
    </div>
          
          
          
            </div>
               </div>
          </div>
          
          
      
      
     
 <div className="modal fade zeropadding" id="ModelName1" tabIndex="-1" role="dialog" aria-labelledby="ModelNameLabel1">
    	<div className="modal-dialog dialogueMarzin" role="document">
    		<div className="modal-content modalsize">
          
                   <div className="container modalContainer">
        <div className="row FC">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 FC">
               
                <div id="carousel2" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner imageModal">
                        <div className="carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="active item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber9} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber12} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        
                        
                       
                    </div>
                    <div></div>
                </div>
                <div>
                         
                    <div>
                     
                    
                    </div>
                        
                        
                        </div>
                        
                <div className="clearfix slider">
                    <div id="thumbcarousel2" className="carousel slide" data-interval="false">
                        <div className="carousel-inner car">
                            <div className="item active carousel-item">
                                <div data-target="#carousel2" data-slide-to="0" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel2" data-slide-to="1" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel2" data-slide-to="2" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                                <div data-target="#carousel2" data-slide-to="3" className="thumb">
                                    <img src={imagenumber9}/>
                                </div>
                            </div>
                            <div className="item carousel-item">
                                <div data-target="#carousel2" data-slide-to="4" className="thumb">
                                    <img src={imagenumber12}/>
                                </div>
                                <div data-target="#carousel2" data-slide-to="5" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel2" data-slide-to="6" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel2" data-slide-to="7" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                            </div>
                
                        </div>
                   
                        
                        <a className="carousel-control-prev arrow" href="#thumbcarousel2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next arrow" href="#thumbcarousel2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        
                    </div>
                   
                </div>
                
                
                
                
            </div>
         
           
            
        </div>
                       <div className="container-floting commentBox">
                         <div className="profile">
                           <div><img src={manandwomen} className="profilepic_in_comment_box"/></div>
                             <div className="user_name"><h6>name name</h6>
                                  <div className="time_trof"><span>14 hours ago</span><img src="img/privacy_competition_photo.png" className="trofImg float-right"/> </div>   </div>
                           
                           </div>
                           <div className="comment">
                               <div><h6 className="writes_on_commentbox">The quick brown fox jump over the lazy dog <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a></h6></div>
                               <div>
                               
                               <div className="IconsInComment">
                                <div className="star_comment_delete">
                            <a href="#"><img src={star3} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                        
                            <a href="#"><img src={comment} className="comments_count"/></a>
                                    <a href="#"><img src={Delete} className="comments_delete"/></a>
                                 </div>
                                <div className="share float-right">
                                    <span className="share_w">share</span>
                                    <a href="#"><img src={fb} className="share_fb"/></a>
                                    <a href="#"><img src={vk} className="share_vk"/></a>
                                    <a href="#"><img src={tw} className="share_tw"/></a>
                                    </div>
                               
                               
                               </div> 
                              
                               <form className="anyclassName">
                                    <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                                   <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                               </form>
                        <form className="comment_input">
                           <input type="text" placeholder="Write a comment..." className="inputcomment"/>
                           <input type="submit" value="Send" className="sendButton"/>
                           </form>
                               
                               </div>
                              
                              
                               </div>
                       
                       </div>
       
    </div>
          
          
          
            </div>
               </div>
          </div>
          
          
    
      <div className="modal fade zeropadding" id="ModelName2" tabindex="-1" role="dialog" aria-labelledby="ModelNameLabel1">
    	<div className="modal-dialog dialogueMarzin" role="document">
    		<div className="modal-content modalsize">
          
                   <div className="container modalContainer">
        <div className="row FC">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 FC">
               
                <div id="carousel3" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner imageModal">
                        <div className="carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="active item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber9} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber12} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        
                        
                       
                    </div>
                    <div></div>
                </div>
                <div>
                         
                    <div>
                     
                    
                    </div>
                        
                        
                        </div>
                        
                <div className="clearfix slider">
                    <div id="thumbcarousel3" className="carousel slide" data-interval="false">
                        <div className="carousel-inner car">
                            <div className="item active carousel-item">
                                <div data-target="#carousel3" data-slide-to="0" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel3" data-slide-to="1" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel3" data-slide-to="2" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                                <div data-target="#carousel3" data-slide-to="3" className="thumb">
                                    <img src={imagenumber9}/>
                                </div>
                            </div>
                            <div className="item carousel-item">
                                <div data-target="#carousel3" data-slide-to="4" className="thumb">
                                    <img src={imagenumber12}/>
                                </div>
                                <div data-target="#carousel3" data-slide-to="5" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel3" data-slide-to="6" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel3" data-slide-to="7" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                            </div>                        
                        </div>
                        
                        
                        <a className="carousel-control-prev arrow" href="#thumbcarousel3" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next arrow" href="#thumbcarousel3" role="button" data-slide="next">
                            <span className="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        
                    </div>
                   
                </div>
                
                
                
                
            </div>
         
           
            
        </div>
                       <div className="container-floting commentBox">
                         <div className="profile">
                           <div><img src="img1/images-of-man-and-woman-in-love.jpg" className="profilepic_in_comment_box"/></div>
                             <div className="user_name"><h6>name name</h6>
                                  <div className="time_trof"><span>14 hours ago</span><img src={privacy_competition_photo} className="trofImg float-right"/> </div>   </div>
                           
                           </div>
                           <div className="comment">
                               <div><h6 className="writes_on_commentbox">The quick brown fox jump over the lazy dog <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a></h6></div>
                               <div>
                               
                               <div className="IconsInComment">
                                <div className="star_comment_delete">
                            <a href="#"><img src={star3} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                        
                            <a href="#"><img src="img/comments.png" className="comments_count"/></a>
                                    <a href="#"><img src={Delete} className="comments_delete"/></a>
                                 </div>
                                <div className="share float-right">
                                    <span className="share_w">share</span>
                                    <a href="#"><img src={fb} className="share_fb"/></a>
                                    <a href="#"><img src={vk} className="share_vk"/></a>
                                    <a href="#"><img src={tw} className="share_tw"/></a>
                                    </div>
                               
                               
                               </div> 
                              
                               <form className="anyclassName">
                                    <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                                   <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                               
                            </form>
                            <form className="comment_input">
                                <input type="text" placeholder="Write a comment..." className="inputcomment"/>
                                <input type="submit" value="Send" className="sendButton"/>
                            </form>
                               
                               </div>
                              
                              
                               </div>
                       
                       </div>
       
    </div>
          
          
          
            </div>
               </div>
          </div>
          
      
      
      <div className="modal fade zeropadding" id="ModelName3" tabindex="-1" role="dialog" aria-labelledby="ModelNameLabel1">
    	<div className="modal-dialog dialogueMarzin" role="document">
    		<div className="modal-content modalsize">
          
                   <div className="container modalContainer">
        <div className="row FC">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 FC">
               
                <div id="carousel4" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner imageModal">
                        <div className="carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        <div className="active item carousel-item">
                            <img src={imagenumber9} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber12} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        
                        
                       
                    </div>
                    <div></div>
                </div>
                <div>
                         
                    <div>
                     
                    
                    </div>
                        
                        
                        </div>
                        
                <div className="clearfix slider">
                    <div id="thumbcarousel4" className="carousel slide" data-interval="false">
                        <div className="carousel-inner car">
                            <div className="item active carousel-item">
                                <div data-target="#carousel4" data-slide-to="0" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel4" data-slide-to="1" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel4" data-slide-to="2" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                                <div data-target="#carousel4" data-slide-to="3" className="thumb">
                                    <img src={imagenumber9}/>
                                </div>
                            </div>
                            <div className="item carousel-item">
                                <div data-target="#carousel4" data-slide-to="4" className="thumb">
                                    <img src={imagenumber12}/>
                                </div>
                                <div data-target="#carousel4" data-slide-to="5" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel4" data-slide-to="6" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel4" data-slide-to="7" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                            </div>                           
                        </div>
                        
                        
                        <a className="carousel-control-prev arrow" href="#thumbcarousel4" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next arrow" href="#thumbcarousel4" role="button" data-slide="next">
                            <span className="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        
                    </div>
                   
                </div>
                
                
                
                
            </div>
         
           
            
        </div>
                       <div className="container-floting commentBox">
                         <div className="profile">
                           <div><img src={manandwomen} className="profilepic_in_comment_box"/></div>
                             <div className="user_name"><h6>name name</h6>
                                  <div className="time_trof"><span>14 hours ago</span><img src="img/privacy_competition_photo.png" className="trofImg float-right"/></div>   </div>
                           
                           </div>
                           <div className="comment">
                               <div><h6 className="writes_on_commentbox">The quick brown fox jump over the lazy dog <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a></h6></div>
                               <div>
                               
                               <div className="IconsInComment">
                                <div className="star_comment_delete">
                            <a href="#"><img src={star3} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                        
                            <a href="#"><img src="img/comments.png" className="comments_count"/></a>
                                    <a href="#"><img src="img/delete.png" className="comments_delete"/></a>
                                 </div>
                                <div className="share float-right">
                                    <span className="share_w">share</span>
                                    <a href="#"><img src={fb} className="share_fb"/></a>
                                    <a href="#"><img src={vk} className="share_vk"/></a>
                                    <a href="#"><img src={tw} className="share_tw"/></a>
                                    </div>
                               
                               
                               </div> 
                              
                               <form className="anyclassName">
                                    <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                                   <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                               
                               </form>
                        <form className="comment_input">
                           <input type="text" placeholder="Write a comment..." className="inputcomment"/>
                           <input type="submit" value="Send" className="sendButton"/>
                           </form>
                               
                               </div>
                              
                              
                               </div>
                       
                       </div>
       
    </div>
          
          
          
            </div>
               </div>
          </div>
          
      
      <div className="modal fade zeropadding" id="ModelName4" tabindex="-1" role="dialog" aria-labelledby="ModelNameLabel1">
    	<div className="modal-dialog dialogueMarzin" role="document">
    		<div className="modal-content modalsize">
          
                   <div className="container modalContainer">
        <div className="row FC">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 FC">
               
                <div id="carousel5" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner imageModal">
                        <div className="carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber9} className="ranimg"/>
                        </div>
                        <div className="active item carousel-item">
                            <img src={imagenumber12} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        
                        
                       
                    </div>
                    <div></div>
                </div>
                <div>
                         
                    <div>
                     
                    
                    </div>
                        
                        
                        </div>
                        
                <div className="clearfix slider">
                    <div id="thumbcarousel5" className="carousel slide" data-interval="false">
                        <div className="carousel-inner car">
                            <div className="item active carousel-item">
                                <div data-target="#carousel5" data-slide-to="0" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel5" data-slide-to="1" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel5" data-slide-to="2" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                                <div data-target="#carousel5" data-slide-to="3" className="thumb">
                                    <img src={imagenumber9}/>
                                </div>
                            </div>
                            <div className="item carousel-item">
                                <div data-target="#carousel5" data-slide-to="4" className="thumb">
                                    <img src={imagenumber12}/>
                                </div>
                                <div data-target="#carousel5" data-slide-to="5" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel5" data-slide-to="6" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel5" data-slide-to="7" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                            </div>
                          
                        </div>
                    
                        <a className="carousel-control-prev arrow" href="#thumbcarousel5" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next arrow" href="#thumbcarousel5" role="button" data-slide="next">
                            <span className="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
                       <div className="container-floting commentBox">
                         <div className="profile">
                           <div><img src={manandwomen} className="profilepic_in_comment_box"/></div>
                             <div className="user_name"><h6>name name</h6>
                                  <div className="time_trof"><span>14 hours ago</span><img src={privacy_competition_photo} className="trofImg float-right"/> </div>   </div>
                           
                           </div>
                           <div className="comment">
                               <div><h6 className="writes_on_commentbox">The quick brown fox jump over the lazy dog <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a></h6></div>
                               <div>
                               
                               <div className="IconsInComment">
                                <div className="star_comment_delete">
                            <a href="#"><img src={star3} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                        
                            <a href="#"><img src={comment} className="comments_count"/></a>
                                    <a href="#"><img src={Delete} className="comments_delete"/></a>
                                 </div>
                                <div className="share float-right">
                                    <span className="share_w">share</span>
                                    <a href="#"><img src={fb} className="share_fb"/></a>
                                    <a href="#"><img src={vk} className="share_vk"/></a>
                                    <a href="#"><img src={tw} className="share_tw"/></a>
                                    </div>
                               
                               
                               </div> 
                              
                               <form className="anyclassName">
                                    <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                                   <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                               
                               </form>
                        <form className="comment_input">
                           <input type="text" placeholder="Write a comment..." className="inputcomment"/>
                           <input type="submit" value="Send" className="sendButton"/>
                           </form>
                               
                               </div>
                              
                              
                               </div>
                       
                       </div>
       
    </div>
          
          
          
            </div>
               </div>
          </div>
      
       <div className="modal fade zeropadding" id="ModelName5" tabindex="-1" role="dialog" aria-labelledby="ModelNameLabel1">
    	<div className="modal-dialog dialogueMarzin" role="document">
    		<div className="modal-content modalsize">
          
                   <div className="container modalContainer">
        <div className="row FC">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 FC">
               
                <div id="carousel6" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner imageModal">
                        <div className="carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber9} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber12} className="ranimg"/>
                        </div>
                        <div className="active item carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        
                        
                       
                    </div>
                    <div></div>
                </div>
                <div>
                         
                    <div>
                     
                    
                    </div>
                        
                        
                        </div>
                        
                <div className="clearfix slider">
                    <div id="thumbcarousel6" className="carousel slide" data-interval="false">
                        <div className="carousel-inner car">
                            <div className="item active carousel-item">
                                <div data-target="#carousel6" data-slide-to="0" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel6" data-slide-to="1" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel6" data-slide-to="2" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                                <div data-target="#carousel6" data-slide-to="3" className="thumb">
                                    <img src={imagenumber9}/>
                                </div>
                            </div>
                            <div className="item carousel-item">
                                <div data-target="#carousel6" data-slide-to="4" className="thumb">
                                    <img src={imagenumber12}/>
                                </div>
                                <div data-target="#carousel6" data-slide-to="5" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel6" data-slide-to="6" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel6" data-slide-to="7" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                            </div>                        
                        </div>
                     
                        
                        <a className="carousel-control-prev arrow" href="#thumbcarousel6" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next arrow" href="#thumbcarousel6" role="button" data-slide="next">
                            <span className="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>                        
                    </div>                  
                </div>    
            </div>  
        </div>
                       <div className="container-floting commentBox">
                         <div className="profile">
                           <div><img src={manandwomen} className="profilepic_in_comment_box"/></div>
                             <div className="user_name"><h6>name name</h6>
                                  <div className="time_trof"><span>14 hours ago</span><img src={privacy_competition_photo} className="trofImg float-right"/> </div>   </div>
                           
                           </div>
                           <div className="comment">
                               <div><h6 className="writes_on_commentbox">The quick brown fox jump over the lazy dog <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a></h6></div>
                               <div>
                               
                               <div className="IconsInComment">
                                <div className="star_comment_delete">
                            <a href="#"><img src={star3} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                        
                            <a href="#"><img src={comment} className="comments_count"/></a>
                                    <a href="#"><img src="img/delete.png" className="comments_delete"/></a>
                                 </div>
                                <div className="share float-right">
                                    <span className="share_w">share</span>
                                    <a href="#"><img src={fb} className="share_fb"/></a>
                                    <a href="#"><img src={vk} className="share_vk"/></a>
                                    <a href="#"><img src={tw} className="share_tw"/></a>
                                </div>
                               
                               
                               </div> 
                              
                               <form className="anyclassName">
                                    <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                                   <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                               </form>

                            <form className="comment_input">
                                <input type="text" placeholder="Write a comment..." className="inputcomment"/>
                                <input type="submit" value="Send" className="sendButton"/>
                            </form>
                               
                               </div>
                              
                              
                               </div>
                       
                       </div>
       
    </div>
          
          
          
            </div>
               </div>
          </div>
          
      
          
       <div className="modal fade zeropadding" id="ModelName6" tabindex="-1" role="dialog" aria-labelledby="ModelNameLabel1">
    	<div className="modal-dialog dialogueMarzin" role="document">
    		<div className="modal-content modalsize">
          
                   <div className="container modalContainer">
        <div className="row FC">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 FC">
               
                <div id="carousel7" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner imageModal">
                        <div className="carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber9} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber12} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="active item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        
                        
                       
                    </div>
                    <div></div>
                </div>
                <div>
                         
                    <div>
                     
                    
                    </div>
                        
                        
                        </div>
                        
                <div className="clearfix slider">
                    <div id="thumbcarousel7" className="carousel slide" data-interval="false">
                        <div className="carousel-inner car">
                            <div className="item active carousel-item">
                                <div data-target="#carousel7" data-slide-to="0" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel7" data-slide-to="1" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel7" data-slide-to="2" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                                <div data-target="#carousel7" data-slide-to="3" className="thumb">
                                    <img src={imagenumber9}/>
                                </div>
                            </div>
                            <div className="item carousel-item">
                                <div data-target="#carousel7" data-slide-to="4" className="thumb">
                                    <img src={imagenumber12}/>
                                </div>
                                <div data-target="#carousel7" data-slide-to="5" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel7" data-slide-to="6" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel7" data-slide-to="7" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                            </div>                      
                        </div>
                     
                        
                        <a className="carousel-control-prev arrow" href="#thumbcarousel7" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next arrow" href="#thumbcarousel7" role="button" data-slide="next">
                            <span className="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>                        
                    </div>                  
                </div> 
            </div> 
        </div>
                       <div className="container-floting commentBox">
                         <div className="profile">
                           <div><img src={manandwomen} className="profilepic_in_comment_box"/></div>
                             <div className="user_name"><h6>name name</h6>
                                  <div className="time_trof"><span>14 hours ago</span><img src={privacy_competition_photo} className="trofImg float-right"/></div></div>
                           
                           </div>
                           <div className="comment">
                               <div><h6 className="writes_on_commentbox">The quick brown fox jump over the lazy dog <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a></h6></div>
                               <div>
                               
                               <div className="IconsInComment">
                                <div className="star_comment_delete">
                            <a href="#"><img src={star3} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                        
                            <a href="#"><img src="img/comments.png" className="comments_count"/></a>
                                    <a href="#"><img src="img/delete.png" className="comments_delete"/></a>
                                 </div>
                                <div className="share float-right">
                                    <span className="share_w">share</span>
                                    <a href="#"><img src={fb} className="share_fb"/></a>
                                    <a href="#"><img src={vk} className="share_vk"/></a>
                                    <a href="#"><img src={tw} className="share_tw"/></a>
                                    </div>
                               
                               
                               </div> 
                              
                               <form className="anyclassName">
                                    <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                                   <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                               
                               </form>
                        <form className="comment_input">
                           <input type="text" placeholder="Write a comment..." className="inputcomment"/>
                           <input type="submit" value="Send" className="sendButton"/>
                           </form>
                               
                               </div>
                              
                              
                               </div>
                       
                       </div>
       
    </div>
          
          
          
            </div>
               </div>
          </div>
          
      
               
       <div className="modal fade zeropadding" id="ModelName7" tabindex="-1" role="dialog" aria-labelledby="ModelNameLabel1">
    	<div className="modal-dialog dialogueMarzin" role="document">
    		<div className="modal-content modalsize">
          
                   <div className="container modalContainer">
        <div className="row FC">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 FC">
               
                <div id="carousel8" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner imageModal">
                        <div className="carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber9} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber12} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber1} className="ranimg"/>
                        </div>
                        <div className="item carousel-item">
                            <img src={imagenumber2} className="ranimg"/>
                        </div>
                        <div className="active item carousel-item">
                            <img src={imagenumber6} className="ranimg"/>
                        </div>
                        
                        
                       
                    </div>
                    <div></div>
                </div>
                <div>
                         
                    <div>
                     
                    
                    </div>
                        
                        
                        </div>
                        
                <div className="clearfix slider">
                    <div id="thumbcarousel8" className="carousel slide" data-interval="false">
                        <div className="carousel-inner car">
                            <div className="item active carousel-item">
                                <div data-target="#carousel8" data-slide-to="0" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel8" data-slide-to="1" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel8" data-slide-to="2" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                                <div data-target="#carousel8" data-slide-to="3" className="thumb">
                                    <img src={imagenumber9}/>
                                </div>
                            </div>
                            <div className="item carousel-item">
                                <div data-target="#carousel8" data-slide-to="4" className="thumb">
                                    <img src={imagenumber12}/>
                                </div>
                                <div data-target="#carousel8" data-slide-to="5" className="thumb">
                                    <img src={imagenumber1}/>
                                </div>
                                <div data-target="#carousel8" data-slide-to="6" className="thumb">
                                    <img src={imagenumber2}/>
                                </div>
                                <div data-target="#carousel8" data-slide-to="7" className="thumb">
                                    <img src={imagenumber6}/>
                                </div>
                            </div>             
                        </div>
                  
                        
                        <a className="carousel-control-prev arrow" href="#thumbcarousel8" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next arrow" href="#thumbcarousel8" role="button" data-slide="next">
                            <span className="carousel-control-next-icon arrowColour" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        
                    </div>          
                </div>     
            </div>

        </div>
                       <div className="container-floting commentBox">
                         <div className="profile">
                           <div><img src={manandwomen} className="profilepic_in_comment_box"/></div>
                             <div className="user_name"><h6>name name</h6>
                                  <div className="time_trof"><span>14 hours ago</span><img src={privacy_competition_photo} className="trofImg float-right"/> </div>   </div>
                           
                           </div>
                           <div className="comment">
                               <div><h6 className="writes_on_commentbox">The quick brown fox jump over the lazy dog <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a> <a href="#"><span className="hashtag">#hashtag</span></a></h6></div>
                               <div>
                               
                               <div className="IconsInComment">
                                <div className="star_comment_delete">
                            <a href="#"><img src={star3} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                              <a href="#"><img src={star1} className="stars_on_comment"/></a>
                        
                            <a href="#"><img src="img/comments.png" className="comments_count"/></a>
                                    <a href="#"><img src="img/delete.png" className="comments_delete"/></a>
                                 </div>
                                <div className="share float-right">
                                    <span className="share_w">share</span>
                                    <a href="#"><img src={fb} className="share_fb"/></a>
                                    <a href="#"><img src={vk} className="share_vk"/></a>
                                    <a href="#"><img src={tw} className="share_tw"/></a>
                                    </div>
                               
                               
                               </div> 
                              
                               <form className="anyclassName">
                                    <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                                   <div className="ViewComment">
                                        <div><img src={manandwomen} className="profilepic_On_comment"/></div><div className="comment"><div className="nameTime"><div className="name_of_commenter">My name</div><p className="comment_time">14 june 2017</p><a href="#"><img src="img/pencil%203.png" className="edit_comment"/></a><a href="#"><img src="img/cross.png" className="edit_comment"/></a></div><div>some text some text some text some text</div></div></div>
                                   
                               
                               </form>
                        <form className="comment_input">
                           <input type="text" placeholder="Write a comment..." className="inputcomment"/>
                           <input type="submit" value="Send" className="sendButton"/>
                           </form>
                               
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