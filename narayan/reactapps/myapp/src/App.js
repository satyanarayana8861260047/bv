import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import ComponentX from './componentX';

function App() {
    return ( 
        <div className = "App">
        
        <h1> this is my first react app </h1>
        <h2>welcome</h2>
        <MyComponent/>
        <MyComponent/>
        <MyComponent/>
        <ComponentX/>
        <ComponentX/>
        <ComponentX/>


        </div>

    );
}
export default App;