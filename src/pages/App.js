import React from 'react';
import { Input } from 'components/form/input';
import { TextArea } from 'components/form/text-area';
import { Selector } from 'components/form/selector';
import { Dropdown } from 'components/form/dropdown';
import { Select, CreatableSelect } from 'components/form/select';
import { SearchBar } from 'components/form/searchbar';
import { Link } from 'components/form/link';
import { FileBrowser } from 'components/form/file-browser';
import { Checkbox, Form } from 'semantic-ui-react';
import { Button } from 'components/form/button';

// Graphical part

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form />
    </div>
  );
}

export default App;
