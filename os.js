windows = false;
ios = false;
macos = false;
unix = false;
linux = false;
ios = false;
  

if (navigator.appVersion.indexOf("Win")!=-1) windows = true;

if (navigator.appVersion.indexOf("Mac")!=-1) macos = true;

if (navigator.appVersion.indexOf("X11")!=-1) unix = true;

if (navigator.appVersion.indexOf("Linux")!=-1) linux = true;

if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    ios = true;

  }
  
