// Importieren der React-Bibliothek, um JSX zu verwenden und Komponenten zu definieren.
import React from 'react';

// Importieren des Provider-Wrappers von react-redux, um den Redux-Store verfügbar zu machen.
import { Provider } from 'react-redux';

// Importieren des Redux-Stores, den Sie in einem anderen Teil Ihrer Anwendung definiert haben.
import store from './redux/store';

// Importieren der GameBoard-Komponente, die das Haupt-UI-Element Ihrer Anwendung darstellt.
import GameBoard from './components/GameBoard';

// Importieren der CSS-Datei für allgemeines Styling der App-Komponente.
import './App.css';

// Definition der App-Komponente als funktionale Komponente.
const App = () => {
  // Die Komponente gibt JSX zurück, das den visuellen Teil der Komponente definiert.
  return (
    // Der Provider macht den Redux-Store im gesamten Komponentenbaum verfügbar,
    // der als Kind von Provider eingebettet ist.
    <Provider store={store}>
      <div className="App">
        {/* // GameBoard-Komponente wird hier eingebettet und angezeigt. */}
        <GameBoard />
      </div>
    </Provider>
  );
};

// Exportieren der App-Komponente, damit sie in anderen Teilen der Anwendung verwendet werden kann.
export default App;
