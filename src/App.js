import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DynamicTable from "./dynamic-table/DynamicTable";

function App() {
 // render(){ //was { instead of ;. Threw error
  return (
    <DynamicTable />
  );
}
export default App;
