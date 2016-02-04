= Introduction =
Please write a small webapp called Timer (countdown).
Example of usage: in a meeting, when each speaker is limited by time.

= The Layout = 
You have nothing on the screen except single input for user that can enter desired time (say 0:05:00) and 2 buttons labeled “Start” and “Reset”.

= Requirements =
- AngularJS
- Object Oriented Programming

 = Notes =
- Assume you are developing this for the latest Chrome release, so no need to support old browsers.
- We are looking for well written code broken into logical components that interact with each other.

= Extra points (in any order) =
- Check Google Analytics (GA) API and add start event "_trackEvent('timer', 'start', time)". This requires you to create a new account with them to get tracking code.
- Add an option to autostart timer from URL params. Ex.: "?t=0:15:00&autostart"
- Accept different time formats: 15m, 15”, 15 min > 0:15:00 and same including seconds and hours.
- Add predefined buttons timers: 1, 5, 15, 30 min. Add GA events for them if you added analytics.
- Nice looking UI.
- Adding visual effect for timer complete and running. Extra bonus: foreground and background status.
- Visual presentation of remaining time.
- Unit tests.

If you have any questions regarding this assignment, please contact me at alexey.bass@ruckuswireless.com.

-- Alexey


todo: make gulp `serve` for copy index.html and run web-dev-server
todo: make .map more useful  