FROM node:12

ARG IDA_BASE_URI

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

RUN echo { '"IDA_BASE_URI":' '"'$IDA_BASE_URI'"' } > secrets.json
RUN cat secrets.json

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]
