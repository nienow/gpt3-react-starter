import {useState} from "react";

const parseOutput = (output) => {
  const rStart = output.indexOf('Republican:');
  const dStart = output.indexOf('Democrat:');
  return {r: output.substring(rStart + 12, dStart), d: output.substring(dStart + 10)};
};

const IndexPage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<{ r: string, d: string }>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = async () => {
    if (!isGenerating) {
      setOutput(null);
      setIsGenerating(true);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({input}),
      });
      const data = await response.json();
      setOutput(parseOutput(data.output.text));
      setIsGenerating(false);
    }
  }

  const Output = () => {
    if (output) {
      return <div>
        <h3>Republican</h3>
        <div>{output.r}</div>
        <h3>Democrat</h3>
        <div>{output.d}</div>
      </div>
    }
  };

  return (
    <div className="main-content">
      <h1>AI Political Debate</h1>
      <h2>Ask a question. Get an answer from a Republican and a Democrat.
        Without media bias.
      </h2>
      <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="ask question here...">
      </textarea>
      </div>
      <div>
        <button onClick={generate}>{isGenerating ? 'generating...' : 'Submit'}</button>
      </div>

      <Output></Output>
    </div>
  );
}

export default IndexPage
