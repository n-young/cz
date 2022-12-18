---
title: "Drop Tower"
layout: "project"
weight: 0
type: "engineering"
name: "droptower"
description: "CAD, DFM, DFA, Arduino"
---

# Drop Tower

For my ENGN1931D: Design of Mechanical Assemblies class, my team (Kevin LoGiudice, Venkatsai Bellala, Zabari Ross, and I) built a drop tower to impact biological samples, ranging from soft tissue to bone, in a sterile environment by varying weights and drop heights to control the applied force so the sample is damaged but not fractured.

## Process

1) Brainstorm design concepts

2) Decision matrix

3) CAD

4) Design electronics

5) Assembly and refinement

6) Arduino

## Brainstorm

We began by brainstorming potential forms for our drop tower. Classic drop towers (e.g. Instron Dynatup 9400 Series) typically feature an impactor attached to a platform that slides on two rails. Basing our concepts off existing products, we came up with 4 options. 2 are depicted below.

![Drop Tower Options](/img/droptoweroptions.png)

## Decision Matrix

Options 1 and 2 in the matrix (below) are shown above. Ultimately, we decided to move forward with Option 1 as it had the highest weighted score of all the options, though the design ends up going through changes as we refine the hardware, CAD, and electronics.

![Drop Tower Decision Matrix](/img/droptowerdecision.png)

## CAD

Between making the decision matrix and finalizing the CAD, we decided to forgo the cable idea in Option 1 (cables shown in blue), as this might introduce unevenness in platform levelling, require variable motor revolutions as the cable coils built up thickness around the shaft, and require complex electronics such as a electromagnetic clutch for the motor.

Instead, we added a "picker-upper" platform embedded with electromagnets that would attract magnets in the impactor platform and pick it up to the desired height. Then, we cut the voltage supply to release the impactor platform magnets, causing the impactor platform to free fall and impact the biological sample.

My first CAD version is below. It was an initial CAD containing most of the hardware and electronics we wanted, but not yet optimized for manufacturing and assembly.

![Drop Tower CAD 1](/img/droptowerCAD1.png)

The next iteration was designed with DFM and DFA in mind. I CADed everything as if it were to be injection molded, with constant-thickness walls, ribbing (for strength), and cavities (to minimize material). For assembly purposes, I split the base into three parts that could be located to each other and screwed together (the entire base was too big for the print bed).

![Drop Tower CAD 2](/img/droptowerCAD2.png)

## Electronics

The electronic components consist of the following:

→ Force transducers: to sense initial impact and read force values in biological sample

→ Solenoids, 24V: to stop secondary impacts from the impactor; will actuate after initial impact is sensed by force transducers

→ Electromagnets, 5V: to pick up the impactor platform

→ Arduino Uno, 5V: to tie electronic components' signals together

→ Lead Screw Motor, 12V: To precisely lift up picker-upper platform to desired drop height

## Final Product

We didn't have enough time left in the semester to complete the functionality of all the electronics, but next steps would be to have the electronics communicate with each other in Arduino and possibly LabView (force transducer readings). For now, here is a video of the lead screw working:

<iframe src="https://drive.google.com/file/d/14r4gp3mfyXEpXnRA3ieYh5T8YAWu-8Hz/preview" width="640" height="480" allow="autoplay"></iframe>

... And here are some final product images I took and edited:

![Drop Tower Final Images](/img/droptowerfinal-min.png)

Thank you for reading!
