"use strict";angular.module("bonmotApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngMaterial","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/editWord/:word",{templateUrl:"views/editword.html",controller:"EditWordCtrl",controllerAs:"editWord"}).otherwise({redirectTo:"/"})}]).config(["$mdThemingProvider",function(a){a.theme("default").primaryPalette("pink",{"default":"800","hue-1":"700"}).accentPalette("blue")}]),angular.module("bonmotApp").service("WordService",function(){var a=this;a.words=[{id:1,word:"the",frequency:244472,category:""}]}),angular.module("bonmotApp").service("CategoryService",function(){var a=this;a.categories=[{label:"Common",keystroke:"c"},{label:"Bad word (junk)",keystroke:"b"},{label:"Good word",keystroke:"g"}]}),angular.module("bonmotApp").controller("MainCtrl",["$scope","$mdToast",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],this.username="peter",a.openToast=function(a){b.show(b.simple().content("Hello Conrad!"))}}]),angular.module("bonmotApp").controller("AboutCtrl",function(){var a=this;a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma","Carrots"]}),angular.module("bonmotApp").controller("EditWordCtrl",["$routeParams","WordService","CategoryService",function(a,b,c){var d=this;d.word=a.word,d.wordStats=b.words[0],d.categories=c.categories,d.changeCategory=function(a){console.log="Aha",d.wordStats.category=a},d.changeCategoryByKey=function(a){console.log="Baha",d.wordStats.category=a}}]),angular.module("bonmotApp").run(["$templateCache",function(a){a.put("views/about.html",'<div ng-controller="AboutCtrl as about"> <p>This is the about view.</p> <div ng-repeat="name in about.awesomeThings"> {{name}} </div> </div>'),a.put("views/editword.html",'<div ng-controller="EditWordCtrl as editWord" ng-keypress="editWord.changeCategoryByKey($event)"> <p>Place the word below in a category</p> <div layout="row"> <md-card flex="75"> <md-card-content><h2>{{editWord.word}}</h2></md-card-content> <md-card-footer> Frequency: {{editWord.wordStats.frequency | number : 0}} <span flex></span> Category: {{editWord.wordStats.category}} </md-card-footer> </md-card> </div> <div layout="row"> <md-card flex="25" ng-repeat="category in editWord.categories"> <md-card-content> {{category.label}} <h2>{{category.keystroke}}</h2> <md-button class="md-fab md-primary" aria-label="{{category.label}}" ng-click="editWord.changeCategory(category.label)"> <md-tooltip> {{category.label}} </md-tooltip> <md-icon icon="img/icons/ic_play_arrow_24px.svg"></md-icon> </md-button> </md-card-content> </md-card> </div> </div>'),a.put("views/main.html",'<div ng-controller="MainCtrl as main"> <div layout="row" class="md-accent"> <md-card flex="45" class="md-accent md-whiteframe-z3" style="background-color:#3F51B5; color:white"> <md-card-content> <h1>Felici</h1> <p> An experienced company of singers and musicians, bringing classical, opera and musical songs to audiences. </p> <p> In addition to our own events, we perform charity, corporate and personal events tailored to your needs. </p> <p> We are based in the Hertfordshire and Bedfordshire regions. </p> </md-card-content> </md-card> <md-card flex="55"> <img height="160" ng-src="images/2015-05_Singers_photo.57391668.jpg" class="md-card-image" alt="Mozart"> <md-card-content> Felici founders Margaret and Zoe with baritone Tim Hobman </md-card-content> <md-footer> </md-footer> </md-card> </div> <div layout="row"> <md-card flex="100"> <md-card-content> <h2 class="md-title">An Evening with Mozart, <small>7.30 pm Saturday 16 January 2016</small></h2> <p> Soprano - Zoe Jasko<br> Tenor - Gordon Hodges<br> Pianist - Margaret Johnson </p> <p> In aid of the <a href="http://www.kidney.org.uk/">National Kidney Federation</a><br> Tickets: £10 including refreshments<br> St Andrew’s Church, Ampthill (<a href="https://www.google.co.uk/maps/place/St+Andrews+C+Of+E+Church/@52.0331161,-0.4919675,17z/data=!4m6!1m3!3m2!1s0x4877b35b054865c9:0xb59c6f6878a9a52e!2sSt+Andrews+C+Of+E+Church!3m1!1s0x4877b35b054865c9:0xb59c6f6878a9a52e">map<a>)<br> Tickets and information from 01525 404625<br> Tickets can also be bought on the door (subject to availability) </a></p> </md-card-content> </md-card> </div> <md-divider> <h2 id="events">Events</h2> <div layout="row"> <md-card flex="100"> <md-card-content> <h2 class="md-title">Upcoming Events</h2> <p> 2016 January, 16 - <i>Ampthill</i> - An Evening with Mozart, in aid of the <a href="http://www.kidney.org.uk/">National Kidney Federation</a><br> 2016 March, 5 - <i>Hoxne, Suffolk</i> - Phantom of the Paris Opera House<br> 2016 April, 23 - <i>Malvern</i> - Charity Concert<br> 2016 May, 7 - <i>Pirton, Herts</i> - Phantom of the Paris Opera House<br> 2016 September - <i>Welwyn Garden City</i> - An evening of Fauré<br> 2017 Summer - The Marriage of Figaro, Mozart </p> </md-card-content> </md-card> </div> <div layout="row"> <md-card flex="100"> <md-card-content> <h2 class="md-title">Past Events</h2> <p> 2015 May - <i>Welwyn Garden City</i> - An Enchanted Evening of Song <br> 2015 March - <i>Harpenden</i> - Corporate club dinner </p> </md-card-content> </md-card> </div> <md-divider> <h2 id="music">Our musical range</h2> <div layout="row"> <md-card flex="33"> <img ng-src="images/Croce-Mozart-Detail.1953d50e.jpg" class="md-card-image" alt="Mozart"> <md-card-content> <h2 class="md-title">Mozart</h2> <p> Opera and classical songs. Mozart and Rossini to Faure and Lieder. </p> </md-card-content> </md-card> <md-card flex="33"> <img ng-src="images/Sir_Arthur_Seymour_Sullivan.8c6b379e.jpg" class="md-card-image" alt="Mozart"> <md-card-content> <h2 class="md-title">Sullivan (G&amp;S)</h2> <p> Operetta and Victorian and Edwardian music hall. </p> </md-card-content> </md-card> <md-card flex="33"> <img ng-src="images/Ivor_Novello_mug.859b1f60.jpg" class="md-card-image" alt="Mozart"> <md-card-content> <h2 class="md-title">Ivor Novello</h2> <p> Twentieth century songs from Novello, Sondheim and many others. </p> </md-card-content> </md-card> </div> <md-divider></md-divider> <h2 id="founders">Our founders</h2> <div layout="row"> <md-card flex="50"> <md-header> </md-header> <md-card-content> <h1 class="md-title">Margaret Johnson, <i class="md-body-2">Founder</i></h1> <p> Margaret trained at the Royal College of Music. She has worked as music teacher, primary headteacher and is currently a lay minister in the Benefice of Holwell, Ickleford and Pirton. She has been involved with local choirs and musical societies in North Herts, both as accompanist and conductor, for more years than she cares to count! More recently Margaret has been MD for a number of shows for Putteridge Bury G&amp;S Society, including their current production, Princess Ida. A founder member of Pirton Players, Margaret has also led many of their musical productions, most recently Guys and Dolls. Margaret especially enjoys working as accompanist and repetiteur. </p> </md-card-content> </md-card> <md-card flex="50"> <md-card-content> <h1 class="md-title">Zoe Jasko, <i class="md-body-2">Founder</i></h1> <p> Zoe is an experienced soprano performing stage roles and at concert bookings. In theatre, she has played, amongst others, such lovely parts as Mabel in "Pirates of Penzance", Baker\'s Wife in "Into the Woods" and Tzietel in "Fiddler on the Roof". In concert, she has supported the Welwyn Garden City Male Voice choir as their guest soloist and performed in the Welwyn Garden City Friends Meeting House series of concerts. She has also sung at weddings, funerals and corporate events. Zoe has been on the production commitee for many stage performances at theatres and other venues in Hertfordshire and Devon. </p> </md-card-content> </md-card> </div> <md-card flex="100" id="contacts"> <md-card-content> <h1 class="md-title"><i class="material-icons">email</i>Contact Us</h1> For bookings, email us at <a href="mailto:bookings@felici.company?Subject=Booking%20Enquiry">bookings@felici.company</a> <br> For general enquiries, email our Musical Director at <a href="mailto:md@felici.company?Subject=Enquiry">md@felici.company</a> </md-card-content> </md-card> <md-divider></md-divider> </div>')}]);