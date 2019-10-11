#!/bin/bash

# Check if container exists
if docker inspect test-mongo &>/dev/null
then
    # Check if container is running
    if ! docker top test-mongo &>/dev/null
    then
        # Container is not running, start it back up
        docker start test-mongo
    else
        echo "Mongodb is already running"
    fi
else
    # Container does not exist, start a new one
    docker run --name test-mongo -p 27017:27017 -d mongo
fi
