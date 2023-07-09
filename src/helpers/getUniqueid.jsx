import uuid from 'react-uuid';

export const getUniqeID = () => {
    let id = uuid();

    return id;
};