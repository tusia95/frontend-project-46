# Makefile
install:
	npm ci
help:
	node bin/gendiff.js -h
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage
