//Create Root
import { createRoot } from 'react-dom/client';

//importing MainView component from components folder
import { MainView } from './Components/main-view/main-view';

//import boostrap css -> changed to scss import

//import index.scss
import "./index.scss";

//Importing Containers
import { Container } from 'react-bootstrap';

//Main component
const MindTheatreApp = () => {
    return (
        <Container>
            <MainView />;
        </Container>

    );
};
//find the root of the app
const container = document.querySelector("#root");
const root = createRoot(container);
//tells react to render your app in the root DOM element
root.render(<MindTheatreApp />);