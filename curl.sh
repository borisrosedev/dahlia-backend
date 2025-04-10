
curl -H '"Content-Type":"multipart/form-data"' \
     -X POST http://localhost:3000/api/v1/users \
     -d '{"firstname":"marine","lastname":"dupont","email":"jules@deligones","password":"!!Agathe2011!!"}'
