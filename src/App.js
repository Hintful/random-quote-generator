import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// window.$ = $;

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [ {"quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"} ],
      index: 0
    };
    this.getNewQuote = this.getNewQuote.bind(this);
    // this.state.quotes.append({"quote":"what", "author":"me"});
  fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(res => res.json()).then((out) => {
  for(let i = 0; i < out["quotes"].length; i++) {
    this.state.quotes.push(out["quotes"][i]);
  }
});
  }
  getNewQuote() {
    setTimeout(() => {
      this.setState(state => (
        {index: Math.floor(Math.random() * state.quotes.length)}
      ));
    }, 1000);
  }
  render() {
    const quoteBoxStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      backgroundColor: 'white',
      color: 'black',
      width: '30%',
      height: 'auto',
      padding: '20px 20px 10px 20px',
      borderRadius: 8
    }
    const quoteStyle = {
      paddingLeft: 20,
      paddingRight: 20,
      flex: 8,
      fontFamily: 'Playfair Display'
    }
    const buttonRowStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1,
      marginBottom: 10 
    }
    const quote = this.state.quotes[this.state.index];
    const twitterIntent = "https://twitter.com/intent/tweet?text=" + quote["quote"] + "&via=quoteMachine";
    return (
      
      <div id="quote-box" style={quoteBoxStyle}>
        <div id="quote" style={quoteStyle}>
          <h2 id="text"><sup><i id="quotation" class="fas fa-quote-left"></i></sup>{quote["quote"]}<sup><i id="quotation" class="fas fa-quote-right"></i></sup></h2>
          <p id="author">- {quote["author"]}</p>
        </div>
        <div style={buttonRowStyle}>
          <a href={twitterIntent} id="tweet-quote">
            <div class="tweet">
              <i class="fab fa-twitter"></i>
            </div>
          </a>
          <div id="new-quote" onClick={this.getNewQuote}><i class="fas fa-sync"></i>
          </div>
          { /* <button id="new-quote" onClick={this.getNewQuote}><i class="fas fa-sync"></i></button> */ }
        </div>
      </div>
    )
  }
}
$(document).ready(function() {
  $("#new-quote").click(function() {
    $("#quote").animate({opacity: '0'}, 1000);
    $("#quote").animate({opacity: '1'}, 1000);
  });
});


// const element = <QuoteBox />;

// ReactDOM.render(element, document.getElementById('root'));

function App() {
  return (
    <div className="App">
        <QuoteBox />
    </div>
  );
}

export default App;
