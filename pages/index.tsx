import {useState} from "react";

const IndexPage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string>(null);
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
      setOutput(data.output.text);
      setIsGenerating(false);
    }
  }

  const Output = () => {
    if (output) {
      return <div>
        {output}
      </div>
    }
  };

  return (
    <div className="main-content">
      <h1>Prayer Generator</h1>
      <h2>Please write me a prayer for...
      </h2>
      <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="">
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
