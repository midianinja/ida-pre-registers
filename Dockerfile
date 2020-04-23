FROM node:alpine

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

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Running the app
CMD [ "npm", "start" ]
