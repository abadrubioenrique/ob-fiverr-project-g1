//Custom Hook Cards
import { useCards } from '../../hooks/useCards';
//Importamos el css de las card 
import '../Card/Card.css';
import CardComponent from '../Card/CardComponent';



const CardListComponent = () => {
   /*  const defaultCard1 = new Card('Example','username','Description1',10.99,5,
    ['https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png']);
    const defaultCard2 = new Card('Example','username','Description2',8.99,4,
    ['https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png']);
    const defaultCard3 = new Card('Example','username','Description3',20.99,3,
    ['https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png']);
    const defaultCard4 = new Card('Example','username','Description4',20.99,3,
    ['https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png']);
    const defaultCard5 = new Card('Example','username','Description5',20.99,3,
    []);
 */
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
        <h2>Ther are no cards to show</h2>
        <h2>Please, create one</h2>
        </div>
        
        )
    }
    
    return (
        <div>
             {loading ? (<p className="loading">Loading cards...</p>) : cardsTable}
        </div>

    );
};



export default CardListComponent;
