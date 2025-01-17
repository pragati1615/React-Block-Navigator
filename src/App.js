import React from 'react';
import BlockMover from './components/BlockMover';

const App = () => {
    return (
        <div style={{ 
            position: 'relative', 
            height: '100vh',
            backgroundColor: '#ffffff'
        }}>
            <h1 style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'black',
                fontWeight: 'bold',
                margin: 0
            }}>
                Move the Block
            </h1>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}>
                <BlockMover />
            </div>
        </div>
    );
};

export default App;
