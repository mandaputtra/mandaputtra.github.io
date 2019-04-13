const fs = require('fs')
const matter = require('gray-matter')
// eslint-disable-next-line no-path-concat
const files = fs.readdirSync(__dirname + '/content/post')

console.time('⏲')

const posts = []

for (const i in files) {
  // eslint-disable-next-line no-path-concat
  const str = fs.readFileSync(__dirname + `/content/post/${files[i]}`, 'utf8')
  const post = matter(str).data
  posts.push(post)
}

//  to JSON
const data = JSON.stringify(posts)
fs.writeFileSync('blogposts.json', data)

console.timeEnd('⏲')
