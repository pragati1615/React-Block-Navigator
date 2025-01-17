import React, { useState } from 'react';

const BlockMover = () => {
    const [position, setPosition] = useState(0); // 0: top-left, 1: top-right, 2: bottom-right, 3: bottom-left

    const moveForward = () => {
        setPosition((prevPosition) => (prevPosition + 1) % 4);
    };

    const moveBackward = () => {
        setPosition((prevPosition) => (prevPosition - 1 + 4) % 4);
    };

    const getBlockPosition = () => {
        switch (position) {
            case 0: // top-left
                return { top: 0, left: 0 };
            case 1: // top-right
                return { top: 0, left: '250px' };
            case 2: // bottom-right
                return { top: '250px', left: '250px' };
            case 3: // bottom-left
                return { top: '250px', left: 0 };
            default:
                return { top: 0, left: 0 };
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ 
                position: 'relative', 
                width: '300px', 
                height: '300px', 
                border: '2px solid green',
                backgroundColor: '#f5f5f5'
            }}>
                <div style={{
                    position: 'absolute',
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'black',
                    transition: 'all 0.3s ease',
                    ...getBlockPosition()
                }} />
            </div>
            <div style={{ 
                marginLeft: '20px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
            }}>
                <button 
                    onClick={moveForward} 
                    style={{
                        backgroundColor: '#E0F7E9',
                        border: '1px solid #B2D8C6',
                        padding: '10px',
                        marginBottom: '10px',
                        color: 'blue',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        width: '120px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        transition: 'all 0.2s ease'
                    }}
                >
                    Forward
                </button>
                <button 
                    onClick={moveBackward} 
                    style={{
                        backgroundColor: '#E0F2FF',
                        border: '1px solid #B2D8F6',
                        padding: '10px',
                        color: 'blue',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        width: '120px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        transition: 'all 0.2s ease'
                    }}
                >
                    Backward
                </button>
            </div>
        </div>
    );
};

export default BlockMover;
