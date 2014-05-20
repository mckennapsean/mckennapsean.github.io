Abstract
--------

The degree of correlation between variables is used in many data analysis applications as a key measure of similarity. The most common techniques for visualizing correlation, like scatterplot matrices and clustered heatmaps, however, do not scale well to large datasets, either computationally or visually. We present a new visualization that is capable of encoding pairwise correlation between hundreds of thousands variables, called the s-CorrPlot. The s-CorrPlot is based on a 2D scatterplot and exploits the geometric structure underlying Pearson’s correlation to derive a novel spatial encoding. The s-CorrPlot not only depicts a visually precise measure of correlation, but also supports visualizing metadata using encoding channels like color. We implemented the s-CorrPlot as an open-source proof of concept visualization in order to validate its effectiveness through a variety of methods including a case study with a biology collaborator.

Introduction
------------

Correlation is a statistical measure of dependence between two variables. The most basic and widely used correlation measure is Pearson’s correlation coefficient, which captures the degree of a linear relationship between two variables. Pearson’s correlation is used in a broad range of applications, from finding genes that are involved with a specific disease network, to finding sociological variables which interact in a complex manner.

As the amount of available data continues to expand in these fields, visualizing correlation becomes challenging because standard visualization techniques for exploring correlation lack the capacity to deal with these increasingly large datasets. Both scatterplot matrices (SPLOMs) and parallel coordinates rely on a visual determination of correlation, but have been shown to suffer underestimation effects and screen space limitations with large numbers of observations and variables. Clustered heatmaps, on the other hand, directly visualize a measure of correlation between each pair of variables using a color encoding but also have a number of limitations: pairwise correlation computations grow quadratically with the number of variables; clustering is necessary for pattern detection, but the visual results are highly variable based on the clustering technique and accurate evaluation of correlation values is all but impossible due to the relative nature of color perception.

To address these limitations, we introduce a novel visual encoding of correlation that allows the viewer to precisely infer correlation between many variables in a scatterplot, called the s-CorrPlot, shown above. This encoding scales to large datasets containing hundreds of thousands of variables and thousands of dimensions, both computationally and visually, and supports the visualization of additional information about the data via color or shape. The s-CorrPlot is the result of projecting a well-known geometrical representation of pairwise correlation into 2D. While 2D projections are a standard approach to visualize multidimensional data, the main contribution of this work is the derivation of a novel spatial encoding of correlation for certain 2D projections of the geometrical representation, called the s-CorrPlot. This spatial encoding is precise for a subset of all pairwise correlations, and we mathematically derive error bounds for the rest. We improve visual scalability with a density estimation technique that reduces visual clutter and enhances perception of structure. The s-CorrPlot can be combined with multidimensional exploration techniques to support a rich analysis of correlation in large datasets.

For validation, we implement the s-CorrPlot as an interactive, exploratory proof of concept. The effectiveness of the proposed encoding of correlation is demonstrated on several different datasets involving two use-cases and a case study with a biology collaborator.