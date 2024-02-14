#! /bin/bash

for i in {0..20}; do
   echo ""
   echo "Run script for file ${i}"
   yarn text2speech "692053a2cc5d44c7a5d0e9a1f6bce302" "northeurope" $i
   sleep 10s

done
echo "All audiofiles has been exported"
exit