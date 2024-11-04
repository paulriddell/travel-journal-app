import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card"
import data from './data'
//https://www.figma.com/design/F680ipWHVzMZb9dO2VKsXw/Travel-Journal-(Copy)?node-id=0-1&node-type=canvas&t=98aqqYXo2srRSaOp-0

//https://scrimba.com/links/travel-journal-japan-image-url
//https://scrimba.com/links/travel-journal-australia-image-url
//https://scrimba.com/links/travel-journal-norway-image-url

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
//Spread in object literals using the ...item notation
export default function App() {

  const cards = data.map((item) => {
    return <Card
      key={item.id}
      {...item} />
  })

  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}
