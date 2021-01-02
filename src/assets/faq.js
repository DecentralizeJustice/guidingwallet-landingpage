const info = [
  {
    title: 'Security',
    questions: [
      {
        q: 'How do I know this wallet wont steal my funds?',
        a: `Our code is open source, but being open source dose not guarantee that software is not malicious.
        We only allow users to use hardware wallets with our wallet as an extra security feature. Our github info
        is in the website footer.`
      }
    ]
  },
  {
    title: 'Privacy',
    questions: [
      {
        q: 'What information do you store about me?',
        a: `I do not store any identifiable information about you beside your username.
        My wallet uses tor for most operations and we do not ask for your email.
        `
      }
    ]
  }
]
exports.default = info
