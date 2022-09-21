#!/bin/bash

KSS2VGM=../../../dsa/kss2vgm/build/kss2vgm

mkdir -p vgm

for F in mgs/en/*.mgs ; do
  N=${F#mgs/en/}
  N=${N%.mgs}

  $KSS2VGM -l2 -p300 -ovgm/$N.vgm $F
  gzip -n --stdout vgm/$N.vgm > vgm/$N.vgz
  rm vgm/$N.vgm
done
