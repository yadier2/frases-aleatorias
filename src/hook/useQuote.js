import { useState } from 'react'
let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];
export const useQuote = (quotesData) => {
    const [post, setPost] = useState({ twitter: '', tumblr: '' })
    const [text, setText] = useState({ quote: '', author: '' })
    const [color, setColor] = useState(colors[0])

    const getQuote = () => {

        let randomQuote = quotesData.quotes[
            Math.floor(Math.random() * quotesData.quotes.length)
        ];
        let currentQuote = randomQuote.quote;
        let currentAuthor = randomQuote.author;

        let twitter = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
            encodeURIComponent(`"${currentQuote}" ${currentAuthor}`)

        let tumblr = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
            encodeURIComponent(currentAuthor) + '&content=' + encodeURIComponent(currentQuote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'

        setPost({
            twitter,
            tumblr,
        })
        setText({ quote: randomQuote.quote, author: randomQuote.author })
        let color = Math.floor(Math.random() * colors.length);
        setColor(colors[color])
    }

    return {

        getQuote,
        post,
        text,
        color
    }

}
