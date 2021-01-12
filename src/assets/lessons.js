const info = {
  courses: [
    {
      title: 'Crypto Fundamentals',
      goodFor: 'This course lets you know whats important in the crypto space.',
      lessons: [
        ['Why Crypto Is Amazing', 'whyCrypto'],
        ['Which Crypto Is Best', 'whichCrypto'],
        ['How To Store Crypto', 'howtoStore'],
        ['How To Buy Crypto', 'howToBuy']
      ]
    },
    {
      title: 'Your First Crypto',
      goodFor: 'Time to roll up your sleeve and hands on your first crypto.',
      lessons: [
        ['Setup Coinbase'],
        ['Coinbase Link Bank Account'],
        ['Coinbase Deposit Fiat'],
        ['Exodus Wallet Setup'],
        ['Coinbase Withdraw BTC'],
        ['Buy Stickers with BTC']
      ]
    }
  ],
  lessons: [
    ['Introduction to Bitcoin', 'introBTC'],
    ['Why You Need A Hardware Wallet', 'whyHW']
  ]
}
exports.default = info
