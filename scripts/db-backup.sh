#!/bin/bash

docker exec explorer-mongo mongodump -o /backup
docker cp explorer-mongo:/backup ./backup
