var Counter = React.createClass({
    getInitialState: function() {
        console.log('metoda pokazująca początkowy stan komponentu');
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
     getDefaultProps: function() {
    console.log('metoda, ustawiająca wartości props nieprzekazane do komponentu');
    },

    componentWillMount: function() {
        console.log('metoda wywoływana przed pierwszym uruchomieniem, komponent jest gotowy do zamontowania');
    },

    componentDidMount: function() {
        console.log('metoda wywoływna po pierwszym uruchomieniu, komponent ma już swoją prezentację w DOM, można więc aktualizowac jego stan, wysyłać żądania AJAX itp ');
    },

    componentWillReceiveProps: function() {
        console.log('metoda wywoływana gdy komponent otrzyma nowe właściwości, jako jej parametr przekazywany jest obiekt zawierający nowe propsy');
    },

    shouldComponentUpdate: function() {
        console.log('metoda, zwracająca true albo false, w zależności od tego czy chcemy by komponent się zmieni po otrzymaniu nowych właściwości');
    },

    componentWillUpdate: function() {
        console.log('metoda przygotowywująca komponent do przerenderowania');
    },

    componentDidUpdate : function() {
        console.log('metoda pozwalająca na aktualizowanie stanu komponentu, manipulacje na DOM, zaladowanie zewnętrznych bibliotek');
    },

    componentWillUnmount: function() {
        console.log('metoda usuwająca komponent');
    },
    
    

    render: function() {
        return React.createElement('div', {className: 'container'},
            React.createElement('h2', {}, 'Licznik: ' + this.state.counter),
            React.createElement('button', {className: 'btn btn-lg btn-success', onClick: this.increment}, 'Dodaj'),
            
            
            React.createElement('button', {className: 'btn btn-lg btn-warning', onClick: this.decrement}, 'Odejmij')
        );
    }
});

var element = 
React.createElement('div', {},
    React.createElement(Counter, {}),
     React.createElement(Counter, {}),
    React.createElement(Counter, {})                  
);
ReactDOM.render(element, document.getElementById('app'));