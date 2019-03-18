export default {
    // 查询
    Query: {
        posts: () => {
            return 'Google';
        }
    },
    // 修改
    Mutation: {
        deletePost: (id) => {
            return { id: 1, text: 'google' };
        }
    }
}