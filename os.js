/*

os.js v0.2 by cosmic open source projects

*/

windows = false;
ios = false;
macos = false;
unix = false;
linux = false;
ios = false;
android = false
  

if (navigator.appVersion.indexOf("Win")!=-1) 
{
  
windows = true;

}

else if (navigator.appVersion.indexOf("Mac")!=-1)
{

macos = true

}

else if (navigator.appVersion.indexOf("X11")!=-1)
{
  
  unix = true;
} 

else if (navigator.appVersion.indexOf("Linux")!=-1)
{
  
 linux = true;
  
}

else if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    ios = true;

  }
else if( userAgent.match( /Android/i ) )
  {

    android = true;
  }
  
