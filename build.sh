#!/bin/bash
set -e


# Check if the environment variable is set
if [ -z "$EXAMPLES" ]; then
  echo "Error: Environment variable EXAMPLES is not set."
  exit 1
fi

# Split the comma-separated example_names into an array
IFS=',' read -ra example_names <<< "$EXAMPLES"

# Iterate over the array and echo each value
for example_name in "${example_names[@]}"; do
  echo "📦 Building $example_name"
  mkdir -p "./build/$example_name"
  cp -r "$example_name/build" "./build/$example_name"
  echo "Static files copied from ./$example_name/build to ./build/$example_name"
  echo
done