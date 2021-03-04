---
title: "Utilitool"
layout: "project"
weight: 1
type: "design"
name: "utilitool"
---

# Utilitool

In the midst of the COVID-19 pandemic, the need to limit viral contact and spread is more important than ever. One issue that poses a great risk to dispersing and contracting the virus is the public’s interaction with shared spaces, objects, and buttons, including but not limited to door handles, toilet handles, elevator buttons, and shopping carts.

This project aims to design and manufacture a universal tool, the UtiliTool, to interact with commonly-touched surfaces. The tool will go through multiple design iterations, be 3D modeled in SolidWorks, and, finally, 3D printed.


## Problem

1) Viral spread

2) A strong but diffused light source is needed in a specific location, but lamps are not conveniently portable due to their size and weight.


## Process

1) Understand the competitive landscape: conduct secondary market research

2) Do background research on people’s needs, what surfaces they commonly touch, what designs are ergonomic, target consumer population

3) Focus on a specific demographic?

4) Draft multiple designs (user-centered design)

5) Receive other people’s opinions on the designs

6) Decide on a single design keeping others’ feedback and competition in mind

7) Model design in SolidWorks, keeping aesthetics and ergonomics in mind

8) 3D print the prototype

9) Make adjustments, possibly another design iteration

10) 3D print the prototype

11) Repeat steps 7-10 as many times as necessary

12) Test out prototype in different situations

13) Get estimated cost price, selling price, how it’ll be sold to consumers (Amazon, Target etc.)



## Ideation

In the end, I decided on Design 5, considering the opinions of my friends as well.

Design 5 is highly flexible in its potential uses:

- interacting with round doorknobs, bar-shaped door handles, shopping carts, elevator buttons, credit card scanners

- aesthetically pleasing, appealing to both younger and older populations

- can be attached to belt loops, carabiners, key holders, backpack straps, and more -- making it easily transportable and accessible



## Research

### Material

The UtiliTool must be made of flexible material, as it will need to be stretched and compressed without breaking. To choose a material, we must look at each 3D printing material’s Young’s modulus, which is a mechanical property measuring the stiffness of a material. The lower the Young’s modulus, the more flexible the material.

Thermoplastic polyamide, or TPA, is a flexible nylon material that has a Young’s modulus of 0.07 - 0.51 GPa at 20 °C. Its maximum allowed stress is 10 - 40 MPa at 20 °C (https://matmatch.com/materials/mbas144-polyamide-thermoplastic-elastomer-tpa-).

### Dimensional Analysis

To start off, we need to decide on the dimensions of the UtiliTool. The inner diameter of the “gripping” circle should be the diameter of an average-sized doorknob, which ranges are typically either 2 ⅜” or 2 ¾”. To be safe, I decided to go with 2 ¾”.

Next, we must decide the width and thickness of the tool. Mechanical analysis of stress is necessary to determine the cross sectional area of the tool.

Given the maximum allowed stress of 10 - 40 MPa, we can calculate the area of the UtiliTool’s cross section using the stress formula:

σ=F/A

10 MPa = (40 N)/A

A = (40 N)/(10 N/mm^2)

A = 4 mm^2 = 0.00620001 in^2


Since this cross sectional area of 0.00620001 in2 is too small, we’ll have to increase the amount of force that the user exerts on the tool. Ideally, the cross sectional area will be 0.09375 in^2.


10 MPa = F / 0.09375 in^2

10 MPa = F / 60.48375 mm^2

F = 604.8375 N

Since this force is too large to expect a human to exert with only their arms and wrists, we can safely assume that the tool will not be plastically deformed (bent beyond elastic return).


### Consumer Population

Assuming that people who wear masks would be willing to pick up a tool such as the UtiliTool, we analyze the percentage of people who wear masks to determine our potential consumer population.

Data from the New York Times show the following survey information:

- 67 percent of women said they had worn a mask outside their home, compared with 56 percent of men, according to the Gallup poll (https://www.nytimes.com/2020/06/02/health/coronavirus-face-masks-surveys.html).

Potential biases to note:

- The New York Times is a left-leaning publication

- Gallup polls are subject to volunteer bias

- People who don’t have access to computers/phones might not have been polled, skewing the percentage of mask wearers one way or the other


Looking at Statista data for US populations, we can find the total populations of women and men, separately (https://www.statista.com/statistics/737923/us-population-by-gender/).

- Women: 169.22 million

- Men: 162.59 million

Applying the percentage of men and women who wear masks, we do the following calculations:

Women: 0.67 * 169.22 * 10^6 = 113377400

Men: 0.56 * 162.59 * 10^6 = 91050400

Total: 113377400 + 91050400 = 204427800


### Cost Analysis
Flexible TPU filament spool:
https://www.racedayquads.com/products/sainsmart-flexible-tpu-3d-printing-filament-1-75-mm-0-8-kg-dimensional-accuracy-0-05-mm?variant=18892284166257&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic

The UtiliTool has a mass of 0.06 lbs.


Approximation of Unit Cost printed with TPU Plastic:

0.06 lbs / 1.7637 lbs = (cost) / $29.99

Cost = $1.02


## Iterations
![Iterations](/img/utilitooliterationsrendered.png "Iterations")


## Market Validation


## Solution

![UtiliTool Final Design](/img/2.png "UtiliTool Final Design")


UtiliTool’s final design has the following **features**:

### What It “Matches” (with Competitors’ Products):
- The UtiliTool interacts with door handles and drawer pulls

- Has keychain hole to attach keyring/ spring-loaded ring

- Can carry bags

- Can push buttons

### Where It’s Different:
- The UtiliTool can also interact with round door knobs, which current tools can’t

- Can hold credit cards (for credit card scanners)



Thanks for reading this far!
Stay positive, and test negative!
