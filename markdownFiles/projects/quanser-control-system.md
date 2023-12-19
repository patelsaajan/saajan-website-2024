---
title: "Designing and implementation of a control system for a Quanser helicopter"
date: "May 2022"
tags: ["MATLAB"]
desc: "This project focuses on designing and implementing various combinations of proportional, integral, and derivative controllers for a Quanser helicopter. These controllers play a crucial role in assisting the system in handling real-life disturbances and fluctuations in demand."
imageSrc: "/imgs/project/3dof.jpeg"
active: false
featured: false
order: 6
---

<div style="margin-top:30px; text-align: justify; background-color: #EDF7FA; padding: 40px"> ### Project Background

This project was a module in my third year of my degree program. It involved the application of control techniques learned throughout the course to discern the dynamic behavior of a system. Subsequently, we designed and implemented an appropriate controller for the Quanser platform. Following implementation, a comprehensive series of validation tests were conducted to ensure the system's suitability and efficacy. To see the written paper for the coursework, **[click here ](https://1drv.ms/b/s!AtfvxxhKVXNCoivJUma7HSc72yjy?e=dHo6vd)**.

</div>

<div style="margin-top:50px">
<p style{align="center"}>
<img src="/imgs/project/quanser/3dof.jpeg" width="500" title="Quanser System">
</p>
</div>

<div style="margin:20px">

<div style{align="center"}>
**FIG: Quanser System**
</div>
</div>

<div style="margin-top:30px; text-align: justify"> ### Introduction

This report will be focusing on the design, validation and implementation of a control system for a Quanser helicopter. The Quanser systems are designed to be able to move with three degrees of freedom; however, only the control of the elevation will be looked at. Being able to design a controller is a valuable skill to have as an engineer since control theory can be applied to a wide range of engineering fields. It is vital that controllers function as designed and can withstand unforeseen circumstances in order for systems to operate safely. <br/>
The key aspects of the controller design that will be covered in this report are: system identification, picking and designing a controller, analytical verification and experimental verification. This will be followed by a discussion of the methods used in the report.

</div>

<div style="margin-top:30px; text-align: justify"> ### Discussion

<div style="margin-top:70px">

<p style{align="center"}>
<img src="/imgs/project/quanser/sysIdent.png" width="600" title="Original, 1st and 2nd order system identification">
</p>

<div style{align="center"}>
    **FIG: Original, 1st and 2nd order system identification**
</div>
</div>

<p style="margin-top:30px; text-align: justify">
The method of using MATLAB functions to model the systems was precise and effortless to use once moving past the initial learning curve. The second order transfer function did manage to capture most of the transient behaviour; however, it neglected what would be happening during the steady-state. Therefore, an improvement that could have been made was modelling the disturbances of the system as well and testing to see if the combined model matched the data better. Furthermore, collected data tended to vary from sample to sample because of the starting position of the Quanser. A mount to ensure that each data set collected had the same initial conditions would be a good inclusion. Lastly, multiple transfer functions could have been fitted in order to check for consistency. These transfer functions could have then also been tested on the controller to increase the likelihood that it can work for parameters with different values.<br/>
The advantage of using a PID design structure is that it is relatively easy to implement into a system if the transfer function is known. The design process also becomes increasingly more challenging for higher order systems, so it may be unsuitable if the disturbances of the data were included too. Moreover, the roots locus design method provided some initial gains that mostly met the design requirements, but the performance provided by the roots locus plot did not match the simulation. This could be due to neglecting the low pass filter when creating the controller model. The filter would have added an extra pole in the pole-zero plot which would have affected the performance of the model. Finally, the controller could have also included a transport delay term that would have mimicked the actual delay between the control signal and the rotors response. <br/>
</p>

<div style="margin-top:70px">

<p style{align="center"}>
<img src="/imgs/project/quanser/OrgiController.png" width="500" title="Experimental results for the orginal controller">
</p>

<div style{align="center"}>
    **FIG: Experimental results for the orginal controller**
</div>
</div>

<div style="margin-top:70px; margin-bottom: 20px">

<p style{align="center"}>
    <img src="/imgs/project/quanser/ModController.png" width="500" title="Experimental results for modified controller">
</p>

<div style{align="center"}>
**FIG: Experimental results for the modified controller**
</div>

</div>

<p style="margin-top:30px; text-align: justify">

    The analytical validation provided a good way of testing the system against certain disturbances or noise signals. However, it could have been beneficial to see how the system reacted to multiple inputs i.e. a scenario where there are input, noise and disturbance signals. The vigorous testing of the experimental validation was a good way to measure the performance of the controller. The validation showed the limitations of designing using simulations as information can be missed, leading to discrepancies between the testing methods. It would have been a good addition to be able to adjust the controller based on the experimental validation through redesigning parts of the controller. This would create a better performing controller.

</p>

<div style="margin-top:30px; text-align: justify"> ### Conclusion

The objective of the report was to design a controller that managed the elevation of a Quanser system. A PID controller was chosen due to its simplicity and ability to meet the design requirements, but also to ensure the system remained stable. The simulated performance of the controller managed to meet the design requirements using the roots locus approach and some additional tuning. The experimental performance of the controller was slightly less than ideal and displayed an overshoot problem that did not match what was happening in the simulations. However, the rest of the performance can be considered to be ideal as the steady-state error and oscillatory behaviour of the system were eliminated. Improvements in the controller are still needed to reduce the overshoot, so that the control system could be considered satisfactory.

</div>
