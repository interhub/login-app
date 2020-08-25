export default (phone: string=''): string => {
    let res= phone.replace(/\+|\s|\-|\(|\)/g,'')
    if(res.length===11){
        return res
    }
    return ''
}