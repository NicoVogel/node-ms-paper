# Student work: Analysis and evaluation of NodeJS microservice technologies for an exemplary LAN-Party management application

This document was created as part of a student work
(student ID, course number and supervisor are censored). 

The code can be found at https://github.com/NicoVogel/node-ms

## Abstract

This work focuses on the selection of microservice technologies in the field of communication and monitoring.
For the selection, persona requirements are identified and excerpts of currently available technologies presented for a preselection.
The selection was guided by the use case of a management application for gatherings of people (LAN party).
Following the preselection, proof-of-concepts were made for a better evaluation (except for the aspect monitoring), which resulted in the final selection being RabbitMQ (AMQP) for asynchronous, RESTful HTTP for synchronous communication and lastly Prometheus for monitoring.
The exemplary implementation of said management application proved the interoperability and, albeit not having covered other aspects in a microservice environment, may serve as a guideline for future projects.		

Further technologies presented were: gRPC, GraphQL (prototyped), NATS, Apache Kafka (prototyped), Graphite
