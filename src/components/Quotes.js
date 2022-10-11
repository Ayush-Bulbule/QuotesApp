import { FaQuoteLeft } from 'react-icons/fa'
import { useEffect, useState } from 'react';

function Quotes() {

  const [quotesData, setQuotesData] = useState([]);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    getQuote();
    setTimeout(() => {
      console.log("hii");
      getNewQuote();
    }, 8000);
  }, [])

  const  getQuote = async () => {

    const response = await fetch("https://type.fit/api/quotes")
    const data = await response.json()
    setQuotesData(data)
    setQuote(data[Math.floor(Math.random() * data.length)].text)
    setAuthor(data[Math.floor(Math.random() * data.length)].author)
  }

  const getNewQuote = () => {
    console.log(quotesData.length);
    if (quotesData) {
      let randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
      console.log("hi");
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author);
    }
  }



  return (
    <div className="App bg-slate-900 h-screen flex items-center justify-center ">
      <div className="card-container bg-sky-500 rounded-md h-2/3 w-2/4 flex items-center justify-center">
        <div className="card-container flex justify-between  bg-gray-100 rounded-md h-2/3 w-3/5 flex-col shadow-lg">
          <div className="box pt-8 px-8 overflow-hidden">
            <FaQuoteLeft className='text-start text-4xl text-gray-400' />
            <h5 className='text-gray-800 text-center text-xl mt-6' style={{ fontFamily: '"Satisfy", cursive' }}>
              {(quote === null) ? "Quote is Here!" : quote}
            </h5>
            <p className="text-sm text-gray-600 text-right mt-4" style={{ fontFamily: '"Poppins",sans-seri' }}>{(author === null) ? "Ayush Bulbule" : author}</p>
          </div>
          <p onClick={() => { getNewQuote(); }} className='bg-purple-700 cursor-pointer w-full text-center p-2 text-white font-medium '>New Quote</p>
        </div>
      </div>

    </div>
  );
}

export default Quotes;
