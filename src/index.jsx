import { createRoot } from 'react-dom/client';
//import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
//Main component
const MindTheatreApp = () => {
    return (
        <div className="mind-theatre">
            <div>Good Morning</div>
        </div>
    );
};
//find the root of the app
const container = document.querySelector("#root");
const root = createRoot(container);
//tells react to render your app in the root DOM element
root.render(<MindTheatreApp />);