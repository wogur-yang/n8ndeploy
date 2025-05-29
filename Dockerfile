FROM n8nio/n8n:latest

COPY n8n-youtube-transcript-node /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node

USER root
RUN chown -R node:node /home/node/.n8n/custom/nodes
USER node

# devDependencies 까지 설치하려면 환경변수를 잠시 바꾼다
RUN cd /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node && \
    NODE_ENV=development npm install --unsafe-perm && \
    npm run build
