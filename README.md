# Mini example of swagger-typescript-api

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
npx create-react-app react-mini-swagger-client --template typescript
```

And API client was generated with [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api).

```
npx swagger-typescript-api -p http://127.0.0.1:5000/api/v1/swagger.json -o ./src/apiClient --modular
```

... while running [flask-mini-rest](https://github.com/po5i/flask-mini-rest) app.

## Run the app

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)
