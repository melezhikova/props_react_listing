import './App.css';
import Listing from './Listing';
import data from './data';
import Offer from './Offer';

const items = data.map (item => {
  return new Offer(item)
})

function App() {
  return (
    <Listing items={items} />
  );
}

export default App;
