//Create Root
import { createRoot } from 'react-dom/client';

//importing MainView component from components folder
import { MainView } from './Components/main-view/main-view';

//import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

//Main component
const MindTheatreApp = () => {
    return <MainView />;
};
//find the root of the app
const container = document.querySelector("#root");
const root = createRoot(container);
//tells react to render your app in the root DOM element
root.render(<MindTheatreApp />);