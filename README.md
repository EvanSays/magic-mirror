## Yung Magic Mirror

Running off a raspberry pi, the mirror displays current and daily weather, news, a clock, and github pull request notifications. 

### Background / About

I wanted to combine my love of hardware with the JavaScript skills I have learned in the past 4 months at Turing Software and Design. 

The mirror is designed to run off a single Raspberry Pi 3 with Rasberian OS. Electron bundles the React/Redux program, enabling the software to run on the pi. 

### APIs Used

- News Api
- Dark Sky
- Github (OAuth)

### Hardware

- Raspberry Pi 3
- 27" LED Monitor
- Two way mirror

### Primary JavaScript Technoligies Used

- React
- Redux
- Electron
- Moment
- Webpack

### Next Steps

8/2/17
##### Users
Currently I would like to focus on a new user experience, such as enabling them a clean and easy install of the software.
 
##### Performance
I am noticing the cpu on the pi to run upwards of 60% and also some minor heating issues on there as well. I plan to focus on making the React/Redux code to run more efficient.

##### Upgrades
- A physical button used to refresh data on the screen.
- Motion activated screen that turns off/on when user appears/dissapears.
- Integrate google calender and google maps to render daily events and transportation times.
- Voice capability by Alexa with custom voice commands.

### Screenshots

#### Main view:
![screenshot1](https://www.dropbox.com/s/m3l59utxr18kjwt/main_view.png?dl=0)
