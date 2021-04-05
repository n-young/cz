---
title: "Horizon Drive"
layout: "project"
weight: 1
type: "design"
name: "horizon_drive"
---

# Horizon Drive

This project is under the USC Space Engineering Research Center (SERC). The purpose of this research project is to create a propellantless propulsion system using the theory of quantized inertia. I worked on designing and manufacturing the Horizon Drive cavity, which is made up of the bowl and the spikes.

## Problem

1) Consumable fuel (liquid, solid, nuclear) is necessary for satellite launch.
2) Large amount of propellant results in heavier vehicles (higher mission costs).


## Process

1) Research quantized inertia theory, Unruh waves, Rindler horizon, and the Casimir effect
2) Research electroplating cavity with silver as well as weight reduction of underlying cavity material
3) Recreate prior researcher’s design in SolidWorks
4) Modify prior design to be CNC manufacturable: rounded edges, separated bowl and spikes, added flanges, changed spikes to be at 90 degree angle instead of concave upwards
5) Generate STL file to be printed with MakerBot 3D printer for cost reduction (for cavity to be made of ABS plastic, coated in silver)
6) Generate CNC toolpaths in NX and SolidWorks (for cavity to be made of aluminum, coated in silver)
7) Operate CNC machine to manufacture test pieces
8) Communicate with local plating services to silver-coat test pieces

## Research

### What is quantized inertia?

![Rindler Horizon](/img/rindler.PNG)


→ A very quickly accelerating object creates a Rindler Horizon behind it -- the boundary where information cannot catch up to the object
→ As an object accelerates towards the cosmic horizon (a constant),
→ → To the right of the object, most of the Unruh waves are allowed
→ → To the left, fewer Unruh waves are allowed (Rindler horizon is much closer compared to cosmic horizon)
→ Net impact of Unruh waves hitting the object is from the right side
→ As a result, the object is pushed to the left, against its acceleration

This is quantized inertia! Because of this phenomenon, we can produce propellantless propulsion.


### What is the Horizon Drive?

Dr. Mike McCulloch of Plymouth University proposed the quantized inertia (QI) theory as well as the Horizon Drive project idea. The Horizon Drive project uses a laser to reflect within a resonant cavity like a waveguide. QI predicts that this will produce thrust in vacuum conditions.


## SolidWorks Modeling/3D Printing


### Cavity Iteration 1:
![Cavity Iteration 1](/img/engineering/horizon_drive/old cavity.jpg)


### Cavity Iteration 2:
![Cavity Iteration 2 Spikes](/img/engineering/horizon_drive/spikes sharp.jpg)
![Cavity Iteration 2 Bowl](/img/engineering/horizon_drive/bowl.jpg)



### Cavity Iteration 3 (Final Design):
![Cavity Iteration 3](/img/engineering/horizon_drive/cavityfinal.png)


## Silver Plating

I contacted several plating companies in the LA area to receive and compare quotes for silver plating my cavity model.

Ultimately, we decided to go with Barry’s Plating.

![Silver Plating 1](/img/IMG_3671.jpg)
![Silver Plating 2](/img/IMG_3672.jpg)


## CNC toolpaths

I generated the CNC toolpaths for the cavity spikes and bowl in both SolidWorks and Nx:

![CNC Toolpaths](/img/cnc.png)


We then tested out the CNC machine on a piece of wax, machining a half spheroid shape to observe the CNC’s ability to machine smooth curved surfaces.


![Half Spheroid Test Object](/img/engineering/horizon_drive/half spheroid test object.jpg)
![Wax CNC Test](/img/wax.png)

## Solution

![Bowl Rendered](/img/bowlrendered.png)
![Spikes Rendered](/img/spikesrendered.png)
![Assembled Rendered](/img/engineering/horizon_drive/main.png)
