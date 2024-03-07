import './chat.css';
import LineGraph from './LineGraph';
import PieChart from './PieGraph';
import RadarChart from './RadarGraph';
import BarGraph from './BarGraph';
import PolarGraph from './PolarGraph';

function Chat() {
  return (
    <div>
        <h1 className="header">Football Statistics</h1>
        <div className="container">
            <div className="row">

                <div className="col-8">
                    <div className="line-graph">
                        <LineGraph />
                    </div>
                </div>

                <div className="col-4">
                    <div className="pie-chart">
                        <PieChart />
                    </div>
                </div>
            </div>
        </div>

        <div className="container three-charts">
            <div className="row">
                <div className="col-4">
                    <RadarChart />
                </div>
                <div className="col-4">
                    <PolarGraph />
                </div>
                <div className="col-4">
                    <BarGraph />
                </div>
            </div>
        </div>
        
       
    </div>
  );
}

export default Chat;
