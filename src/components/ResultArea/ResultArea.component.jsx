import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import editorContext from "../../editorContext";

const Container = styled.div`
	width: 50%;
	height: 100%;
	padding: 13px;
	font-family: "Lato", sans-serif;
`;

const Title = styled.div`
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 1em;
	padding: 8px 0;
	border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultContainer = styled.div`
	width: 100%;
	height: 100%;
	border: none;
	font-size: 17px;
`;

export function ResultArea() {
	const { markdownText } = useContext(editorContext);

	return (
		<Container>
			<Title>Converted Text</Title>
			<ResultContainer>
				<ReactMarkdown>{markdownText}</ReactMarkdown>
			</ResultContainer>
		</Container>
	);
}
