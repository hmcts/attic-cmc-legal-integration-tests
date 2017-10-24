#!/bin/sh

COMPOSE_FILES="-f docker-compose.yml -f docker-compose.local.yml"
docker-compose ${COMPOSE_FILES} up ${@} -d authentication-web \
                                           idam-api \
                                           fees-api \
                                           draft-store-api \
                                           claim-store-api \
                                           pdf-service-api \
                                           document-management-api-gateway-web
