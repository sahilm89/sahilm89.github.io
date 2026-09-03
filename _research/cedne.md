---
layout: research
title: "CeDNe: connectome-embedded dynamical networks"
description: >-
  An open-source Python framework that puts the <em>C. elegans</em> wiring diagram, cell identities, gene
  expression, neuropeptide signalling and neural activity into one graph you can query, simulate and fit.
period: 2024–present
lab: Zhang Lab, Harvard University
people: Yun Zhang
links:
  - { label: GitHub, url: "https://github.com/sahilm89/CeDNe" }
  - { label: Documentation, url: "https://docs.cedne.org" }
  - { label: Web app, url: "https://beta.cedne.org" }
  - { label: Preprint, url: "https://doi.org/10.1101/2025.11.03.683805" }
  - { label: Run in Binder, url: "https://mybinder.org/v2/gh/sahilm89/CeDNe/main?filepath=examples/notebooks/" }
papers: cedne
---
<p class="lead"><em>C. elegans</em> has a complete connectome, molecularly identified neurons, a single-cell
transcriptome, a neuropeptide–receptor map and whole-brain imaging. What it lacked was a place to hold all of
that at once, so that a question about structure could be asked of function and back. CeDNe, pronounced
"Sydney", is that place: a graph-based object model built on NetworkX in which neurons, connections and their
molecular and functional annotations live together and can be analysed, simulated and fit.</p>

## What it holds

- **Connectomes.** White et al. 1986, Cook et al. 2019, the Witvliet et al. 2021 developmental series and the Brittin et al. 2021 contactome, hermaphrodite and male.
- **Molecular identity.** CeNGEN single-cell transcriptomes across stages, neurotransmitter identities, the Ripoll-Sánchez et al. 2023 neuropeptide connectome and Wang et al. 2024 ligand–receptor expression.
- **Function.** Randi et al. 2023 functional connectivity and Atanas et al. 2023 whole-brain imaging.
- **Anatomy.** WormAtlas neuron positions and lineage.
- **Other nervous systems.** The *Drosophila* larva (Winding et al. 2023), the adult fly (FlyWire), *Platynereis* and *Pristionchus*, so the same code runs across species.

## What it does

- Integrates anatomical, transcriptomic, neurochemical and functional data into one graph.
- Finds structural motifs, computes paths and traces information flow between named neurons.
- Maps new data, such as RNA-seq or imaging, onto known connectomic structure.
- Renders neuron-annotated 2D and 3D views with spatial alignment.
- Simulates neural activity on the wiring diagram and fits model parameters to recordings with Optuna.
- Ships thirty example notebooks, from loading a connectome to motif-based simulation and fitting.

<figure class="figure">
  <img src="{{ '/assets/img/research/cedne/connectome-folded.svg' | relative_url }}" alt="The chemical connectome folded by neuron class, drawn as a circular graph" loading="lazy">
  <figcaption>The chemical connectome folded by neuron class. Folding is a first-class operation: any grouping of neurons becomes a network whose edges inherit the synapse counts.</figcaption>
</figure>

## From motif to dynamics

<figure class="figure">
  <div class="figure-row figure-row--1-2">
    <img src="{{ '/assets/img/research/cedne/motif-ffl.svg' | relative_url }}" alt="A feed-forward loop motif whose nodes are pie charts of neurotransmitter type" loading="lazy">
    <img src="{{ '/assets/img/research/cedne/simulated-ffl.svg' | relative_url }}" alt="Simulated firing rates of the three neurons in the motif during a pulse" loading="lazy">
  </div>
  <figcaption>Left, a feed-forward loop found by motif search, with each neuron's neurotransmitter composition. Right, the same motif simulated as a dynamical system; the parameters can then be optimized against recorded activity.</figcaption>
</figure>

The step from structure to dynamics is the point of the framework. In the whole-brain learning project every
analysis, from tensor decomposition to fitting linear dynamical systems per animal, ran inside CeDNe against
the same named-neuron graph, which is what let a result about population geometry be turned into a prediction
about three specific cells.

## In the browser

<figure class="figure">
  <img src="{{ '/assets/img/research/cedne/webapp.webp' | relative_url }}" alt="The CeDNe web workbench: a 3D graph of the connectome with data-source and analysis panels" loading="lazy">
  <figcaption>The web app at <a href="https://beta.cedne.org">beta.cedne.org</a> runs the same core: load a connectome, overlay transcriptome or neuropeptide data, search motifs and run simulations in 3D, with no install.</figcaption>
</figure>

## Compared with other tools

<figure class="figure figure--wide">
  <a href="{{ '/assets/img/research/cedne/capability-matrix.webp' | relative_url }}"><img src="{{ '/assets/img/research/cedne/capability-matrix.webp' | relative_url }}" alt="Feature comparison matrix of connectome and modeling tools across modeling, network analysis, data modalities and access" loading="lazy"></a>
  <figcaption>Feature-based comparison with connectome and modeling tools, from the preprint. Click to enlarge.</figcaption>
</figure>

## Use it

CeDNe is MIT-licensed. It needs Python 3.10 to 3.12 and installs with Poetry:

```bash
git clone https://github.com/sahilm89/CeDNe.git
cd CeDNe
poetry install
```

The [documentation](https://docs.cedne.org) covers the object model and the example notebooks, which also
run without installing anything on [Binder](https://mybinder.org/v2/gh/sahilm89/CeDNe/main?filepath=examples/notebooks/).
If you use CeDNe, please cite the [preprint](https://doi.org/10.1101/2025.11.03.683805).
