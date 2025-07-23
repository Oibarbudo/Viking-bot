const venom = require('venom-bot');

venom
  .create({
    session: 'viking-session',
    multidevice: true
  })
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    if (!message.isGroupMsg) return;

    const body = message.body.toLowerCase();

    if (body === '!marca') {
      client.sendText(message.from, '@everyone').then(() => {
        console.log('Mensagem !marca enviada');
      });
    } else if (body === '!sinal') {
      const sinalMsg = 'Sinal na área! É hora de operar e garantir aquele lucro! 🚀';
      client.sendText(message.from, sinalMsg);
    } else if (body === '!live') {
      const liveMsg = '🎥 Viking AO VIVO em 10 minutos! Chega junto e aprende a lucrar! 🤑🤑';
      client.sendText(message.from, liveMsg);
    }
  });
}
