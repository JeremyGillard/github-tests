# github-tests

![Node.js CI](https://github.com/JeremyGillard/github-tests/workflows/Node.js%20CI/badge.svg)

This is a simple github repository to test all the features of github without messing around in my other existing repositories.

docker postgres cmd: 
```
docker run --name NAME -d -p 5432:5432 -e POSTGRES_PASSWORD=PASSWORD -e POSTGRES_USER=USER -v COMPUTER_VOL:CONTAINER_VOL postgres:alpine
```

docker nginx cmd:
```
docker run --name NAME -d -p 80:80 -v /var/www:/var/www nginx
```
