import React from 'react';

import Lincoln from './components/Lincoln';
import Kenzie from './components/Kenzie';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

    function App() {

      return (
        <div className="App">
        <Card.Container>
          <Kenzie/>
          <Lincoln />
        </Card.Container>

        </div>
          );
        }

        export default App;
