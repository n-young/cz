---
title: "Hoppy"
layout: "project"
weight: 0
type: "engineering"
name: "hoppy"
description: "User Research, Rapid Prototyping, Arduino"
---

# Hoppy

Hoppy was a project done in ENGN1930M: Industrial Design. My team consisted of Alice You (RISD), Will Feng (RISD), and me (BrownU). To highlight the work I did for this project, most of this page will detail my contributions.

## Problem

Many people find cutting vegetables and fruits difficult, especially with factors such as age (both young and old), lighting conditions, eyesight, muscle strength, and fear. We decided to design and build a product -- Hoppy -- to aid in the cutting process while still allowing cooks to enjoy the tactile experience of cutting.

## User/Product Research

We began by researching existing accessible kitchenware such as the ones below:
![Hoppy Existing Product Research](/img/hoppyresearch.png)

Key features include bright colors, rounded edges, tactile cues (e.g. grooves), and distance (keeping knife away from user).

We also interviewed 41 people ranging from 20 to 85 years old.

→ Most people said they were afraid of cutting their fingers and that cutting thin pieces consistently was difficult.

→ More than half (56%) said they enjoy cutting because the tactile sensation is satisfying.

→ 56% said they would rather use smaller cutting aids/gadgets than fully automatic cutting machines.

## Design Constraints

Using the data we collected from our user research, we decided on the following design constraints:

→ Size: maximum 10" x 10" x 10"

→ Step size variation: 2 - 20 mm

→ Ergonomics: easy for people with reduced mobility and vision, for both lefties and righties

→ Weight: maximum 4 lbs

→ Cleanup: smooth body, limit # of exposed components


## Mockups

Here are some of my mechanism brainstorm sketches:
![Hoppy Brainstorm Sketches](/img/hoppysketches.png)

We each built a looks-like mockup with basic functionality to test if general form factors worked with the knife and vegetables. Mine is below. It is a scaled-down version to decrease 3D print time, but we extracted enough information to move forward with the rounded form factor and the separation of the electronic core from the detachable and washable body cover.
![Hoppy Pink Prototype](/img/hoppypinkproto.png)

There were 2 key functionalities to decide between:
1) Guides moving (knife guides "reveal" on food where to cut)*

![Hoppy Platform Idea](/img/hoppyplatformidea.png)

2) Platform moving (advances food into guides)*

![Hoppy Guides Idea](/img/hoppyguidesidea.png)


## CAD
My preliminary CAD is below, although we ended up going through many design iterations and building off of these original versions. In this CAD design, I focused on designing for injection molding as well as ease of assembly (e.g. making holes for the screwdriver shaft).
![Hoppy Solidworks](/img/hoppycadproto-min.png)

## Prototypes

We prototyped... a lot. CAD, assembly, and 3D printing were split between all members.
![Hoppy Serious Prototype 1](/img/hoppyseriousproto1.png)
![Hoppy Serious Prototype 2](/img/hoppyseriousproto2.png)
![Hoppy Pins](/img/hoppypins.png)
![Hoppy All Prototypes](/img/hoppyallprotos.png)

## Arduino + Electronics

I did all of the Arduino and electronics for this project. The electronic components used in Hoppy are an Arduino Uno, [reflective IR optical sensor](https://www.adafruit.com/product/2349), [28BYJ-48 stepper motor, ULN2003 stepper motor driver](shorturl.at/hKNW0), sliding potentiometer, and reset button. The electronics are laid out in the video below; I later solder some wires together.

Here is a video of me testing the electronics with one of our mid-stage prototypes. My finger acts as the knife, and the button on the breadboard resets the guides to their fully extended position.

<iframe src="https://drive.google.com/file/d/1EnGN6mBB5_EcR_r4I3JE-M4waedxKc7_/preview" width="640" height="480" allow="autoplay"></iframe>

I wrote the Arduino code in C++. Some of the key lines of the code are below:

→ To map sliding potentiometer position to motor stepsize:

![Hoppy Arduino 1](/img/hoppyarduino1.png)


→ To move motor one step if IR sensor senses a knife cutting down then lifting up (no movement if knife is held there):

![Hoppy Arduino 2](/img/hoppyarduino2.png)


## Final Product

After 3 months of user research, CAD, prototyping, 3D printing, wiring/soldering, coding, and refining, we finished Hoppy!

Below are some renders of the final Hoppy design done in Keyshot.**
![Hoppy Render 1](/img/hoppyrender1.png)
![Hoppy Render 2](/img/hoppyrender2.png)
![Hoppy Render 3](/img/hoppyrender3.png)

Here are some product images I took and edited!
![Hoppy Product Images](/img/hoppyfinal.png)

Next steps would be to package the electronics inside Hoppy, potentially submit Hoppy to a design competition, and maybe patent it. :)

## Bonus: People Using Hoppy

Will making consistent 2mm slices:
<iframe src="https://drive.google.com/file/d/1ETL_O3dWgfhYkOqFqARmUIF3ES5pwQSB/preview" width="640" height="480" allow="autoplay"></iframe>

Our professor Chris Bull and our classmates using Hoppy:
![Hoppy Chris Bull](/img/hoppychrisbull.jpg)

Thank you for reading! If you have specific questions about the design and build process, feel free to reach out.

*Alice's work.

**Will's work.
