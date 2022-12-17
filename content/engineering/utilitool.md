---
title: "Utilitool"
layout: "project"
weight: 2
type: "engineering"
name: "utilitool"
description: "Design, CAD, Market Research, Competitor Research"

---

# Utilitool

In the midst of the COVID-19 pandemic, the need to limit viral contact and spread is more important than ever. One issue that poses a great risk to dispersing and contracting the virus is the public’s interaction with shared spaces, objects, and buttons, including but not limited to door handles, toilet handles, elevator buttons, and shopping carts.

This project aims to design and manufacture a universal tool, the UtiliTool, to interact with commonly-touched surfaces. The tool will go through multiple design iterations, be 3D modeled in SolidWorks, and, finally, 3D printed.

![UtiliTool Cover](/img/IndustrialDesignPortfolio210.jpg)

## Consumer Research

![UtiliTool Cover](/img/IndustrialDesignPortfolio211.jpg)

## Ideation and Iteration

![UtiliTool Cover](/img/IndustrialDesignPortfolio212.jpg)

## Material Selection

The UtiliTool must be made of flexible material, as it will need to be stretched and compressed without breaking. To choose a material, we must look at each 3D printing material’s Young’s modulus, which is a mechanical property measuring the stiffness of a material. The lower the Young’s modulus, the more flexible the material.

Thermoplastic polyamide, or TPA, is a flexible nylon material that has a Young’s modulus of 0.07 - 0.51 GPa at 20 °C. Its maximum allowed stress is 10 - 40 MPa at 20 °C (https://matmatch.com/materials/mbas144-polyamide-thermoplastic-elastomer-tpa-).

## Dimensioning

To start off, we need to decide on the dimensions of the UtiliTool. The inner diameter of the “gripping” circle should be the diameter of an average-sized doorknob, which ranges are typically either 2 ⅜” or 2 ¾”. To be safe, I decided to go with 2 ¾”.

Next, we must decide the width and thickness of the tool. Mechanical analysis of stress is necessary to determine the cross sectional area of the tool.

Given the maximum allowed stress of 10 - 40 MPa, we can calculate the area of the UtiliTool’s cross section using the stress formula:

σ = F/A
10 MPa = (40 N)/A
A = (40 N)/(10 N/mm2)
A = 4 mm2 = 0.00620001 in2

Since this cross sectional area of 0.00620001 in2 is too small, we’ll have to increase the amount of force that the user exerts on the tool. Ideally, the cross sectional area will be 0.09375 in2.

10 MPa = F / 0.09375 in2
10 MPa = F / 60.48375 mm2
F = 604.8375 N

Since this force is too large to expect a human to exert with only their arms and wrists, we can safely assume that the tool will not be plastically deformed (bent beyond elastic return).

## Final Product Prototype

![UtiliTool Cover](/img/IndustrialDesignPortfolio213.jpg)
![UtiliTool Cover](/img/IndustrialDesignPortfolio214.jpg)
