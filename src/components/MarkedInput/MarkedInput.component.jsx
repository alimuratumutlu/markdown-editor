import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import editorContext from "../../editorContext";

const Container = styled.div`
	width: 50%;
	height: 100%;
	padding: 13px;
	border-right: 1.5px solid rgba(15, 15, 15, 0.4);
	font-family: "Lato", sans-serif;
`;

const Title = styled.div`
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 1em;
	padding: 8px 0px;
	border-bottom: 1px solid rgba(15, 15, 15, 0.4);
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 100%;
	resize: none;
	border: none;
	outline: none;
	font-size: 17px;
`;

const initialMarkdownText = `### How to use the Markdown Editor:

- Use \`#\` for headings. For example: \`# Heading 1\`, \`## Heading 2\`.
- Use \`*\` or \`-\` for bullet points.
- Use \`**bold**\` for **bold** text and \`*italic*\` for *italic* text.
- Use \`[link text](url)\` to create links.
- Use \`\`\`code\`\`\` for code blocks.
`;

export function MarkedInput() {
	const { markdownText, setMarkdownText } = useContext(editorContext);

	const handleChange = (e) => {
		const newValue = e.currentTarget.value;
		setMarkdownText(newValue);
	};

	useEffect(() => {
		setMarkdownText(initialMarkdownText);
	}, [setMarkdownText]);

	return (
		<Container>
			<Title>Markdown Text</Title>
			<TextArea value={markdownText} onChange={handleChange} />
		</Container>
	);
}
