import {atom} from 'recoil'


interface Store {
    value: number,
    title: string
  }
 export default atom<Store>({
    key: 'globaluserid',
    default: { value: 1, title: '' },

  });