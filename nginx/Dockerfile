# nginx/Dockerfile

FROM nginx:1.23.3-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY igorfragoso.dev.pem /etc/nginx/ssl/igorfragoso.dev.pem
COPY igorfragoso.dev.key /etc/nginx/ssl/igorfragoso.dev.key
EXPOSE 80
EXPOSE 443
