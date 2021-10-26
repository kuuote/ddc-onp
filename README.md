# DDC Onp
DDC filters for _An O(NP) Sequence Comparison Algorithm_ by Sun Wu, Udi Manber and Gene Myers. 

- `matcher_onp` -- filtering candidates by the edit-distance
- `sorter_onp` -- sorting candidates by the edit-distance
- `converter_onp`-- visualizing difference between input string and candidates

## Configuration

- `matcher_onp.maximumDistance` -- threshold of the edit-distance.
  The filter drops the candidates of which distance is greater than this parameter.
- `converter_onp.hlGroupAddition` -- name of the highlight group to highlight additions of diff string.
- `converter_onp.hlGroupDeletion` -- name of the highlight group to highlight deletions of diff string.
- `converter_onp.type` -- place to show diff string.

Copyright 2021 TANIGUCHI Masaya. All rights reserved.
