FROM mysql:8
ARG DEBIAN_FRONTEND=noninteractive

ENV MYSQL_ROOT_PASSWORD=toor
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=nimda
ENV MYSQL_DATABASE=meo_warehouse

COPY sql_init.sql /docker-entrypoint-initdb.d
