CONTAINERS := $(shell docker ps -a -q)
IMAGES := $(shell docker images -q)

usage:
    $(info Usage: make [target])

# "Public" targets
clean: clean_docker_containers clean_docker_images
	rm -rf node_modules && rm -rf dist && mkdir dist

release: build_prod
	docker-compose -f docker-compose.prod.yml build

build: install
	webpack

# Blocking command
dev: build
	docker-compose up

# "Private" targets
install:
	npm install

install_prod: clean install

build_prod: install_prod
	webpack -p


clean_docker_containers:
ifeq ($(CONTAINERS),)
	$(info No Containers to remove)
else
	docker rm -f $(CONTAINERS)
endif

clean_docker_images:
ifeq ($(IMAGES),)
	$(info No images to remove)
else
	docker rmi -f $(IMAGES)
endif

