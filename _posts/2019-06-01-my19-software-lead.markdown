---
layout: post
title:  "MIT Motorsports Software Lead"
date:   2019-06-01 10:00:00 -0500
description: "For my electric racecar's MY19 vehicle, I was Software Lead (part of the exec team) and in charge for integrating all software in the car's embedded system."
categories: jekyll update
img: "/photos/sw_team.jpeg"
---
For the 2018-2019 school year and competition season, my role on the team was Software Lead. The responisbilities of this role are to deliver the software required for the car's embedded system to function and help steer the team's high level direction as part of the exec team.

The vehicle's embedded system involves all the components of the electrical system required for the vehicle to drive. However, only some of these components run software (meaning they have a microcontroller). The boards the software team needs to program are as follows:
* **Vehicle control unit (VCU)**: handles vehicle state machine, controls, and CAN data logging
* **Battery management system (BMS)**: measures cell voltages and temperatures and reports faults
* **Driver interface**: takes driver inputs through buttons and displays information to the driver through LEDs and a screen
* **Sensor node**: general-use board that's designed to be very small and read sensors wherever we need them around the car, then put the values on the CAN bus
* **Low voltage battery management system (LVBMS)**: monitors channels of the low voltage battery and reports them over CAN

The VCU was my primary technical project on the MY19 vehicle, and you can read more about it on this page. The other projects were completed by other software engineers on the team that I managed. . The photo below shows me and some of the people I managed at the MY19 competition (not everyone ended up going to competition):

![Software team at competition, with me sitting in the MY19 vehicle](/photos/sw_team.jpeg)

I had weekly check-ins with them and helped them develop a high level timeline leading up to EE-on-bench (which is when we first integrate the entire system) After each of the software team members had tested their boards on their own, the EE Lead and I took over integration and slowly built up the electrical system according to a careful test plan.

One of the biggest changes I made as Software Lead was implementing best software engineering practices. Specifically, in the past the code we didn't have a clear git branching structure or code review policy. I implemented a clear feature branching strategy where I reviewed all code before it was merged in (unless it was my code) and made sure our git repo and code was always well organized.
