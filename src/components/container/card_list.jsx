//Custom Hook Cards
import { useCards } from '../../hooks/useCards';
//Importamos el css de las card 
import '../Card/Card.css';
import CardComponent from '../Card/CardComponent';



const CardListComponent = () => {
 
    const {cards,loading} = useCards();

    
    const Cards = () =>{ 
        return (
        <div className="body">            
            
            { cards.map((card, index) => {
                return (
                    <CardComponent 
                        key={index} 
                        card={card}
                        >
                    </CardComponent>
                    )
                }
            )} 
        </div>
        )
    }

    let cardsTable;
    if(cards.length>0){
        cardsTable = <Cards></Cards>
    }else{
        cardsTable = (
        <div>
        <h2>Ther are no projects to show</h2>
        <h2>Please, create one</h2>
        </div>
        
        )
    }
    
    return (
        <div>
             {loading ? (<p className="loading">Loading projects...</p>) : cardsTable}
        </div>

    );
};



export default CardListComponent;
