 <!-- BEGIN Pop-up Images Script - - - - - - - - - - - - - - - - - - - -->
 <script language="JavaScript" type="text/javascript">
 <!--
 // Copyright 1999 - 2002 by Ray Stott, Pop-up Images Script ver 2.0
 // OK to use if this copyright is included
 // Script is available at http://www.crays.com/jsc
 // Modified a little by Dave Thwaites (11/2007)

 var pic = null
 var popImg = null  // use this when referring to pop-up image
 var picTitle = null
 var imgCount = 0
 var imgWinName = "popImg"

 function openPopImg(dirName, picName, windowTitle, windowWidth, windowHeight){
   closePopImg()
   picTitle = windowTitle
   imgWinName = "popImg" + imgCount++ //unique name for each pop-up window
   popImg = window.open(picName, imgWinName,
            "toolbar=no,scrollbars=no,resizable=no,width=" 
            + (parseInt(windowWidth)+20)  + ",height=" 
            + (parseInt(windowHeight)+15)) 
   return false
   }
 function closePopImg(){    // close pop-up window if it is open 
   if (navigator.appName != "Microsoft Internet Explorer" 
       || parseInt(navigator.appVersion) >=4) //do not close if early IE
     if(popImg != null) if(!popImg.closed) popImg.close() 
   }
 function setStatus(msg){
   status = msg
   return true
   }
 //-->
 </script>

 <script language="JavaScript1.1" type="text/javascript">  
 <!--
 // for Netscape 3+ and IE 4+
 var priorPic = new Array()
 var noPic = 0
 var foundit = false
 var dir= null
 var priorDir = new Array()

 function openPopImg(dirName, picName,  windowTitle, windowWidth, windowHeight){
   var i = 0
   if(pic == picName && dir == dirName && winOpen()){
     popImg.focus()
     }
   else{
     foundit = false
     for(i=0; i<=noPic; i++){
       if (priorPic[i] == picName && priorDir[i] == dirName)
         foundit = true 
       }
     pic = picName
     dir = dirName
     closePopImg()
     picTitle = windowTitle
     imgWinName = "popImg" + imgCount++ //unique name for each pop-up window
     if(!foundit){
       priorPic[noPic] = pic
       priorDir[noPic++] = dir
       }
     popImg = openPopImgWin(imgWinName, windowWidth, windowHeight)
     }
   return false
   }
 function openPopImgWin(imgWinName, windowWidth, windowHeight){
   var winFeatures = "toolbar=no,scrollbars=no,resizable=no,width=" 
     + windowWidth + ",height=" + windowHeight
   return window.open("../preview.html", imgWinName, winFeatures)
   }
 function winOpen(){
   if(popImg != null){ 
     if(popImg.closed != true) return true; else return false
     }  
   else
     return false
   }
 //-->
 </script>

 <script language="JavaScript1.2" type="text/javascript"> 
 <!--
 // Use this function to control placement of pop-up window
 // in Netscape 4+ and Internet Explorer 4+
 function openPopImgWin(imgWinName, windowWidth, windowHeight){
   var leftX = 20  // distance of window's left side from left of screen
   var topY = 20   // distance of window's top side from top of screen
   var winFeatures = "toolbar=no,scrollbars=no,resizable=no,width=" 
     + windowWidth + ",height=" + windowHeight
   if (leftX>0){
     winFeatures += ",screenX=" + leftX + ",left=" + leftX	
                 + ",screenY=" + topY + ",top=" + topY
     }
   return window.open("../preview.html", imgWinName, winFeatures)
   }
 //-->
 </script>
 <!-- END Pop-up Images Script - - - - - - - - - - - - - - - - - - - - -->