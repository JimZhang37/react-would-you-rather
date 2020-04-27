import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect } from 'react-redux'
function PrivateRoute({ children, authedUser,path,  ...rest }) {
    const id = rest && rest.computedMatch && rest.computedMatch.params && rest.computedMatch.params.id ? rest.computedMatch.params.id: ''
    
    const newChildren = React.Children.map(children, child => React.cloneElement(child,{id}))
    // console.log('new children', newChildren, 'param', match?match.param.id:'')
    return (
      <Route
        {...rest}
        render={({ location,match }) =>
        authedUser ? (
            newChildren
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

function mapStateToProps({ authedUser }, props) {
    // console.log("authedUser is: ", authedUser)
    // console.log("PrivateRoute: ", props)
    // const {id} = match?match.param:{id:''}
    return { authedUser }
}
export default connect(mapStateToProps)(PrivateRoute);