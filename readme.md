reference:
    [http://codepen.io/timohausmann/full/qeIga/]
     
     GA code: UA-74111445-1 
     
     [https://developers.google.com/analytics/devguides/collection/analyticsjs/command-queue-reference]
     [https://developers.google.com/analytics/devguides/collection/analyticsjs/creating-trackers]

#demo project
     to show how use webpack with angularjs for creating simple onePage project with three pages.
     each one represent Timer in different way.
     
     page 1: simple timer
        
        just timer that counter down time
        
     page 2: dual timer
        
        two talker in meeting in limit time. every time talker talk timer measurement the time
        
     page 2: chess timer
      
       two player. every player have amount of time to play. timer measurment the time left for each player
       
       
Notes 
=======
- Assume we developing this for the latest Chrome release, so no need to support old browsers.     

Extra point
===========
- example of using Google Analytics (GA) API to folow of using `star` `reset` end more...
- autostart timer from url. Ex.:?t=0:15:00$autostart
- Accept diffrent time formats: 15m, 15 min, 15 minutes, 00:15:00
- predefine buttons timer: 1 min, 5 min, 15 min, 30 min for easy use
- Nice logging UI
- visual effrect for timer complete and running
- custom font for timer and player name
   
- example of unit test for `timer.fct`
   
   
todo: make .map more useful  
todo: make tab work on input button
todo: change the direction of cycle
todo: make server serve build real builfile not from memory
todo: make autostart update url   
     
     
###pre developing init
for testing
     be sure you have `karma-cli` instaled globaly
     `npm i -g karma-cli`