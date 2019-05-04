import dataJson from '../blogposts.json'

export const state = () => ({
  posts: [],
  post: {}
})

export const mutations = {
  updatePosts(state, postsJSON) {
    const reverse = postsJSON.sort((a, b) => (a.id > b.id ? 1 : -1))
    state.posts = reverse
  },
  updatePost(state, { post }) {
    state.post = post
  }
}

export const actions = {
  getPost({ commit, state }, slug) {
    const post = state.posts.find(post => {
      return post.slug === slug
    })
    commit('updatePost', { post: post })
  },
  getListOfPost({ commit, state }) {
    if (state.posts.length === 0) commit('updatePosts', dataJson)
  }
}
