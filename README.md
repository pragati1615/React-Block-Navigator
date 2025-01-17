# React-Block-Navigator
A React-based application demonstrating state management and DOM manipulation by enabling dynamic movement of a block within a box.

# React Block Mover

A React application that demonstrates a movable block within a container using modern React practices.

## Tech Stack

- React 18
- Node.js
- CSS3

## Features

- Interactive block movement within a container
- Forward and backward movement controls
- Smooth animations
- Responsive design

## Prerequisites

- Node.js (Latest LTS version)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:

```bash
cd block_mover
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open automatically in your default browser at `http://localhost:3000`

## Project Structure

```
react_block_mover/
├── public/
│   ├── index.html         # HTML template
│   └── manifest.json      # Web app manifest
├── src/
│   ├── components/        # React components
│   │   └── BlockMover.js  # Main block mover component
│   ├── App.js            # Root component
│   └── index.js          # Application entry point
└── package.json          # Project dependencies and scripts
```

## Component Usage

The BlockMover component can be used as follows:

```jsx
import BlockMover from './components/BlockMover';

function App() {
  return (
    <div className="App">
      <BlockMover />
    </div>
  );
}
```

## Controls

- **Forward Button**: Moves the block to the next position in clockwise direction
- **Backward Button**: Moves the block to the previous position in counter-clockwise direction

## Block Movement Pattern

The block moves in the following pattern:
1. Top-left corner
2. Top-right corner
3. Bottom-right corner
4. Bottom-left corner

## Development

To modify the block mover:

1. The block's movement logic is in `src/components/BlockMover.js`
2. Styling can be modified in the component's CSS
3. The container size and block size can be adjusted through CSS variables

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from create-react-app

## Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-scripts": "5.0.1"
}
```

