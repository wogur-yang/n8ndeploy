#!/usr/bin/env bash
set -e

mkdir -p /home/node/.n8n/custom/nodes

if [ ! -d /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node ]; then
  git clone --depth 1 \
    https://github.com/GiHnHn/n8n-youtube-transcript-node \
    /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node
fi
