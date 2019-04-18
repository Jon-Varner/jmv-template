<h1>Jon Varner's custom template</h1>

<p>I put this together so I can quickly spin up a new React Web project with redux, react-router, and axios ready to go, as well as a very basic website layout. Bootstrap is not included and styling is minimal.</p>

<p>Just clone this project, rename your folder, then run <code>npm install</code>.

<p>I began with create-react-app, then added the following:</p>

<ul>
  <li>redux, react-redux, redux-thunk, and redux-devtools-extension</li>
  <li>react-router-dom</li>
  <li>axios</li>
  <li>uuid</li>
  <li>node-sass</li>
  <li>dev dependencies: enzyme, redux-mock-store, and axios-mock-adapter</li>
</ul>

<p>A typical component folder structure is included, as well as a Layout container and Header, Nav, Footer, SampleForm, and SampleApiCall components. Routing is set up to include a 404 error page.</p>

<p>I set up the redux store with separate action and types files, as well as a rootReducer using combineReducers and simple proof-of-concept actions and reducers. The Sample Form page simply demonstrates that Redux is working properly with react-router. The Sample API Call page demonstrates an asynchronous API call using thunk and axios.</p>

<p>Unit and integration tests are included as a starting point.</p>

<p>uuid is included because JSX element ids need to be unique.</p>
