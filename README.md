# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# dgalalimpiaduria
Web Limpiaduria y Planchaduria

#### ################################ GITHUB, GIT ################################################
1. Crear repositorio en GitHub
2. git clone git@github.com:integoo/dgalalimpiaduria (Tiene que ser ssh)
3. cd dgalalimpiaduria
    git status
    git remote -v
    git add .
    git commit -m "first commit"
    git push
#### ############################### FUNCTION  COMPONENT PARENTE CHILD ###########################
### Parent Function
import React, { useState } from 'react';

import InputComponent from './InputComponent';
import InputComponentText from './InputComponentText';


function Main(){
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    return (
        <React.Fragment>
            <h1>Hello World!!!</h1>
            {count}
            <br/>
            {text}
            <InputComponent  onChangeCount={(count) => setCount(count)} />
            <InputComponentText onChangeCount={(text) => setText(text)} />
        </React.Fragment>
    )
}

export default Main;

### Child Function Component (button with numbers)
import React, { useState } from 'react';

function InputComponent(props){
    const [count, setCount] = useState(0)

    props.onChangeCount(count)

    return (
        <div style={{ width:"280px", border:"5px solid red" }}>
            <h1>Input Component</h1>
            {/* <input type="text" value={count} onChange={e => setCount(parseInt(e.target.value)) } /> */}
            <input type="text" value={count} />
            <button onClick={() => setCount(count + 1)} >Click Me </button>
        </div>
    )
}

export default InputComponent;

### Child Function Component (Text Event)
import React, { useState } from 'react';

function InputComponentText(props){
    const [count, setCount] = useState("")

    props.onChangeCount(count)

    return (
        <div style={{ width:"280px", border:"5px solid red" }}>
            <h1>Input Text Component</h1>
            <input type="text" value={count} onChange={e => setCount(e.target.value) } />
        </div>
    )
}

export default InputComponentText;

#### ###########################################################################################