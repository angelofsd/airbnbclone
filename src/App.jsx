import Card from '../components/Card'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import data from '../data'

// import './App.css'

function App() {
 // <Hero />

 const cards = data.map( card => <Card key={card.id} item={card}/>)

  return (
    <div className="container">
        <Navbar />
        <Hero />
        <section className='cards-list'>
          {cards}
        </section>
        
        
    </div>
)
}

export default App
