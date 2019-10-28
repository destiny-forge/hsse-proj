const elasticsearch = require('elasticsearch');

const host = process.env.ES_HOST;
const port = process.env.ES_PORT;

const index = 'machealthforum';
const type = 'hsearticles';

const client = new elasticsearch.Client({ host: { host, port } });

async function checkConection() {
  let isConnected = false;
  while (!isConnected) {
    console.log('Connecting to ES');
    try {
      const health = await client.cluster.health({});
      console.log(health);
      isConnected = true;
    } catch (err) {
      console.log('Connection Failed, Retrying...', err);
    }
  }
}

async function resetIndex() {
  if (await client.indices.exists({ index })) {
    await client.indices.delete({ index });
  }

  await client.indices.create({ index });
  await putHSEArticleMapping();
}

async function putHSEArticleMapping() {
  const schema = {
    title: { type: 'text' },
    author: { type: 'text' },
    keywords: { type: 'text' },
    abstract: { type: 'text' },
  };

  return client.indices.putMapping({ index, type, body: { properties: schema } });
}

module.exports = {
  client,
  index,
  type,
  checkConection,
  resetIndex,
};
