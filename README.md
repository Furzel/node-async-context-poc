Just a basic proof of concept of using Node.js [AsyncLocalStorage](https://nodejs.org/dist/latest-v13.x/docs/api/async_hooks.html#async_hooks_class_asynclocalstorage) to store request ID on new express requests and then feed it to a logger function allowing every log to be tied to a request ID. 
Can be easily expanded to a full context by using an Object/Map instead and provide easy access to request context without ferrying it down function calls. 

# How to try it
```
1 clone it
2 npm install
3 node index.js 
4 call localhost:3000/io a couple of times 
...
5 profit
```
