---
title: "Design and Implementation of a Bi-Directional Charger for an 800V Electric Vehicle"
date: "May 2022"
tags: ["MATLAB"]
desc: "My individual research project for my master's degree involved designing a Grid-to-Vehicle (G2V) simulation tailored to 800V electric vehicles (EVs). G2V technology has the potential to significantly enhance renewable energy capacity and potentially generate additional revenue for EV owners."
imageSrc: "/imgs/project/SimulinkModel.png"
active: false
featured: true
order: 4
---

<div style="margin-top:30px; text-align: justify; background-color: #EDF7FA; padding: 40px"> ### Project Background

As part of my master's degree in engineering, I undertook an individual research project. The project required selecting an area of engineering that piqued my interest and, with the guidance of a tutor, defining the scope until a project title could be established. The project spanned three months and resulted in my achievement of a First-Class distinction. You can access the written paper for this project **[here](https://1drv.ms/b/s!AtfvxxhKVXNCoiewBtCk1IS_Cjhu?e=FQuFbR)**.

</div>
<div style="margin-top:50px">
<p style{align="center"}>
<img src="/imgs/project/IRP/FullDiagram.png" width="500" title="Full Circuit Diagram"></p>
</div>

<div style="margin:20px">

<div style{align="center"}>
**FIG: Full circuit diagram of bi-directional charger model**</div>

</div>

<div style="margin-top:30px; text-align: justify"> ### Abstract

Fossil fuels are currently being phased out by many sectors to reduce greenhouse gas emissions to help preserve the current global climate. The energy sector could reduce its emissions by switching to renewable clean energy sources, while the transport sector could reduce emissions through the transition to battery electric vehicles (BEVs) technology. By acting as energy stores when idle, BEVs can aid the adoption of renewable clean energy sources and help reduce the cost of the energy sector's new infrastructure. Furthermore, owners of the BEVs could be financially compensated for their participation. The BEV would be connected to the grid through a bi-directional charger that could send or receive power. Due to current manufacturer trends, this report looked at the design and implementation of a bi-directional charger for an 800V BEV architecture. A charger model and its controllers were built in Simulink with the preliminary simulation results looking promising and offered a control systems to implement into a hardware testing.

</div>

<div style="margin-top:30px; text-align: justify"> ### Motivation 
<p>
The UK has seen a 9.5% decrease in its greenhouse gas (GHG) emissions between 2019 and 2020 which is the largest proportional drop seen in the UK in a single year since the start of the data series in 1990 . Despite this progress, further action is still required to ensure the global average temperature does not rise by more than 1.5°C when compared with pre-industrial levels. The latest IPCC report predicts that not meeting this target could cause an increase in the ferocity of global floods and fires, the failure of crops and forced migration due to rising sea levels .
</p>
<p style="margin-top:20px">
The UK government has pledged to reduce UK GHG emissions by at least 80% by the year 2050. To achieve this, sectors such as transport, energy, industry and domestic must play their part. Currently, the goal for the transport sector is to eliminate the use of internal combustion engine vehicles (ICEVs) and move to electric vehicles (EVs) such as battery electric vehicles (BEVs) or fuel cell electric vehicles (FCEVs). The switch to EVs means that GHGs are not produced directly; however, manufacturing and power supply still need to be taken into consideration. Most of the emissions from an EV are produced during its manufacturing, and combined with a high GHG emitting grid results in marginal differences between EVs and ICEVs. Nonethe- less, more recent comparative studies showed that BEVs produced 35-50% of the GHG emissions over their life cycle when compared with their ICEV counterpart; factoring in current and future predicted grid supply sources. Moreover, the UK government has a target of 2035 for the energy sector to be only reliant on clean energy, subject to security of supply. One of the fundamental limitations of renewable clean sources is their dependence on external factors such as light intensity or wind speed. Therefore, during high production times, surplus energy must be stored in preparation for when the demand is greater than the supply. Addi-
tional storage infrastructure needs to be built alongside new clean energy plants for this to be a viable option. Unfortunately, this additional storage increases the cost of harnessing renewable energy sources; however, the rising popularity of BEVs is a potential solution to reducing this cost. Essentially, BEVs are large battery on wheels, so a bidirectional charger can enable a vehicle to store energy for later use. The BEV is said to be in grid to vehicle (G2V) mode while charging and in vehicle to grid (V2G) mode when supplying power to the grid. It is estimated that personal vehicles are only active for 10% of the day; therefore, these BEVs could be utilised for grid applications for the other 90%. This use of BEVs could also be financially beneficial for the owner as they could be compensated for their participation, with one trial conducted in the UK seeing participants earning as much as £725 in a year. Alternatively, the vehicle could be used as a house battery system to help increase self-sufficiency, especially when paired with rooftop solar panels. This technology is not far off what is currently a reality with smart charging, where BEVs are charged during off-peak times at reduced costs. V2G would take this a step further and allow the owner to sell back to the grid when demand is higher. A few obstacles in the adoption of this technology are the price of EVs, charging infrastructure across the country and lack of global technological standardisation.
</p>
<p style="margin-top:20px">

Currently, there is a split in the EV market where manufacturers like Hyundai, Audi and Porsche have moved to an 800V EV architecture while others have stayed with the conventional 400V architecture. Moving to an 800V architecture is the next logical step for a BEV as it can offer better charge times at fast charging stations. For example, Porsche claim that their Taycan model can be charged from 5% to 80% in 22 5 minutes. Addi- tional benefits of a higher voltage system include: smaller charging currents which reduce overheating and allow better power retention; smaller cable sizes which reduce raw materials and thereby subsequent costs; reductions in the overall weight of vehicles resulting in increases in both their range, acceleration and energy savings.

</p>
<p style="margin-top:20px">

Based on these current trends, the focus of this report will be the design and implementation of a bi-directional charger for an 800V EV architecture. This report will be split into five sections: the proposed charger topol- ogy for the model; the design of the G2V mode of the charger; the design of the V2G mode of the charger; the operation of the devised control systems of the charger; the performance of the model and closed-loop
controllers.

</p>

</div>
<div style="margin-top:30px; text-align: justify"> ### Conclusion

<p style{align="center"}>
<img src="/imgs/project/IRP/SimulinkModel.png" width="700" title="Full Simulink Model"></p>

<div style{align="center"}>
**FIG: Final Simulink model inclduing full circuit and controllers**</div>

</div>

<p style="margin: 20px">
This project documented the design process of a bi-directional charger that can either work on a 400V or 800V BEV architecture. Two models of the charger were created in Simulink to test the closed-loop control systems, one mode for the G2V and the other for V2G. The buck, boost and inverter controllers worked as intended; however, further work is still needed on the rectifier control system, due to the slightly irregular output. It can be concluded that the controllers for each operation mode work, and therefore the charger model is functional. This technology will become increasingly important in the next few years as we move away from fossil fuels and aim to reduce our GHG emissions. It is important that the foundations for a more sustainable tomorrow are placed as early as possible, as infrastructure takes time to adjust.

<div style="margin: 50px">
<p style{align="center"}>
<img src="/imgs/project/IRP/Gridg2v.jpg" width="500" title="Power absorbtion mode"></p>

<div style="margin:20px">

<div style{align="center"}>
**FIG: G2V Output voltage-current waveforms**</div>

</div>

<p style{align="center"}>
<img src="/imgs/project/IRP/v2Grid.jpg" width="500" title="Power injection mode">
</p>

<div style="margin:20px">

<div style{align="center"}>
**FIG: V2G output voltage-current waveforms**</div>

</div>
