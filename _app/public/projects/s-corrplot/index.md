The **s-CorrPlot** is a new scatterplot for visually exploring pairwise correlation coefficients between all variables in large datasets.

|      |
| ---: |
| *code:* [open-source code](http://mckennapsean.github.io/scorrplot/) |
| *video:* [interactive demo](https://www.youtube.com/watch?v=rAFDG2Ut2D0) |
| *poster:* [from InfoVis 2014](poster.png) |
| *paper:* *in progress* |

The degree of correlation between variables is used in many data analysis applications as a key measure of similarity. The most common techniques for visualizing correlation, like scatterplot matrices and clustered heatmaps, however, do not scale well to large datasets, either computationally or visually. We present a new visualization that is capable of encoding pairwise correlation between hundreds of thousands variables, called the **s-CorrPlot**. The *s-CorrPlot* is based on a 2D scatterplot and exploits the geometric structure underlying Pearson’s correlation to derive a novel spatial encoding. The s-CorrPlot not only depicts a visually precise measure of correlation, but also supports visualizing metadata using encoding channels like color. We implemented the s-CorrPlot as an open-source proof of concept visualization in order to validate its effectiveness through a variety of methods including a case study with a biology collaborator.

Our [proof of concept](http://mckennapsean.github.io/scorrplot/) employs simple multidimensional exploration techniques, to demonstrate how this visual encoding can employ the vast set of these exploration techniques for exploring correlation.

For further details, please read the description and derivation of the s-CorrPlot in our paper.
