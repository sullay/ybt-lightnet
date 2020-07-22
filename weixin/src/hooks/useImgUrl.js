import { fileUrl } from '../config/axiosConf'
export function filterImgUrl (img) {
  if (img) {
    return fileUrl + img
  } else {
    return ''
  }
}
