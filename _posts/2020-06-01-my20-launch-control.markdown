---
layout: post
title:  "Electric Racecar Launch Control"
date:   2020-06-01 10:04:47 -0500
description: "My main technical resposiblity on my FSAE team for our MY20 vechicle was launch control, a control algorithm for preventing tire slip when the driver floors the accelerator at the beginning of the Acceleration Event."
categories: jekyll update
img: "/photos/accel.jpeg"
---
![The MY18 vehicle competing in the accel event](/photos/accel.jpeg)

My primary technical project on the Model Year 2020 (MY20) vehicle was software to implement launch
control. The goal of launch control is to allow automate the torque commands used in our 
competitions Acceleration Event to complete the event as quickly as possible. Since the Acceleration
 Event is a test of how quickly your vehicle can drive 75m in a straight line starting from a
 stand still, the controls for this event boil down to estimating what the maximum force the tires
 can produce is and commanding the corresponding torque from the motor.

Tires are a difficult to model plant, and their forces very with many environment conditions. Without launch control, the driver has to learn from experience the best torque profile to use. But with launch control, we can just select the lightest person to drive the car, regardless of their skill, and cut down on the high number of driver training testing trips.

The launch control strategy that currently exists in the MY20 code is a fully feedforward strategy based using normal forces models and a load-sensitive, temperature sensitve Pacecjka tire model. I planned to validate this tire model using a torque sensor, and then incorporate feedback control as needed.

Due to COVID-19 shutting down our school and competition in the spring of 2020, the strategy was never fully validated on the MY20 vehicle, but we hope to test it in the spring of 2021.
