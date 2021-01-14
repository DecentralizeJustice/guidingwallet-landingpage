const info = [
  {
    title: 'Security',
    questions: [
      {
        q: 'How do I know this wallet wont steal my funds?',
        a: `Our code is open source, but being open source dose not guarantee that software is not malicious.
        We only allow users to use hardware wallets with our wallet as an extra security feature. Our github info
        is in the website footer, but the best thing you can do tp protect your crypto is to put them on an updated hardware wallet.`
      }
    ]
  },
  {
    title: 'Privacy',
    questions: [
      {
        q: 'What information do you store about me?',
        a: `I do not store any identifiable information about you beside your username, which will bes used for our leaderboard and other features.
        My wallet uses tor for most operations and we do not ask for your email. We may log your ip address to stop ddos attacks.
        `
      }
    ]
  }
]
exports.default = info
