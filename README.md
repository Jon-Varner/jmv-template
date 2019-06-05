<h1>Jon Varner's custom template</h1>

<p>I put this together so I can quickly spin up a new React Web project with redux, react-router, axios, yup, and sass ready to go, as well as a very basic website layout. Bootstrap is not included and styling is minimal.</p>

<p>Just clone this project, rename your folder, then run <code>npm install</code>.

<p>I began with create-react-app, then added the following:</p>

<ul>
  <li>redux, react-redux, redux-saga, redux-devtools-extension, and redux-saga-devtools</li>
  <li>react-router-dom</li>
  <li>axios</li>
  <li>formik</li>
  <li>yup</li>  
  <li>node-sass</li>
  <li>uuid</li>
  <li>dev dependencies: react-testing-library, jest-dom, redux-mock-store, and axios-mock-adapter</li>
</ul>

<p>A typical component folder structure is included, with Header, Nav, Footer, SampleForm, and SampleApiCall components. Routing is set up to include a 404 error page.</p>

 <p>The Sample Form page uses formik with yup for validation.</p>

<p>The Sample API Call page demonstrates an asynchronous API call using redux-saga and axios.</p>

<p>uuid is included for generating unique IDs.</p>
