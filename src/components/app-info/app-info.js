import './app-info.css';

const AppInfo = ({employers,increased}) =>{
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании AbramovCorp</h1>
            <h2>Общее число сотрудников:{employers} </h2>
            <h2>Премию получат:{increased} </h2>
        </div>
    );
} 
export default AppInfo;