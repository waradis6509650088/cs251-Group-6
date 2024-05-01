from node:18
WORKDIR /app
COPY . ./
RUN ls
RUN npm install
RUN npm install -g nodemon
CMD ["nodemon", "./main.js"]