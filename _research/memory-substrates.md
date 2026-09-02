---
layout: research
title: Circuit and molecular substrates of memory
description: >-
  How a hippocampal microcircuit balances excitation and inhibition to control gain and timing, and which
  small chemical reaction networks can hold a bit of memory against noise.
period: 2012–2020, PhD
lab: Upinder Bhalla's lab, National Centre for Biological Sciences, Bangalore
people: Aanchal Bhatia, G. V. HarshaRani, Naren Ramakrishnan, Upinder S. Bhalla
links:
  - { label: eLife 2019, url: "https://doi.org/10.7554/eLife.43415" }
  - { label: bioRxiv 2020, url: "https://doi.org/10.1101/2020.08.01.232231" }
  - { label: Bioinformatics 2021, url: "https://doi.org/10.1093/bioinformatics/btab006" }
  - { label: SWITCHES database, url: "https://switches.ncbs.res.in" }
  - { label: Thesis PDF, url: /assets/pdf/thesis.pdf }
math: true
---
<p class="lead">My PhD asked how memory could be physically robust at two very different scales: a feedforward
microcircuit in the hippocampus, and reaction networks small enough to fit inside a dendritic spine.</p>

## Precise excitation–inhibition balance in the hippocampus

Neurons receive excitation (E) and inhibition (I) together, and theory had long argued that their balance
shapes what a network can compute. Two positions were on the table: *detailed* balance, where every
combination of presynaptic inputs is matched by inhibition, and *tight* balance, where E and I track each
other on timescales faster than the membrane. With Aanchal Bhatia, I tested both directly. We projected
random patterns of light onto CA3 with a digital micromirror device to activate arbitrary subsets of
neurons, and recorded the resulting E and I in single CA1 cells.

<figure class="figure">
  <div class="figure-row">
    <img src="{{ '/assets/img/feedforwardNN.svg' | relative_url }}" alt="Schematic of the feedforward CA3 to interneuron to CA1 circuit">
    <img src="{{ '/assets/img/2_precise_small.svg' | relative_url }}" alt="Excitation and inhibition amplitudes across stimulus patterns, tracking each other">
  </div>
  <figcaption>Left, the feedforward circuit: CA3 drives CA1 directly and through inhibitory interneurons. Right, in CA1 neurons the inhibition evoked by a random CA3 pattern tracks the excitation that pattern evokes, even for very small inputs.</figcaption>
</figure>

Balance turned out to be both detailed and tight, which we called *precise*. Inhibition followed excitation
with a delay that shrank as the input grew. In a model, and then in the recordings, that input-dependent
delay produced a computation we named subthreshold divisive normalization: the summed response is divided
by a term that grows with input, so a wide range of input strengths is compressed into a small range of
depolarization while the timing of the peak carries the amplitude information instead. The circuit
converts *how much* into *when*.

<figure class="figure">
  <div class="figure-row">
    <img src="{{ '/assets/img/EI_balance.svg' | relative_url }}" alt="Excitatory and inhibitory responses to five input sizes, same E/I ratio">
    <img src="{{ '/assets/img/model.svg' | relative_url }}" alt="Model of divisive normalization from a dynamically changing delay and precise balance">
    <img src="{{ '/assets/img/SDN.svg' | relative_url }}" alt="Experimental CA1 data showing subthreshold divisive normalization">
  </div>
  <figcaption>Left, E and I for five input sizes share one ratio. Middle, the model: a delay that shortens with input plus precise balance yields divisive normalization below threshold. Right, the same normalization in CA1 recordings, with peak timing encoding input strength.</figcaption>
</figure>

## Chemical switches that store a bit

At the other end of the scale, memory at a synapse is thought to be held by bistable biochemical networks,
molecular flip-flops whose state is a concentration. I asked which network topologies do this robustly.
Starting from the exhaustive enumeration of small networks by Ramakrishnan and Bhalla, I simulated all 3,561
bistable topologies with up to six reactions among three molecules or three among four, sampling roughly two
thousand rate-parameter sets per network over six orders of magnitude with Latin hypercube sampling, about
seven million models in total.

<figure class="figure">
  <div class="figure-row">
    <img src="{{ '/assets/img/two-rupees.png' | relative_url }}" alt="A coin resting on one face">
    <img src="{{ '/assets/img/FlipFlop.svg' | relative_url }}" alt="An electronic flip-flop">
    <img src="{{ '/assets/img/cdk-pp2a-bistable.png' | relative_url }}" alt="The Cdk1 PP2A bistable reaction network">
  </div>
  <figcaption>Three bistable systems: a coin, a flip-flop and the Cdk1–PP2A network that gates mitosis. Each holds one of two states and can be pushed between them.</figcaption>
</figure>

Three kinds of robustness matter for a molecular memory: to changes in reaction rates, to thermal noise in
the tiny volumes of a spine, and to structural perturbations of the network itself. The main result was that
these dimensions are nearly independent, so a network robust in one need not be robust in another, and that
mirror-symmetric topologies tolerate rate perturbations best. Larger networks inherited robustness from the
small bistable motifs embedded in them. The full catalogue, with parameters, is searchable at
[SWITCHES](https://switches.ncbs.res.in), which we built with G. V. HarshaRani.

<figure class="figure">
  <div class="figure-row">
    <img src="{{ '/assets/img/randomReacs.svg' | relative_url }}" alt="Dose response and parameter sampling for one bistable network">
    <img src="{{ '/assets/img/symmetry.svg' | relative_url }}" alt="Mirror symmetric chemical reaction networks">
  </div>
  <figcaption>Left, for one network: two stable states appear as a catalytic rate is varied, and bistable parameter sets found among a thousand random draws. Right, mirror-symmetric topologies resist reaction-rate fluctuations.</figcaption>
</figure>
