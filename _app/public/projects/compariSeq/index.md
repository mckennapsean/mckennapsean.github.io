Abstract
--------

Comparing Sequence Charts (**compariSeq**) is a redesign of traditional sequence logos for the task of comparing multiple biological sequences. All relevant data encoded in traditional sequence logos is conserved, however, attention is directed to the most important data, colors are more perceptually accessible, and the task of direct comparison at particular locations is supported.

Introduction
------------

One of the most common methods to display biological sequences are the sequence logo. At each location in a sequence, both the relative frequency of amino acids and information content (in bits) are encoded. Information content indicates both conservation across species and provides some information about the reliability of the consensus sequence presented. In addition, residues are typically colored according to their chemical properties or some other classification.

Sequence logos have several major flaws, however. Comparing residue frequencies is extremely difficult as the letters are stacked vertically. It is even more difficult to accurately compare lengths at non-neighboring locations, which is confounded by the scaling of relative frequencies according to information content.

To better understand the space of tasks associated with sequence logos, we conducted informal interviews with three biologists of varying expertise. These interviews yielded several specific observations, which inspired our new design: compariSeq.
