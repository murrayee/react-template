FROM node

RUN mkdir -p /home/project

WORKDIR /home/project 

COPY . .

EXPOSE 9090

CMD npm install  && npm start
