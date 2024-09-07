import axios from 'axios';

import { getImagesPaginated } from '../constants/urls';
import { loadAbort } from '../utilities';


export const getImages = () => {
    const controller = loadAbort();
    return {
      call: axios.get(`${getImagesPaginated}`, { signal: controller.signal }),
      controller,
    };
};