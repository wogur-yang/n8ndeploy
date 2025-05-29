# 1) n8n 공식 이미지를 베이스로 사용
FROM n8nio/n8n:latest

# 2) 커스텀 노드 소스코드를 컨테이너에 복사
#    (레포 내에 n8n-nodes-youtube-transcript 디렉토리가 있다고 가정)
COPY n8n-youtube-transcript-node /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node

# 3) 커스텀 노드 폴더로 이동하여 의존성 설치 및 빌드
RUN cd /home/node/.n8n/custom/nodes/n8n-youtube-transcript-node \
    && npm install \
    && npm run build

# 4) (선택) env 파일이나 시크릿으로 관리하지 않을 환경변수 기본값 설정
#    ENV N8N_CUSTOM_NODES=/home/node/.n8n/custom/nodes

# 5) 기본 ENTRYPOINT가 이미 ["n8n"] 이므로,
#    도커 허브의 n8n 이미지를 그대로 사용해도 됩니다.
#    (만약 npx n8n start 를 쓰고 싶으면 아래 두 줄을 주석 해제)
# ENTRYPOINT ["npx", "n8n", "start"]
# CMD []
