import {Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const api = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const call = await api.createCompletion({
    model: 'text-davinci-003',
    prompt: `This is a political debate between a Republican and a Democrat. Question: ${req.body.input}`,
    temperature: 0.85,
    max_tokens: 500,
  });

  const output = call.data.choices.pop();

  res.status(200).json({output});
};

export default generateAction;
