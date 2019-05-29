
import Main from '../components/main.component'
import Form from '../components/form.component';

import data from '../data.json';
export const initialState ={
    main:Main,
    form:Form,
    Data:data
};


export const Reducer = (state = initialState ,action)=>{

                    return state;
};