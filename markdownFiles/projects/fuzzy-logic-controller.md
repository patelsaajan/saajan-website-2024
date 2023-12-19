---
title: "Investigation of PID control using conventional and fuzzy logic"
date: "May 2023"
tags: ["Arduino (C/C++)"]
desc: "This project studies the potential improvements fuzzy logic could make to robotic controlled systems and assess its potential future uses for systems similar to the 3PI+ robot."
imageSrc: "/imgs/project/kpSurface.png"
active: false
featured: false
order: 5
---

<div style="margin-top:30px; text-align: justify; background-color: #EDF7FA; padding: 40px"> ### Project Background

The project was undertaken as an optional module during my master's year. It was a continuation of the line detection robot project, which can be found **[here](https://saajanpatel.co.uk/projects/line-following-robot)**. This project was a collaborative effort, requiring my partner and me to engage in discussions and make decisions regarding the research direction for the 3pi+ robot. With guidance from an assigned supervisor, we established a scope and designed experiments. I proposed exploring a topic involving fuzzy logic, influenced by my significant coursework in control theory during my degree and a strong interest in exploring different control approaches. You can access the written paper for this project **[here](https://1drv.ms/b/s!AtfvxxhKVXNCoilJ9837afJMwHlf?e=Tzh3l3)**.

</div>
<div style="margin-top:50px">
 <p style{align="center"}>
<img src="/imgs/project/fuzzy/nested.png" width="500" title="Heading PID control with nested wheelspeed control loops"></p> </div>

<div style{align="center"}>
**FIG: Heading PID control with nested wheelspeed control loopsr**</div>

<div style="margin-top:30px; text-align: justify"> ### Abstract

This project studies the potential improvements fuzzy logic could make to robotic controlled systems and assess its potential future uses for systems similar to the 3PI+ robot. It was found that fuzzy logic could provide a more adaptable controller for various rotation scenarios compared to a standard PID, reducing the time required to tune gains.

</div>

<div style="margin-top:30px; text-align: justify"> ### Introduction

 <p>Whilst most control theory is taught with the idea that systems can be linearised or approximated, the real-world con- tains a vast array of complicated non-linearities. A unique and often highly effective solution to these non-linear control prob- lems is the intuitive idea of using fuzzy logic . This means creating control without exclusively yes or no logic but rather a range of possible ’fuzzy’ values based on a series of rules that can be determined with human intuition rather than computer- based understanding. For instance, a temperature sensitive system may have various continuous temperature ranges that produce different outputs. These ranges may overlap or have differing levels of effect, hence the term ’fuzzy’ denoting logic of a not entirely clear nature to a computer’s understanding. Fuzzy logic has a large history of use in improving control and has been studied extensively  including in the field of robotics. This specific report looks at the potential for fuzzy logic to improve a PID (proportional, integral and derivative) controlled robotic system with its dynamic actions. Whilst testing the 3Pi+ robot (a programmable two-wheeled free moving system) it was found that conventional PID provided adequate control for straight line movement but often failed to perform consistently well in rotational movement. When a PID controller was tuned for one specific rotation it would not provide similar results for a different step input, creating either steady-state error or wheel-slip from rotating too quickly. Previous reports had found fuzzy logic could improve a variety of dynamic control system responses . Thus, a theory was devised to improve the dynamic performance of this robotic system.</p>

</div>

<div style="margin-top:30px; text-align: justify"> ### Conclusion

 <p style{align="center"}>
<img src="/imgs/project/fuzzy/360.png" width="500" title="360 degree rotation results of fuzzy and manually tuned PID controller"></p>

<div style{align="center"}>
**FIG: 360 degree rotation results of fuzzy  [FPID] and manually [MPID] tuned PID controller**</div>

<br/>

<p>Comparing the overall performance of the self-tuned FPID system to the MPID, it can be seen that a significant improve- ment has taken place in the dynamic behaviour for multiple scenarios. The ability to tune the proportional gain in real time has allowed the robotic system to accelerate and decelerate at far greater rates than what may be allowed by MPID thanks to the rate of error being incorporated into the fuzzy logic. <br/>
In addition, the tuning of the integral gain improved the accuracy and settling time. This is most pronounced in the 270o rotation test in which the MPID system comes to rest with a steady state error until the integral gain is allowed to build up enough of an error signal to correct the mistake. In an MPID system this would typically be counteracted with a larger integral gain however this would likely cause instability in the system dynamics in the form of overshoot and oscillations. The FPID advantage is therefore the ability to increase the integral gain only when the system has decelerated (when a low rate of error is measured) to remove the steady state error. <br/>
The principal benefit of the FPID system however, is the adaptability of the logic used. Since the lookup table calcula- tions are based on normalised error inputs, any size of error will be treated with the same logic on an appropriate scale. Creating the range of possible gain outputs requires only some simple preliminary tests to determine the gains that may cause instability. This can be seen from the relatively small change in rise time between various FPID rotation tests with the settling time being on average 540% longer for the manual PID control system compared to fuzzy control. <br/>
By contrast, the MPID system requires highly precise gain calculation. This can be achieved either through mathematical analysis (which may be difficult for a non-linear system such as this) or repetitive testing to narrow down three gains, each of which may interfere with one another. This process will typically take place for every separate scenario, drastically lengthening the time taken to produce a control system for one particular combination of input and system. <br/>
With analysis of improvements in robotic systems it is important to remember the potential benefits available, in this case, for improved dynamic performance. Robots of a similar nature to the 3Pi+ are used in various industrial applications such as warehouses requiring free moving, wheel driven robots. These systems are designed to operate amongst humans and other robots meaning any improvement in accuracy and performance will reduce accidents and the need for continuous maintenance. <br/>
Despite the successful results there were some difficulties with the experimental method, most notably the change in performance of both control methods when the system’s available battery power began to run out. Further adding to the complexity of using a system with low memory storage, the number of data points printed to the Serial monitor greatly affected the control. This is likely due to shorter step intervals requiring more frequent delays when recording data causing a lower controller responsiveness. <br/>
In conclusion, the initial hypothesis has been shown to hold true for the instances of various rotational tests with noticeable improvements in the performance of the 3Pi+ robot with the exception of any permanent steady-state errors for either controller. The possibility of the MPID controllers not having optimum gains removes the certainty that fuzzy-logic is always the better option, however the FPID control has clearly shown an improvement in adaptability between various inputs that the MPID cannot compete with.
</p>

</div>

<div style="margin-top:30px; text-align: justify"> ### Extra

<p>Here are the generated surfaces for the fuzzy-tuned PID heading controller. These graphics represent the rules of the fuzzy controller. To gain a deeper understanding of how they function, you can find detailed explanations in the report within <em>implementation</em>.</p>
</div>

<div style="margin-top:50px">
 <p style{align="center"}>
<img src="/imgs/project/fuzzy/kpSurface.png" width="500" title="MATLAB generated surface for Kp table"></p>

<div style{align="center"}>
**FIG: MATLAB generated surface for Kp table**</div>

</div>

<div style="margin-top:70px">

 <p style{align="center"}>
<img src="/imgs/project/fuzzy/kiSurface.png" width="500" title="MATLAB generated surface for Ki table"></p>

<div style{align="center"}>
**FIG: MATLAB generated surface for Ki table**</div>
</div>
