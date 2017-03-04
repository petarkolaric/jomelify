FROM partlab/ubuntu-golang:latest

RUN apt-get update
RUN apt-get install -y pkg-config
RUN apt-get install -y libopencv-dev
RUN go get github.com/zikes/chrisify
RUN go get github.com/lazywei/go-opencv
RUN cd $GOPATH/src/github.com/zikes/chrisify && go build

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

RUN mkdir -p /app/uploads

COPY ./faces /app/faces/
COPY ./package.json /app/package.json
COPY ./index.js /app/index.js

RUN cd /app && npm install

CMD node /app/index.js

EXPOSE 3000
