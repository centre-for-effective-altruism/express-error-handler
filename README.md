# node-http-error-handler

Simple Express.js error handler middleware for 

```js
const errorLogging = process.env.NODE_ENV === 'development'
const errors = require('node-http-error-handler')(errorLogging)
...
app.use(errors)
```

## Usage

## `errors([logging Boolean])`

Returns the middleware function. The `logging` argument is optional, and defaults to `false`. If true, the error handler will print `4xx` and `5xx` errors to the console, including a stack trace for `5xx` errors.