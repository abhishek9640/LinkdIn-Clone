import { useNavigate } from 'react-router-dom';

let instanse = useNavigate();

export const navigate = (param) => {
    instanse(param);
}