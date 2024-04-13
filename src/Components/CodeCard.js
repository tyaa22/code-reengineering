import React from "react";
import {CodeBlock, dracula} from "react-code-blocks";

const CodeCard = ({type}) => {
    return (
        <>
            <div className="code-section">
                <p>Contoh dari {type.title} :</p>
                <p>Before: </p>
                <CodeBlock text={type.codebefore}
                    theme={dracula}
                    showLineNumbers= {true}
                />

                <p>After: </p>
                <CodeBlock text={type.codeafter}
                    theme={dracula}
                    showLineNumbers= {true}
                />
            </div>
        </>
    );
}

export default CodeCard;