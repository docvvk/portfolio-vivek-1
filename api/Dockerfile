# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4

ENV NODE_ENV production

# Set the working directory to /api
WORKDIR /back-end

COPY . .


# copy package.json into the container at /api
# COPY ["package.json", "package-lock.json", "./"]

# install dependencies
RUN npm install --production

# Copy the current directory contents into the container at /api
# COPY . .

# Make port 80 available to the world outside this container
EXPOSE 9000

# Run the app when the container launches
# CMD [ "sh", "-c", "npm start"]

ENTRYPOINT [ "npm", "start" ]
# CMD [ "nmp"]