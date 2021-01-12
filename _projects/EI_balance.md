---
layout: distill 
title: Excitatory-Inhibitory balance 
description: How does precise excitation-inhibition balance control the activity landscape in the brain.
img: /assets/img/EI_balance.svg
authors:
  - name: Sahil Moza
    url: https://sahilmoza.com
    affiliations:
      name: NCBS, Bengaluru
      url: https://ncbs.res.in
  - name: Aanchal Bhatia
  - name: Upinder S Bhalla
    url: https://en.wikipedia.org/wiki/Upinder_Singh_Bhalla

bibliography: papers.bib

importance: 2
---

The brain employs synaptic excitation (E) and inhibition (I) to control the excitability landscape of neurons. I am interested in understanding how using specific motif connectivity, different kinds of computations can be implemented using E and I connections. To do this, first, we need to understand the degree and kind of EI balance in different kinds of networks. Several theoretical positions have been put in literature, including _detailed EI balance_ (Vogels and Abbott, 2009) where all combinations of presynaptic inputs are EI balanced and _tight EI balance_ where E and I are highly correlated and balanced at fast timescales (Boerlin, Machens and Deneve, 2013). Using the mouse hippocampus as a model system, we projected random patterns of light to optogenetically activate CA3 neurons using a projector <d-cite key="bhatiapatterned"></d-cite>. We showed that _precise EI balance_ (both detailed and tight) indeed exists in the brain <d-cite key="bhatia2019precise"></d-cite>.

<div class="row">
    <div class="col-sm mt-5 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/feedforwardNN.svg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/2_precise_small.svg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    Precise EI balance in the feedforward hippocampal EI network. (Left) Schematic of the feedforward hippocampal EI network. (Right) Hippocampal CA1 neurons are also balanced for very small inputs from CA3.
</div>

Further, in the feedforward inhibitory network connectivity of the hippocampus, EI balanced inputs naturally arrive with a delay that varies with input size. Using model and experiments, we showed that this results in a novel computation called Subthreshold Divisive Normalization (SDN). As its name suggests, SDN is a subthreshold gain-control computation that divisively controls neuronal output. SDN also has the interesting property that it controls the fraction of information in spike-time vs spike counts.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/EI_balance.svg' | relative_url }}" alt="" title="Precise EI balance"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/model.svg' | relative_url }}" alt="" title="ei balance sdn model"/>
    </div>

    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/SDN.svg' | relative_url }}" alt="" title="Subthreshold Divisive Normalization"/>
    </div>
</div>
<div class="caption">
    (Left) Random inputs from CA3 to CA1 are EI balanced at fast timescales with the same E/I ratio. (Middle) Model predicting Subthreshold Divisive Normalization resulting from a dynamically changing delay and precise EI balance. (Right) Experimental data from CA1 neurons showing Subthreshold divisive normalization (SDN), which controls spike-times and divisively controls the number of inputs required to reach threshold.
</div>

We are currently looking at how these phenomena play a role in inhibitory gating, the formation of place cells and neural sequences in the hippocampus.
