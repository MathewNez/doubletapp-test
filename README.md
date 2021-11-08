# For development:
1. Clone project
```shell
$ git clone <url>
```
2. Install dependencies
```shell
$ npm install
```
3. Run development server
```shell
$ npm start
```

Congrats! You may find site at [127.0.0.1:3000](http://127.0.0.1:3000)

# For production:
1. Clone project
```shell
$ git clone <url>
```
2. Install required dependencies
```shell
$ npm install
```
3. Create a production build by
```shell
$ npm run build
```
3. Install `serve`
```shell
$ sudo npm install -g serve
```
4. run production buils using `serve`
```shell
$ serve -s build
```
Congrats! You may find site at [127.0.0.1:3000](http://127.0.0.1:3000)

# Current bugs:
* when you search and delete student, it displays all the left students for a millisecond and then displays search result. Not critical, but not good either.
# Plans:
* Add fetching errors handling
* Refactor code: make separate components for mobile and desktop layout
* Refactor other things