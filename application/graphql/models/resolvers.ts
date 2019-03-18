import test from './test';
import name from './name';

export default {
    Query: {
        ...test.Query,
        ...name.Query
    },
    Mutation: {
        ...test.Mutation
    }

}