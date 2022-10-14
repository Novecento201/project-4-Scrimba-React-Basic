import data from "../data"
import Card from "./Card"

const Main = () => {
    const cards = data.map(card => {
        return (
            <Card 
                key = {card.id}
                {...card}
                />
    )})
    return ( 
        <div className="main">
            {cards}
        </div>
     );
}
 
export default Main;
