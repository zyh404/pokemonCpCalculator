import todo from '../modules/todo/sagas';

export default function *root() {
    yield [
        ...todo,
    ];
};
