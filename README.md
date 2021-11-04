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

This section is in progress

# Current bugs:
* if you search for special students and then delete him, it starts displaying all student who left, not the search results
* Looks like it may be fixed with the state manager, such as mobx, what a surprise!

# Plans:
* Recreate (at least) dropdown using styled components
* Make sorting actually work
* Add links to a navbar (just because)
* Put list of students into mobx
* Look how the TypeScript can be applied to this project