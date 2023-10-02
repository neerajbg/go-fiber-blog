Nginx Web server

MySql Running on Host machine


# Compile go app 
CGO_ENABLED=0  GOOS=linux go build -o build/server

# Build react app
npm run build

# Build docker image
docker build -t blog-app .

# Run cotainer
docker run --name blog_container -p 8080:80 -p 8000:8000 -it --rm blog-app

# Run cotainer in detach mode
docker run --name blog_container -p 8080:80 -p 8000:8000 -it -d --rm blog-app
