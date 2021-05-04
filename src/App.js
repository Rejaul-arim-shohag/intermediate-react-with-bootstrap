import './App.css';
import { Button } from 'react-bootstrap';
import News from './Componenets/News/News';
import Header from './Componenets/Header/Header';
import TopHeadline from './Componenets/TopHeadline/TopHeadline';
import DivFragment from './Componenets/DivFragmenet/DivFragment';
// import { PieChart } from 'recharts';
import Chart from './Componenets/Chart/Chart';
import ChartPrac from './Componenets/ChartPrac/ChartPrac';

function App() {
  return (
    <div className="App">
        <h2>React Bootstrap</h2>
        <Chart></Chart>
        <ChartPrac></ChartPrac>
        <DivFragment></DivFragment>
        <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
