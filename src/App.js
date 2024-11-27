import VideoPlayer from "./components/VideoPlayer";
import Comments from "./components/Comments";
import Header from "./components/Header";
import { MainContainer } from "./styledComponents";

function App() {
    return (
        <>
            <MainContainer>
                <Header />
                <VideoPlayer />
                <Comments />
            </MainContainer>
        </>
    )
}

export default App