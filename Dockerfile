FROM n8nio/n8n:latest

############################
# 1) 라이브러리 복사 & 빌드
############################
COPY youtube-transcript_custom /home/node/youtube-transcript_custom
RUN cd /home/node/youtube-transcript_custom \
    && npm ci \
    && npm run build      # dist/youtube-transcript.esm.js 생성

# → node_modules 에 패키지로 등록
RUN npm install /home/node/youtube-transcript_custom

############################
# 2) 커스텀 노드 복사
############################
COPY n8n-youtube-transcript-node \
     /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node

############################
# 3) 권한 수정 + devDeps 포함 설치 + 빌드
############################
USER root
RUN chown -R node:node /home/node/.n8n /home/node/youtube-transcript_custom
USER node

RUN cd /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node \
    && NODE_ENV=development npm install --unsafe-perm \
    && npm run build          # 이제 tsc 가 모듈을 찾을 수 있음
