import React, { useState } from 'react'

const QuoteGenerator = () => {

    let qoutes = [];

    async function loadQuotes() {
        const response = await fetch('https://type.fit/api/quotes');
        qoutes = await response.json();
    }



    const [quote, setQuote] = useState({
        text: "Whether you think you can or you think you can't, you're right.” ...",
        author: "James",
    });

    const random=()=>{
        const select = qoutes[Math.floor(Math.random()*qoutes.length)]
        setQuote(select);   
    }

    const twitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    };

    loadQuotes();


    return (
        <div className='container d-flex justify-content-center align-items-center h-100 pt-5'>
            <div className="data p-5 rounded-2" style={{backgroundColor:"lightgreen"}}>
                <div className="quote">{quote.text}</div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <i class="fa-solid fa-rotate-right fs-3" onClick={random}></i>
                        <i class="fa-brands fa-x-twitter fs-3 ms-2" onClick={twitter}></i> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteGenerator