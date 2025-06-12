---
layout: distill
title: Chemical bistables 
description: How do biological systems make robust decisions and create long-lasting memory? 
img: /assets/img/website_bistable.svg
date: 2020-01-13

authors:
  - name: Sahil Moza
    url: https://sahilmoza.com
    affiliations:
      name: NCBS, Bengaluru
      url: https://ncbs.res.in
  - name: Upinder S Bhalla
    url: https://en.wikipedia.org/wiki/Upinder_Singh_Bhalla

bibliography: papers.bib
importance: 3
---

Bistable dynamical systems sustain themselves in one of two stable states. This makes these systems great for decision-making computations and for storing memory. Some examples of bistable systems are: a light switch, a flipped coin, and a flip-flop (the basic element in computer memory). Just like flip-flops store _state_ information of the previous inputs, chemical bistables store their _state_ in concentrations of molecules. Cell-cycle (Mitosis) phase transition cues (Cdk1-PP2A), morphogens (Shh), and putative synaptic memory machinery (CaMKII): all contain known bistable chemical reaction networks.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/two-rupees.png' | relative_url }}" alt="" title="A coin rests in one of two stable states, and can be used to make the decision of who goes to bat/bowl first in a cricket match."/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/FlipFlop.svg' | relative_url }}" alt="" title="A flip-flop can also rest in one of two stable states, storing one bit of electronic memory."/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/cdk-pp2a-bistable.png' | relative_url }}" alt="" title="The Cdk1-PP2A bistable chemical reaction network. This network can both make decisions and store one bit of memory in the relative concentrations of the molecules."/> </div>
</div>
<div class="caption">
    Bistable dynamical systems naturally bridge decision-making and memory. (Left) A coin rests in one of two stable states. The winner of a coin-toss decides between batting/fielding first in a cricket match. (Middle) A flip-flop can rest in one of two stable states, storing one bit of electronic memory. Arrays of flip-flops are used to store memory on a computer. (Right) The Cdk1-PP2A bistable chemical reaction network (Mochida et al, Curr Biol 2016).

</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/bistable_chem.svg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    Bistable chemistry (Left) can store memory in the concentration of molecules, and can be used to make YES/NO decisions by modulating which of the two stable concentration states the reactions settle in. Deterministic (Middle) and stochastic (Right) simulation of the a simple bistable network shows its resistance in exiting its current stable state (dotted lines) to external perturbations and intrinsic noise respectively.
</div>

I am interested in understanding what kinds of structures make bistable chemical networks robust in different ways and how these structures may have evolved in biological networks. We looked at the exhaustive set (3561) of unique bistable chemical reaction networks possible at a size up to 6 reactions between 3 molecules and up to 3 reactions between 4 molecules (Ramakrishnan and Bhalla, 2002). Then we used efficient multi-dimensional sampling<d-cite key="lhsmdu"></d-cite> to sample ~2000 reaction-rate parameters over 6 orders of magnitude for each reaction network (~7 million models). We found that certain kinds of symmetric bistable chemical reaction networks have a higher robustness to reaction rate perturbations. Moreover, larger bistable reaction networks seem to inherit robustness properties from their component bistable chemical reaction networks (root groups)<d-cite key="moza2020different"></d-cite>. Information about different kinds of bistable chemical reaction networks of a variety of shapes and sizes is available at <a href="https://switches.ncbs.res.in"> https://switches.ncbs.res.in</a><d-cite key="harsharani2020switches"></d-cite>.

<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/randomReacs.svg' | relative_url }}" alt="" title="random rates"/>
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/symmetry.svg' | relative_url }}" alt="" title="symmetric CRNs"/>
    </div>
</div>
<div class="caption">
   (Left) Simulations of the bistable chemical reaction network above. (Left-left) Dose-response curve showing two stable states emerging as kcat for the green reaction is changed. (Left-right) 1000 randomly chosen reaction rate parameters for the reaction network above (colored by reactions) in gray lines, and bistable parameter sets found in solid black color. (Right) Mirror-symmetric chemical reaction networks are resistant to reaction-rate fluctuations .
</div>
