import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { decrease, incriment } from "./actions";


function App(props) {
  const {count} = props.counterReducer
  return (
    <div className="App">
      <header className="App-header">
      
      <BrowserRouter>
      <Switch>
        <Route path="/" render={()=>{
          return <div>
            <h1>{count} clicks</h1>
            <button onClick={(dispatch)=>{
              props.dispatch(incriment(count))
            }}>increase</button>

<button onClick={(dispatch)=>{
              props.dispatch(decrease(count))
            }}>decrease</button>

            
            </div>
        }}></Route>
        
      </Switch>
      </BrowserRouter>
     
      
      </header>
    </div>
  );
}


const mapToState = (state) =>{
  return {
      counterReducer: state.counterReducer
    
  }
}

export default connect(mapToState)(App);
