import React from "react";
import {CodeBlock, atomOneDark, dracula} from "react-code-blocks";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeCard = ({type}) => {
    return (
        <>
            <div className="code-section">
                <p>Contoh dari {type.title} :</p>
                <p>Before: </p>
                <SyntaxHighlighter className="code-block" language="java" style={oneDark} showLineNumbers={true}>
                    {type.codebefore}
                </SyntaxHighlighter>

                <p>After: </p>
                <SyntaxHighlighter className="code-block" language="java" style={oneDark} showLineNumbers={true}>
                    {type.codeafter}
                </SyntaxHighlighter>
            </div>
        </>
    );
}

export default CodeCard;