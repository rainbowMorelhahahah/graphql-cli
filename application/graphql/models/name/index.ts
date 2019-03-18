export default {
    // 查询
    Query: {
        hello: (_, { name }) => {
            console.log(name);
            return name;
        }
    }
}