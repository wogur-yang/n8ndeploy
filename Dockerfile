FROM n8nio/n8n:latest

# 1) 커스텀 노드 복사 (root 권한으로 복사됨)
COPY n8n-youtube-transcript-node \
     /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node

# 2) 권한 수정 + 의존성 설치 + 빌드
USER root
RUN chown -R node:node /home/node/.n8n/custom/nodes

USER node
RUN cd /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node \
    && npm install --unsafe-perm \
    && npm run build
