from node:18
WORKDIR /app
COPY . ./
RUN ls
RUN npm install
RUN npm install -g nodemon
EXPOSE 1144
CMD ["nodemon", "./main.js"]