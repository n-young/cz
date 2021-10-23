---
title: "Split Flaps"
layout: "project"
weight: 1
type: "engineering"
name: "splitflap"
description: "CAD, Rapid Prototyping, Building"

---

# Split Flaps

As part of my ENGN1931U: The Robots are Coming! class, we worked with artist Eva Goetz to implement engineering solutions into her "Think A Bot It" robot art installations. We worked on designing, building, and installing split flaps into the THINK bot. The link to the Instructables is here, for a more detailed walkthrough: https://www.instructables.com/Split-Flap-Assembly-and-Design/.

*As this is a newly offered class, the split flap building process is original and not outlined by the professor.

## Materials

For this project, we used the following materials:

- Arduino Nano Every

- Stepper motor

- Hall Effect sensor

- Magnet

- 3D printed hub

- Acrylic wheels

- Acrylic side panel

- 50 split flaps

- Vinyl sheets

- Various wires and resistors

- Various screws, bolts, nuts, washers

## Hardware assembly

Some parts we received were premade from Eva's team, such as the hub, acrylic wheels, acrylic side panel, split flaps. We began by assembling these parts but quickly found it tedious and time-consuming to install the split flaps onto the hub. I designed a solution to improve and speed up the process. I modeled in SolidWorks and 3D printed an "assembler," which would allow us to easily slide in the flaps and hold them in place, allowing us to screw down the acrylic wheels when ready.

![Assembler](/img/flap assembler.PNG)
![Assembler and Motor](/img/IMG-2354.JPG)

## Software and Hall Effect Sensor

At the same time we were figuring out the hardware, we began developing the software. We read up on Hall Effect sensors and how to implement them in Arduino.

We worked to create a state driven machine, meaning the split flaps decision making was being made by the state it was currently in. The state begins in “Looking For Home”, then “Found Home”, then “Ready For Input”. The intention was to query a character, look for home, find home, and then calculate the distance from home to the target letter queried.

To get to a destination, or specific letter, the code counts how many letters away from the home position (letter “a”) the desired letter is. With this value (between 0-49), the split flap will need the same number of steps to rotate any given letter, so the value is then multiplied by the degrees per letter (360°/50 = 7.2°) and the steps per degree (2048/360° = 5.688).

![Wheel and Electronics](/img/IMG-2296.JPG)

## Cutting Vinyl Characters

To cut the letters, numbers, punctuation, and images on vinyl sticker sheets, we used an electronic blade cutter: the Cameo Silhouette. We chose a font, vectorized the characters in Adobe Illustrator, sent them into the Silhouette Studio app, and cut the vinyl.

![Cameo Silhouette](/img/IMG-2630.JPG)

We then stuck each character on by hand.

![Sticking Characters](/img/IMG-2641.JPG)


## Debugging

Towards the end, we found that our split flap assembly would catch at certain points (motor would stop turning). I isolated the problem by taking everything apart and debugging each piece of hardware.

To test the motor, I strapped a baggie to the hub connected to the motor. I figured the hub wouldn't add any additional torque to the motor, since its material is light and evenly distributed around the motor shaft axis. I then incrementally added quarters into the baggie, increasing the amount of torque required from the motor to rotate the baggie.

At 6 quarters (~34.02 g), the motor stopped. We'd isolated the "catching" problem to the motor.


<iframe width="560" height="315" src="https://www.youtube.com/embed/0PEnmuwGRd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Final Product

After each team finished their individual modules, we assembled them together for a total of 8 split flaps. With a bit more tweaking, this final split flap assembly will go into the THINK bot!

![Final](/img/engineering/splitflap/main.png)
![THINK Bot](/img/THINKbot.jpg)
