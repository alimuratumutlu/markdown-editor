import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { MarkedInput } from "./components/MarkedInput/MarkedInput.component";
import { ResultArea } from "./components/ResultArea/ResultArea.component";
import EditorContext from "./editorContext";

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.div`
	font-size: 2rem;
	font-weight: bold;
	font-family: "Lato", sans-serif;
	color: #333;
	margin-bottom: 1rem;
`;

const EditorContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

function App() {
	const [markdownText, setMarkdownText] = useState("");
	const contextValue = { markdownText, setMarkdownText };

	return (
		<EditorContext.Provider value={contextValue}>
			<AppContainer>
				<Title>Markdown Editor</Title>

				<EditorContainer>
					<MarkedInput />
					<ResultArea />
				</EditorContainer>
			</AppContainer>
		</EditorContext.Provider>
	);
}

export default App;
