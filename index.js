var tweenBarStage0 = [];
var tweenBarStage1 = [];
var tweenBarStage2 = [];

var svgColorPath = 0, svgMainPath = 0;
var svgMaPath, svgClPath ,svgMainPnt , svgClPnt;
var screenLength , scrollPnt;

//window.addEventListener("load", function() {                      //wait for svg to load then...
    
  svgColorPath = document.querySelectorAll("path")[7];
  svgMainPath = document.querySelectorAll("path")[8];

  for( var x = 0 ; x < 7; x++ ){                                 // maybe move out of the load function to remove delay or add load screen
    tweenBarStage0[x] = KUTE.fromTo("#A0"+ x , { path:"#A0"+ x } , { path:"#A1"+ x } , { duration: 12500  });
    tweenBarStage1[x] = KUTE.fromTo("#A0"+ x , { path:"#A1"+ x } , { path:"#A2"+ x } , { duration: 12500  });
    tweenBarStage2[x] = KUTE.fromTo("#A0"+ x , { path:"#A2"+ x } , { path:"#A0"+ x } , { duration: 12500  });
    //pair up each wave with its next stage 
    //https://codepen.io/thednp/pen/dyGZwxm?editors=1010
    
    tweenBarStage0[x].chain(tweenBarStage1[x]);
    tweenBarStage1[x].chain(tweenBarStage2[x]);
    tweenBarStage2[x].chain(tweenBarStage0[x]);
    
    tweenBarStage0[x].start()
   }
//});


window.addEventListener("scroll", function(){                     //move white line to scroll position
  
  screenLength = document.documentElement.scrollHeight;
  scrollPnt = document.documentElement.scrollTop;
  

  svgMainPnt = Math.round( (scrollPnt/screenLength) * 1002 )
  svgClPnt = Math.round((((svgMainPnt - 0) * (1120 - -300)) / (1002 - 0)) + -300) //Calculations to make white line follow scroll
                                                                                  //https://stackoverflow.com/questions/929103
                                                                                  //(((OldValue-OldMin)*(NewMax-NewMin))/(OldMax-OldMin))+NewMin                                      
  svgMaPath = "M0 -300 Q 50 "+svgMainPnt+" 0 1202"
  svgClPath = "M0 -300 Q 53 "+(svgClPnt)+" 0 1202"

  //console.log((svgMainPnt +" "+screenLength))

  svgMainPath.setAttribute("d",svgMaPath);
  svgColorPath.setAttribute("d",svgClPath);
  
});