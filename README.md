# System requirements

- Python 3.6+
- A web browser supporting WebSockets (any modern version of Chrome/Firefox should work)

# Quickstart

- `pip install -r requirements.txt` - Install Python dependencies
- `python chatserver.py` - Starts an echo server that accepts WebSocket connections.
- Open `index.html` in as many tabs as you like in your browser to simulate 
multiple users.

# Future work
    
- Client
    - Add metadata to message (author, date and time, etc) 
    - Improve UI style (use a responsive Grid)
    - Separate presentation logic (HTML) from model data (the actual message payload)
        - This could be done by using a framework (React, Angular) or simply by
        extracting the template building code to a separate module.
- Server
    - Write messages to database using [motor](https://motor.readthedocs.io/en/stable/)
        - an example can be found in my Github repo:
            - [Tornado consumer](https://github.com/pgpbpadilla/tornado_consumer) 
            - [exact location in sources](https://github.com/pgpbpadilla/tornado_consumer/blob/master/consumer.py#L249)
            
- Deployment
    - Containerize (Docker) the server and client code to facilitate deployment.
        - Ideally one process per container. An example of how this could be done
        with a different stack (LAMP) can be found in [my repo Docker LAMP](https://github.com/pgpbpadilla/docker-lamp)
            - client app
            - chat server
            - MongoDB
    - Use Infrastructure as Code. The containers could be deployed to 
    [AWS ECS like in this example](https://github.com/pgpbpadilla/ecs-refarch-cloudformation).
    - Setup a Continuous Delivery Pipeline following principles outlined in
    [Pipelines as Code](https://www.thoughtworks.com/radar/techniques/pipelines-as-code)  
