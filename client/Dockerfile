# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4

# Set the working directory to /api
# WORKDIR /client/public

# copy package.json into the container at /api
# COPY package*.json /client/
COPY . .
# install dependencies
RUN npm install

# production build
RUN npm run build --production

RUN npm install -g serve

# Copy the current directory contents into the container at /api


# Make port 80 available to the world outside this container
EXPOSE 5000

# Run the app when the container launches
# CMD ["npm", "start"]
CMD serve -s build