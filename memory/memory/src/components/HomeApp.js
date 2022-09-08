import {useEffect, useState, useRef} from 'react';

function HomeApp() {
   // colors array 
   const colorsSix = [
    {
        id: 1,
        name: 'red',
    },
    {
        id: 2,
        name: 'blue',
    },
    {
        id: 3,
        name: 'green',
    },
    {
        id: 4,
        name: 'yellow',
    },
    {
        id: 5,
        name: 'orange',
    },
    {
        id: 6,
        name: 'purple',
    }];

    // double array 
    const [colors, setColors] = useState([]);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    // array chose cards id 
    const [cardsChosenIds, setCardsChosenIds] = useState([])

    // array chose cards 
    const [cardsChosen, setCardsChosen] = useState([])

    //   card selected 
    const [openCards, setOpenCards] = useState([])

    //   color cards 
    const whiteCard = "white"

    // timer 
    const [seconds, setSeconds] = useState(60);
    const time = useRef();
    const [showElement,setShowElement] = useState(false)

    // show div if you win 
    const [showWin,setShowWin] = useState(false)

    // show div if you match 
    const [showMatch,setShowMatch] = useState(false)

    // show card back and front 
    const [showCard, setShowCard] = useState(true)

    // show cards for 3 seconds 
    const [showCardTrheeSeconds, setShowCardTrheeSeconds] = useState(true)

    // create double array and shuffle 
    function createCardBoard() {
    const cardsGenerated = colorsSix.concat(...colorsSix)
    const shuffledArray = shuffleArray(cardsGenerated)
    setColors(shuffledArray)
    }

    //  flip cards
    function flipColors(colors, id) {
        if (cardsChosenIds.length === 1 && cardsChosenIds[0] === id) {
            return
        }
        if(cardsChosen.length < 2){
            setShowCard(false)
            setCardsChosen(cardsChosen => cardsChosen.concat(colors))
            setCardsChosenIds(cardsChosenIds => cardsChosenIds.concat(id))
            if(cardsChosen.length === 1){
            if(cardsChosen[0].name === colors.name ){
                setOpenCards(openCards => openCards.concat(cardsChosen[0].name))
                console.log(openCards)
                setShowMatch(true)
                setTimeout(()=>{
                    setShowMatch(false)
                }, 2000)
            }
            setTimeout(()=>{
                setCardsChosenIds([])
                setCardsChosen([])
            }, 400)
            } 
        }
        // console.log(openCards)
    }

    // set id with color 
    function isCardChosen(colors, id) {
        return cardsChosenIds.includes(id) || openCards.includes(colors)
    }

    // shuffle colors function 
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        // console.log(array)
        return array
    }
    
    // start again 
    function startAgain() {
        setCardsChosenIds([])
        setCardsChosen([])
        setOpenCards([])
        createCardBoard()
        setShowElement(false);
        setShowCardTrheeSeconds(true)
        setSeconds(60)
        setTimeout(()=>{
            setShowCardTrheeSeconds(false)
            setTimeout(()=>{
                setColors([])
            }, 59000)
        }, 1000);
    }
  
    // timer 60 seconds
    useEffect(() => {
        if (seconds > 0) {
             time.current = setTimeout(() => setSeconds(seconds - 1), 1000);
        }
        if(seconds === 0){
            setShowElement(true);
            
        }
    });
    useEffect(() => {
        if(cardsChosen.length < 2){
            if (openCards.length === 6) {
                clearTimeout(time.current);
                setSeconds('');
                setColors([])
                setShowWin(true)
            }
        }
    }, [seconds]);

    // print board and colors for 3 seconds
    useEffect(() => {
        createCardBoard()
        setTimeout(()=>{
            setShowCardTrheeSeconds(false)
            setTimeout(()=>{
                setColors([])
            }, 59000)
        }, 1000);
    },[])
    
    return (
        <div className="cards-container">
            <section className='griglia'>
                {/* print card colors random  */}
                {colors.map((color, id) => (
                <div  key={id} className='card-container '>
                    {/* show card for 3 seconds  */}
                    <div className='cardMove'>
                    {showCardTrheeSeconds ? (
                    <div onClick={() => flipColors (color, id)} style={{backgroundColor: isCardChosen(color.name, id) ? color.name : color.name }}  className='showTree back card' >
                    </div>) : null}
                     {/* front card   */}
                    {showCard ? (
                    <div onClick={() => flipColors (color, id)} style={{backgroundColor: whiteCard}}  className='front card '>
                        <h2 style={{color: isCardChosen(color.name, id) ? color.name : '#66C1EE' }}>{numbers[id]}
                        </h2>
                    </div>
                    ) : (
                    // back card 
                    <div onClick={() => flipColors (color, id)} style={{backgroundColor: isCardChosen(color.name, id) ? color.name : whiteCard }}  className='back card' >
                        <h2 style={{color: isCardChosen(color.name, id) ? color.name : '#66C1EE' }}>{numbers[id]}
                        </h2>
                    </div>
                    )}
                    </div>
                    {showMatch ? (
                    <div  className='containerMatch'>
                        <div className="containerConfetti">
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                        </div>
                        <div className='containerCardMatch'>
                            <h2>Match Perfetto!</h2>
                            <div className='cardMatch' style={{backgroundColor: openCards[id]}}>
                            </div>
                        </div>
                        <div onClick={()=> setShowMatch(false)} className='cardMatchContinua'>
                            <h2>continua</h2>
                            <div className='continuaBackground'></div>
                        </div>
                    </div>) : null}
                </div>
                ))}
                {/* coundown  timer*/}
                <div className="coundown">
                    <h1>{seconds}</h1>
                </div>
                {/* show div with tempo scaduto!  */}
                <div className='containerElementTimer'>
                    {/* game over  */}
                    {showElement ? (
                    <div className='elementTimer'>
                        <h1>Tempo scaduto!</h1>
                        <h2 onClick={startAgain} >Riprova</h2>
                    </div>)
                    :(<></>)
                    } 
                    {/* show div if you win */}
                    {showWin ? (
                    <div className='elementTimer'>
                        <div className="containerConfetti">
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                            <div className="confetti"></div>
                        </div>
                        <h1>Grazie per aver giocato!</h1>
                    </div>)
                    :(<></>)
                    } 
                </div> 
            </section>
        </div>
    );
}

export default HomeApp