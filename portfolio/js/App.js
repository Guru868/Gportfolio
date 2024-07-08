var Scrollbar = window.Scrollbar;
var app=angular.module('Portfolio',[]);
app.controller('PfController',function($scope,$rootScope,$timeout){
    $scope.Portfolio={
        name:'Rajaguru',
        lastname:'R',
        mobilecode:'+91',
        mobileno:'(+91) 9629329410',
        gmail:'gururr848@gmail.com',
        linkedin:'',
        github:'https://github.com/Guru868',
        theme:false,
        desc1:'Welcome to',
        desc2:'my portfolio website!',
        desc3:"Hey folks, I'm",
        desc4:'Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.',
        downtext:'Download Resume',
        quettext:'Get a free quote',
        designation:[
            {
                role:'Rajaguru',
                desc:''
            },
            {
                role:'UI&UX Designer',
                desc:''
            },
            {
                role:'Web Developer',
                desc:''
            }           
             
        ],
        experience:[
            {
                year:'2022',
                desing:'Client Programmer',
                role:'UX',
                company:'Sardonyx Technology Pvt Ltd.',
                place:'Thanjavur'
            }
        ],
        education:[
            {
                year:'2022',
                course:'Bachelor of Computer Sceince Engineering',
                academy:'As-salam College of Engineering and Technology.',
                place:'Thirumangalakudi',
                percentage:'CGPA-8.74%'
            },
            {
                year:'2018',
                course:'Diploma in Computer Engineering',
                academy:'Elumalaiyan Polytechnic College.',
                place:'Kollumangudi',
                percentage:'Percentage-90%'
            },
            {
                year:'2016',
                course:'HSC',
                academy:'Govt Boys Hr Sec School. ',
                place:'Manalmedu',
                percentage:'Percentage-56%'
            },
            {
                year:'2014',
                course:'SSLC',
                academy:'Govt Boys Hr Sec School. ',
                place:'Manalmedu',
                percentage:'Percentage-60%'
            }
        ]
    };
    $scope.Portfolio.Navbar=[
        {
            name:'About',
            url:'#about'
        },
        {
            name:'Services',
            url:'#service'
        },
        {
            name:'Skils',
            url:'#skils'
        },
        {
            name:'Resume',
            url:'#resume'
        },
        {
            name:'Contact',
            url:'#contact'
        }
];
$timeout(function(){
    var tblcontainera=document.querySelector('body');
    debugger
    Scrollbar.init(tblcontainera);        
},100);
$scope.PfOperation=function(eve,btn,data){
    debugger
if(btn=='theme')
    $scope.Portfolio.theme=!data;
}
});
