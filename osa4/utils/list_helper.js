const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce(((acc, obj) => acc + obj.likes), 0)
}

module.exports = {
  dummy,
  totalLikes
}
