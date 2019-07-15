## HOW TO START a NEW API REST repo.

- 1.- Fork this repository.
- 2.- Setup nodeJS
- 3.- Run `npm install`
- 4.- run the following command `npm start`


## FOR THE SECOND PART

- Make sure you have set all the variables in the app.env.example file.
- Rename the app.env.example file to app.env
- Make sure you set all the fields in the supervisord.conf file
- Setup the docker compose environment.
  How to install docker on windows [https://runnable.com/docker/install-docker-on-windows-10]
  How to install docker compose on windows [https://docs.docker.com/compose/install/]

- After you have setup docker, make sure you execute the following command
```
 docker-compose up -d
```

- if everything run smoothly, you can execute the following command to see what is running on docker
```
docker ps
```
 and you should see something as follow:
```
 CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS                   PORTS                                                                    NAMES
64fb29a7cdf3        base_app                    "/bin/sh -c 'sh star…"   7 minutes ago       Up 7 minutes             0.0.0.0:3000->3000/tcp, 0.0.0.0:8021->8021/tcp, 0.0.0.0:9001->9001/tcp   base_app_1
a9208e29525d        mongo                       "docker-entrypoint.s…"   8 minutes ago       Up 8 minutes             0.0.0.0:32771->27017/tcp                                                 base_mongo_1
dfd78f82ee2f        redis                       "docker-entrypoint.s…"   8 minutes ago       Up 8 minutes             0.0.0.0:32770->6379/tcp                                                  base_redis_1
405ac125c5d5        mysql:5.7                   "docker-entrypoint.s…"   8 minutes ago       Up 8 minutes             0.0.0.0:3306->3306/tcp, 33060/tcp                                        base_mysql_1

```
- Take a look at the docker-compose.yml file, there you will see how many containers are running and try to match the name of them with the IMAGEs shown before
- Next go to your browser and hit the following URL: http://localhost:9001
- Make sure you copy the credentials from the supervisord.conf file at the bottom of the file (to access to the previouse URL in the 9001 port)
- Now you can go to localhost:8021 and you will see the API REST working just fine.
