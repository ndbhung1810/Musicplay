import { useEffect, useState } from 'react';
import Layout from 'components/layout';
import Main from 'components/main';
import MusicRaw from 'components/playList/musicPlay';
import PlayList from 'components/playList';
import './App.css';

function App() {
  const [title] = useState('TEST APP');
  return (
    <div className="App">
      <Layout title={title}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '30px',
          }}
        >
          <PlayList />
        </div>
       
      </Layout>
    </div>
  );
}

export default App;
