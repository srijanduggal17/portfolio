(this["webpackJsonpsrijanduggal17.github.io"]=this["webpackJsonpsrijanduggal17.github.io"]||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),o=s.n(i),n=s(15),c=s.n(n),r=(s(27),s(7)),l=s(2),d=(s(28),s(16)),h=s(17),m=s(21),p=s(19),j=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this.props,t=(e.match,e.location),s=(e.history,t.pathname===this.props.to?"nav-link active":"nav-link");return Object(a.jsx)(r.b,{to:this.props.to,className:s,exact:this.props.exact,children:this.props.children})}}]),s}(o.a.Component),b=Object(l.g)(j);function u(e){return Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("a",{className:"navbar-brand fs-3",href:"/",children:"Srijan Duggal"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",style:{fontWeight:"bold"},children:Object(a.jsxs)("ul",{className:"nav navbar-nav",style:{marginLeft:"auto"},children:[Object(a.jsx)(b,{to:"/projects",children:"Projects"}),Object(a.jsx)(b,{to:"/",children:"About Me"}),Object(a.jsx)(b,{to:"/contact",children:"Contact Me"})]})})]})})}function g(e){return Object(a.jsxs)("div",{className:"w-100",style:{backgroundColor:"#99B9CC"},children:[Object(a.jsx)("h3",{className:"pt-5 pb-5 text-center",children:"welcome"}),Object(a.jsx)("p",{className:"m-auto text-center w-75 pb-5",children:"My name is Srijan Duggal. I'm an avid learner and my mission is to help people through my creations (hardware and software). I'm a Mechanical Engineer by training, but my passion for learning has led me to proficiency in a variety of skillsets. Check out some of my cool projects!"})]})}var x=s(20);s(34);function f(e){var t=Object(l.f)().url;return Object(a.jsx)("div",{className:"col-sm-3 pt-4 thumbcard",children:Object(a.jsxs)(r.b,{to:"".concat(t,"/").concat(e.projectURL),children:[Object(a.jsx)("img",{src:"thumbnails/".concat(e.imgPath),style:{width:"100%"}}),Object(a.jsxs)("div",{className:"thumbtext",children:[Object(a.jsx)("p",{className:"text-center display-7 fs-4",children:e.title}),Object(a.jsx)("p",{className:"text-center",children:e.desc}),Object(a.jsx)("p",{className:"text-end fst-italic",children:e.timeline}),Object(a.jsx)("p",{className:"bottom-align-text skills fw-bold",children:e.skills.join(", ")})]})]})})}function w(e){var t={maxHeight:"60vh",maxWidth:"100%"};return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"text-center display-4 pt-2 pb-6",children:"2048 Playing Agent"}),Object(a.jsxs)("div",{className:"w-100 container-fluid",children:[Object(a.jsxs)("div",{className:"row",style:{backgroundColor:"#f3b27a"},children:[Object(a.jsx)("div",{className:"col-sm-3",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/2048/2048 Game.png",style:t})}),Object(a.jsx)("div",{className:"col text-center fs-4 fw-bold d-flex align-items-center",style:{color:"white"},children:Object(a.jsx)("p",{children:"I made a bot to play this online game called 2048. I had it choose actions based on two sets of rules: one that my friend and I came up with and one that it tried to learn using reinforcement learning."})})]}),Object(a.jsxs)("div",{className:"row",style:{backgroundColor:"#eee4da"},children:[Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",style:{color:"#786e66"},children:Object(a.jsx)("p",{children:"When I was in high school, I used to play this game. The way it works is you have a tile area and the goal is to create a 2048 tile. You can press the left/right/up/down arrow keys, and when you do, each tile moves in the direction you pressed until it hits another tile. If it hits a tile of equal value, then the two tiles combine and the value doubles: when a 2 tile and a 2 tile collide, they become a 4 tile. Every time you move, a 2 or 4 tile is randomly added to the board."})}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"https://thumbs.gfycat.com/ImpassionedShadyFlounder-small.gif",style:t})})]}),Object(a.jsxs)("div",{className:"row",style:{backgroundColor:"#f77c5f"},children:[Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("iframe",{className:"pt-4 mx-auto pb-4 d-block",src:"https://www.youtube.com/embed/H8oM8vUvROc",style:{height:"80vh",width:"100%"}})}),Object(a.jsx)("div",{className:"col text-start d-flex fs-5 align-items-center pt-4",style:{color:"white"},children:Object(a.jsxs)("p",{children:["This was a common game amongst kids in my school, and after learning about reinforcement learning during my Deep Learning class, I thought it would be fun to make a bot that could play. I started by using ",Object(a.jsx)("span",{className:"fw-bold",children:"Selenium"})," and ",Object(a.jsx)("span",{className:"fw-bold",children:"Python"})," to scrape the game website, and to get the values of the tiles as well as the score. Once I had made a way to interact with the website using Python functions, I started working on two agents. The first agent played the game according to a set of rules that my friend and I created. The second agent played the game using a learned policy (from Deep Reinforcement Learning). My friend and I played many games and thought about what we would do in various situations to come up with rules to beat it. Eventually we were able to come up with a policy that almost guaranteed winning, at least as frequently as we would win if we were playing (see video)."]})})]}),Object(a.jsx)("div",{className:"row",style:{backgroundColor:"#eee1c9"},children:Object(a.jsx)("div",{className:"col text-start fs-5",children:Object(a.jsxs)("p",{className:"w-100 mx-auto pt-4",children:["For the Reinforcement Learning agent, I used some convolution layers and a feed-forward neural network. For the reward function, I used the score and tried training the agent. After training for a while, it was able to do some moves that seemed like things my friend and I would do, but it lost well before reaching 2048. I didn\u2019t have any experience in reinforcement learning at this time, so I wasn\u2019t really sure how to move forward. Looking back on it now (I still haven\u2019t gained any experience in reinforcement learning since then, but I have done more deep learning projects using convolutional neural networks), I think it needed more training time and potentially a different reward function. While I did not finish training a successful reinforcement learning agent, I was able to interact with the game website and use ",Object(a.jsx)("span",{className:"fw-bold",children:"PyTorch"})," in real-time to play it, which to me was a success. One day I would like to revisit this and finish training an agent that can win!"]})})}),Object(a.jsxs)("div",{className:"row fs-5",children:[Object(a.jsx)("div",{className:"col text-center pt-4",children:Object(a.jsxs)("p",{children:["The game can be found at ",Object(a.jsx)("a",{href:"https://play2048.co/",children:"https://play2048.co/"})]})}),Object(a.jsx)("div",{className:"col-sm-6 text-center pt-4 text-break",children:Object(a.jsxs)("p",{children:["GIF credits: ",Object(a.jsx)("a",{href:"https://gfycat.com/impassionedshadyflounder",children:"https://gfycat.com/impassionedshadyflounder"})]})})]})]}),Object(a.jsx)("p",{})]})}function v(e){return Object(a.jsx)("p",{className:"pt-4 text-center display-5",children:e.children})}function O(e){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col mx-auto col-11 text-start d-flex fs-5 align-items-center pt-4",children:Object(a.jsx)("p",{children:e.children})})})}function y(e){return Object(a.jsx)("p",{className:"text-center display-4 pt-2 pb-6",children:e.children})}function k(e){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:e.src,style:{maxHeight:"90vh",maxWidth:"100%"}})})})}function N(e){var t={backgroundColor:"white"},s={backgroundColor:"white"},i={maxHeight:"60vh",maxWidth:"100%"},o={maxHeight:"70vh",maxWidth:"100%"},n={color:"black"},c={color:"black"};return Object(a.jsxs)("div",{children:[Object(a.jsx)(y,{children:"Knee Exoskeleton Controller"}),Object(a.jsxs)("div",{className:"w-100 container-fluid",children:[Object(a.jsxs)("div",{className:"row",style:t,children:[Object(a.jsx)("div",{className:"col-sm-3",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/Knee Exo.jpg",style:i})}),Object(a.jsx)("div",{className:"col text-center fs-4 fw-bold d-flex align-items-center",style:{color:"grey"},children:Object(a.jsx)("p",{children:"This project was part of my undergraduate research at the Exoskeleton and Prosthetics Intelligent Controls (EPIC) Lab with Dr. Aaron Young. I worked on it for two semesters with another undergrad student and learned a lot about working with electronics and sensors for control."})})]}),Object(a.jsxs)("div",{className:"row",style:s,children:[Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",style:n,children:Object(a.jsx)("p",{children:"Some context: the EPIC lab has a focus on devices that humans wear to assist their motion. This project was based on assisting soldiers in walking long distances while carrying their heavy gear. The device was developed by Dr. Frank Hammond\u2019s lab, and our two goals were to control how the device assists the user, and to make it user-friendly. I was excited for the opportunity to gain hands-on technical experience with a project of this scope."})}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Knee Exo/Epic Logo.jpg",style:i})})]}),Object(a.jsxs)("div",{className:"row",style:s,children:[Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/NextFlex Device.png",style:i})}),Object(a.jsx)("div",{className:"col text-start d-flex fs-5 align-items-center pt-4",style:n,children:Object(a.jsx)("p",{children:"At a high level, the device can produce a torque about the knee joint by expanding or contracting two pairs of pneumatic \u201cmuscles\u201d (this is how it helps you walk). The device needs to know how much torque to assist you with at any time. We determined this by measuring the electrical activity of the user\u2019s muscles (this is related to how much the muscle is about to contract) and commanding a torque proportional to this. To make the device user-friendly, we developed a control handle with buttons, switches, and LEDs to allow the user to change the mode that the device was operating in."})})]}),Object(a.jsx)(v,{children:"User Interface"}),Object(a.jsxs)("div",{className:"row",style:t,children:[Object(a.jsx)("div",{className:"col text-start d-flex fs-5 align-items-center pt-4",style:c,children:Object(a.jsx)("p",{children:"The user can control the device \u2013 turning the controller on, calibrating the controller, and setting the device to provide assistance \u2013 all using the simple handle with LED feedback. We designed a PCB for easy mounting of the electronics and a handle to house it."})}),Object(a.jsx)("div",{className:"col-sm-6 d-flex align-items-center",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/NextFlex Handle.png",style:i})})]}),Object(a.jsx)(v,{children:"Hardware"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-6 d-flex align-items-center",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/NextFlex Hardware.png",style:o})}),Object(a.jsx)("div",{className:"col text-start d-flex fs-5 align-items-center pt-4",style:c,children:Object(a.jsx)("p",{children:"The brain of the device is a Raspberry Pi microprocessor, which reads from two sensors: EMG and encoder. The encoder provides information on the angular position of the knee joint, and the EMG captures the muscle activity. The Raspberry Pi only takes digital inputs, so an Analog to Digital Converter (ADC) was necessary to read the EMG signals. The ADC had an SPI communication protocol output, so I learned about how to read this at a low-level and convert the digital pulses to the signal we desired. The digital encoder had a logic level of 5V, but the Raspberry Pi operates on a 3.3V logic level, so a level converter was necessary. The TI Launchpad was provided to us on the device itself, and it performed the low level pressure control in the muscles. We had to communicate with it using the UART protocol."})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-5 d-flex align-items-center",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/RPi Shield Schematic.png",style:o})}),Object(a.jsx)("div",{className:"col-sm-4 d-flex align-items-center",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/RPi Shield Layout.png",style:o})}),Object(a.jsx)("div",{className:"col-sm-3 d-flex align-items-center",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/RPi Shield Prototype.jpg",style:o})})]}),Object(a.jsx)(O,{children:"Once an initial circuit was functional on a breadboard, we designed a PCB shield to sit on top of the Raspberry Pi for a compact profile. The PCB was designed in Autodesk Eagle and then fabricated in The Hive makerspace at Georgia Tech. After we tested the PCB shield using a function generator/oscilloscope and then on the actual Raspberry Pi, we ordered a more professional board from OshPark. Finally, I designed a case for the Raspberry Pi and shield in SolidWorks and 3D printed it."}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-6 d-flex align-items-center",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/RPi Shield.png",style:o})}),Object(a.jsx)("div",{className:"col d-flex align-items-center",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/RPi Shield and Case.jpg",style:o})})]}),Object(a.jsx)(v,{children:"Device Logic and Framework"}),Object(a.jsx)(O,{children:"The logic for the different operating modes of the device (powered on, calibrating, calibrated, and assisting) and the controller was implemented on the Raspberry Pi using Python and ROS. This was my first exposure to ROS, and while I did not lead that aspect of the project, I learned about its purpose, capabilities, and how to use it. A diagram for the ROS nodes we used as well as a state transition diagram for the device are shown."}),Object(a.jsx)(k,{src:"project-assets/Knee Exo/State Machine.png"}),Object(a.jsx)(k,{src:"project-assets/Knee Exo/ROS Nodes.png"}),Object(a.jsx)(v,{children:"Proportional Myoelectric Controller Implementation"}),Object(a.jsx)(O,{children:"The actual controller that determined the commanded assistance torque was a Proportional Myoelectric Controller, adapted from Koller et al[1]. The raw EMG signal is noisy and we wanted the torque profile to be proportional to the overall EMG profile. To create the EMG profile, at any clock cycle of the controller, the RMS of a backward-looking window of the EMG signal was calculated. This created a smooth time series with which we could command the device. The RMS EMG at each clock cycle was compared to the maximum RMS EMG value during the calibration phase to produce the desired torque output (See Equation 1). Essentially, the torque command is a fraction of the device\u2019s maximum torque, and this fraction is determined by the current EMG signal."}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"mx-auto col-sm-6",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/Controller Eqn.png",style:i})})}),Object(a.jsx)(O,{children:"A time series example of what this looks like is shown. This was from an offline computation of the output torque, but the real-time result is the same."}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/Controller Offline.png",style:o})}),Object(a.jsx)("div",{className:"col mx-auto text-start d-flex fs-5 align-items-center pt-4",children:Object(a.jsx)("p",{children:"When the EMG signal is flat, the user\u2019s muscles are in a resting state, however there are still slight torque output values. It is undesirable for the device to be attempting to assist at an almost negligible torque, so during the calibration phase, a threshold RMS EMG level is also calculated."})})]}),Object(a.jsx)(v,{children:"Calibration"}),Object(a.jsx)(O,{children:"The purpose of the calibration phase is to calculate two quantities: the threshold RMS EMG level, and the maximum RMS EMG level. After the user presses the calibration button, they must walk for a short period of time during which the device is recording the device data. This is where the knee encoder is used. We used the fact that walking is a periodic motion to detect a fixed number of gait cycles before computing the two quantities. The encoder signal has some drift, but we found that a peak detection function from the scipy library was sufficient to detect local minima in the series. Once 7 gait cycles had passed, we computed the RMS EMG profile and calculated the maximum (for use in the torque command equation) and the 10th percentile (for use as a threshold to eliminate noise when the muscle is resting)."}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/Encoder vs Time.png",style:i})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 pb-4 mx-auto d-block",src:"project-assets/Knee Exo/Threshold Ex.png",style:i})})]}),Object(a.jsx)(O,{children:"1. Koller, J.R., Jacobs, D.A., Ferris, D.P. et al. Learning to walk with an adaptive gain proportional myoelectric controller for a robotic ankle exoskeleton. J NeuroEngineering Rehabil 12, 97 (2015). https://doi.org/10.1186/s12984-015-0086-5"})]}),Object(a.jsx)("p",{})]})}function I(e){var t={maxHeight:"70vh",maxWidth:"100%"};return Object(a.jsxs)("div",{children:[Object(a.jsx)(y,{children:"Machine Design - Projects"}),Object(a.jsxs)("div",{className:"w-100 container-fluid",children:[Object(a.jsx)(O,{children:"During my Machine Design course, we were assigned three design problems to solve. Prior to this class, I had no experience designing mechanical objects with a structured design approach or with actual engineering backing my design decisions. This was one of my favorite classes in college, as it brought me from someone who did not know how to properly design something to someone who feels comfortable with their foundational skills and excited to apply them."}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-5",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Machine Design/DP1 Fig1.png",style:t})}),Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",children:Object(a.jsx)("p",{children:"The design problems were practical \u2013 there was some context, we had to solve for various stresses, stress concentrations, iteratively choose components from McMaster that satisfied the design criteria as cheaply as possible, and create manufacturing drawings. Each of these projects has a significant amount of analysis to them, so I will give a brief overview of what was required and my full work for each problem is attached (note \u2013 there are mistakes on all three design problems but I wanted to include my work so you can see my though process). All three projects had the similar general context: you are an engineer working at a company that sells Pumps/Pump equipment. A pump system needs to be designed to remove water from low-elevation areas after flooding events."})})]}),Object(a.jsx)(v,{children:"Design Problem 1: Pump Support"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",children:Object(a.jsx)("p",{children:"The focus of this problem was the pump support system. There will be a motor that drives the pump with a belt: the pump and pump support could be in contact with water. Our goal is to design the pump platform, support arms, and the clevis pins to connect those to the fixed support structure. We were given information about the speed and torque of the pump impeller shaft, the minimum tension in the belt, and the pump weight among other specifications."})}),Object(a.jsx)("div",{className:"col-sm-5",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Machine Design/DP1 Fig2.png",style:t})})]}),Object(a.jsx)(v,{children:"Design Problem 2: Pump Shaft"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Machine Design/DP2 Fig1.png",style:t})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Machine Design/DP2 Fig2.png",style:t})})]}),Object(a.jsx)(O,{children:"The focus of this problem is the impeller shaft and the shaft components. The goal here was to select a shaft, key, set screw, bearings, retaining rings, and a tapered pin based on our analysis. We were given information about the RPM and power transmission through the shaft, loads on the pulley, and loads from the impeller among other specifications."}),Object(a.jsx)(v,{children:"Design Problem 3: Gearing System"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Machine Design/DP3 Fig1.png",style:t})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Machine Design/DP3 Fig2.png",style:t})})]}),Object(a.jsx)(O,{children:"The focus of this problem was on gear systems. We were given target RPM / power requirements for the shafts, a range of shaft diameters for each shaft, and some spacing requirements among other specifications. We had to select the gears based on the shaft size, kinematics, stresses and cost."})]})]})}function P(e){var t={maxHeight:"70vh",maxWidth:"100%"};return Object(a.jsxs)("div",{children:[Object(a.jsx)(y,{children:"Hip Exoskeleton Hardware"}),Object(a.jsxs)("div",{className:"w-100 container-fluid",children:[Object(a.jsx)(O,{children:"One semester for my undergraduate research, a big part of my role was working on the mechanical side of our device. This mainly involved designing and manufacturing 3D printed housings for electrical components as well as some static analysis."}),Object(a.jsx)(v,{children:"Electronics Backpack Unit"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-5",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Hip Exo Hardware/Backpack Printed.png",style:t})}),Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",children:Object(a.jsx)("p",{children:"The hip exoskeleton has various electronic components that need to be housed. Every semester, the research team is making improvements to the device, so new PCBs or components are added/removed. My goal was to improve the unit that housed all of the electronics. This unit is positioned on the user\u2019s back. Prior versions were sufficient at the time, but had various areas for improvement: it was difficult to remove individual components (if you wanted to remove something, you had to remove the whole housing and then disassemble the housing), it protruded away from the user\u2019s back too much, causing a larger than desired moment about the user\u2019s center of mass, and the wire management was not ideal."})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Hip Exo Hardware/Backpack CAD SldWrks.png",style:t})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Hip Exo Hardware/Backpack CAD.jpg",style:t})})]}),Object(a.jsx)(O,{children:"To tackle this, I went through many sketches and iterations with the graduate students who worked on the electronics and on the frame of the device. Eventually, I was able to make a unit that was much improved (though not without its flaws) and which allowed for some additional components. An image from the CAD is shown as well as a 3D printed prototype. This was the most complex thing I had designed and it was great experience to puzzle out how everything would fit together in modular way and be manufactured easily."}),Object(a.jsx)(v,{children:"IMU Housings"}),Object(a.jsx)(O,{children:"The hip exoskeleton uses inertial measurement units (IMU) to obtain information about the user\u2019s kinematics. We were using an IMU from Yost Labs and wanted a more secure way of attaching it to the thigh cuffs on the device. It was previously attached using Velcro. Shown are my CAD and the 3D printed result."}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Hip Exo Hardware/Old IMU on Exo.png",style:t})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Hip Exo Hardware/Yost IMU.png",style:t})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Hip Exo Hardware/IMU Holder CAD.png",style:t})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Hip Exo Hardware/IMU Holder v2 Printed.JPG",style:t})})]}),Object(a.jsx)(v,{children:"C Frame Static Analysis"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Hip Exo Hardware/C Frame Image.JPG",style:t})}),Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",children:Object(a.jsx)("p",{children:"The hip exoskeleton has various major components that need to be connected together: two actuators, the electronics unit, and an orthotic back plate. The way they connect is using this frame that we call the C Frame. One of the graduate students was trying to improve this and make it lighter using tubes, so I performed some static analysis for him. This was the first time I had used any of my knowledge from Deformable Bodies class to an actual design, and it was pretty fun although I missed some things. I modeled each side as a cantilevered beam with the actuator\u2019s weight on it, and then I wrote a Python script for easy calculation with different tube parameters. The actual analysis is pretty brief and can be seen here."})})]})]})]})}function E(e){var t={maxHeight:"70vh",maxWidth:"100%"};return Object(a.jsxs)("div",{children:[Object(a.jsx)(y,{children:"Instrumented Insole"}),Object(a.jsxs)("div",{className:"w-100 container-fluid",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Instrumented Insole/Final Insole.jpg",style:t})}),Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",children:Object(a.jsx)("p",{children:"One idea that Dr. Young (my PI) and another professor, Dr. Mazumdar, were working on was a shoe insole that was instrumented with pressure sensors. The idea behind this was to provide more detailed information about the pressure distributed at the ground contact, as well as the change in center of pressure over time. These two pieces of information could be used for controlled various exoskeletons, as they could provide information about a user\u2019s state of balance and kinematic information such as the gait cycle. This project started before I joined, and when my partner and I picked it up, one prototype had been made. We were tasked with making prototypes of various shoe sizes, testing them, and improving the manufacturing procedure."})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",children:Object(a.jsx)("p",{children:"The prior insoles had a small protoboard in them to act like a bus for the ground and power connections of the sensors. This made parts of them stiff and prone to breaking. We started by removing the protoboards and initial molds came out as shown above, with some defects in the upper area of the foot. Additionally, the wiring was a bit messy. We had to make molds for various sizes, which my partner designed and we made out of HDPE on a CNC Router."})}),Object(a.jsx)("div",{className:"col-sm-3",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Instrumented Insole/Initial Molds.png",style:t})}),Object(a.jsx)("div",{className:"col-sm-4",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Instrumented Insole/Insole Molds.png",style:t})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-3",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Instrumented Insole/Rewiring Idea.png",style:t})}),Object(a.jsx)("div",{className:"col-sm-3",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Instrumented Insole/Labview VI.png",style:t})}),Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",children:Object(a.jsx)("p",{children:"Our next step was improving the wiring, so we daisy chained the ground and power connections for each pair of sensors. This came out less messy which we liked. Finally, we worked on testing. I wrote a LabView VI to read and export the sensor data to a file so we could analyze it in MATLAB."})})]}),Object(a.jsx)(k,{src:"project-assets/Instrumented Insole/Walking 2 Raw vs Time.png"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("img",{className:"pt-4 mx-auto pb-4 d-block",src:"project-assets/Instrumented Insole/Walking 2 COP vs Time.png",style:{maxHeight:"80vh",maxWidth:"100%"}})}),Object(a.jsx)("div",{className:"col text-start fs-5 d-flex align-items-center pt-4",children:Object(a.jsx)("p",{children:"After validating that the sensors themselves worked and computing the center of pressure, a next step was to estimate the ground reaction force from the sensors. We started brainstorming how to use some simple machine learning methods to do so and started planning out potential experimental protocols. This was never formalized and completed before the end of the semester, and the following semester I was working on a different project.      "})})]}),Object(a.jsx)(O,{children:"This was a great experience for me \u2013 one skill that I picked up from this was being able to read an electrical datasheet and understand what was going on and what information I needed to look for. I also got exposure to how to modify manufacturing techniques to reduce defects and make the process easier for whoever is manufacturing it. Finally, it was good practice for me in LabView and MATLAB. Overall a really neat project!"})]})]})}var T=[{imgPath:"Knee Exo.jpg",title:"Knee Exoskeleton Controller",desc:"Implemented hardware/software for pneumatic knee exoskeleton control",timeline:"Jan-Dec 2020",skills:["microcontrollers","PCB design","ROS"],projectURL:"knee-exo",projectPage:Object(a.jsx)(N,{})},{imgPath:"Machine Design.png",title:"Machine Design Course Projects",desc:"practical design problems from my Machine Design course",timeline:"Aug-Dec 2020",skills:["machine design"],projectURL:"machine-design",projectPage:Object(a.jsx)(I,{})},{imgPath:"2048 Game.png",title:"2048 Playing Agent",desc:"Bot that plays 2048 using human-based logic & reinforcement learning",timeline:"June-July 2020",skills:["web scraping","reinforcement learning"],projectURL:"2048Agent",projectPage:Object(a.jsx)(w,{})},{imgPath:"Hip Exo Hardware.png",title:"Hip Exoskeleton Hardware",desc:"Various hardware projects I worked on for a robotic hip exoskeleton",timeline:"Aug-Dec 2019",skills:["CAD","3D printing","design"],projectURL:"hipexo-hardware",projectPage:Object(a.jsx)(P,{})},{imgPath:"Insole.jpg",title:"Instrumented Insole",desc:"I worked on manufacturing, improving and testing shoe insoles with pressure sensors ",timeline:"Aug-Dec 2019",skills:["sensors","LabVIEW","MATLAB"],projectURL:"insole",projectPage:Object(a.jsx)(E,{})}];function M(e){return Object(a.jsx)("div",{className:"container-md ml-auto",children:Object(a.jsx)("div",{className:"row ml-auto",children:T.map((function(e){return Object(a.jsx)(f,Object(x.a)({},e))}))})})}function D(e){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Let's get in touch"})})}var C=function(){return Object(a.jsx)(r.a,{children:Object(a.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(a.jsx)(u,{}),Object(a.jsxs)(l.c,{children:[T.map((function(e){return Object(a.jsx)(l.a,{path:"/projects/".concat(e.projectURL),children:e.projectPage})})),Object(a.jsx)(l.a,{path:"/projects",children:Object(a.jsx)(M,{})}),Object(a.jsx)(l.a,{path:"/contact",children:Object(a.jsx)(D,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(g,{})})]})]})})};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cfb4831d.chunk.js.map