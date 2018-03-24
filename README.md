# react-scepter-redux-app

A universal app container that configures a connection to a redux store and react-router

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![redux-logo](https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png)](https://github.com/reactjs/redux)

[![airbnb-codestyle](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](https://github.com/airbnb/javascript)

[![Build Status](https://travis-ci.org/source4societyorg/react-scepter-redux-app.svg?branch=master)](https://travis-ci.org/source4societyorg/react-scepter-redux-app)

[![codecov](https://codecov.io/gh/source4societyorg/react-scepter-redux-app/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/react-scepter-redux-app)

# Installation

    npm install @source4society/react-scepter-redux-app

or

    yarn add @source4society/react-scepter-redux-app

In your primary application file, whether it is a mobile or web application, pass this component as the primary component with `history` created from an appropriate history object (see [history](https://www.npmjs.com/package/history)) and `MyApp` containing app specific custom logic.

For example, a web application would be setup the following way in app.js:

    const render = () => {
      ReactDOM.render(
        <ScepterReduxApp history={history} MyApp={MyApp} />,
        MOUNT_NODE
      );
    };

A mobile application in App.js

    // @flow
    type Props = {};
    export default class App extends Component<Props> { // eslint-disable-line react/prefer-stateless-function
      render() {
        return (
          <ScepterReduxApp history={history} MyApp={MyApp} />
        );
      }
    }

environment specific components should be injected as props.