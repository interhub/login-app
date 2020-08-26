export default (val: string, prev: string): string => {
    const isDelete = prev.length > val.length
    //ADD BLOCK (THIS PHONE)
    if (isDelete) {
        return val
    }
    //FUNC ADD PREV END CHAR
    const addCharPrevEnd = (ch: string) => {
        return [...[val?.slice(0, val?.length - 1), ch, val?.slice(-1)]].join('')
    }
    if (Number(val?.replace(/($\+)|\s|\(|\)|\-/g, '')) || val === '+') {
        if (val.length === 1 && Number(val) || val === '+ 7 (7') {
            return '+ 7 ('
        }
        if (val.length === 9) {
            return addCharPrevEnd(') ')
        }
        if (val.length === 14) {
            return addCharPrevEnd('-')
        }
        if (val.length === 17) {
            return addCharPrevEnd('-')
        }
        if (val === '+' || val === '8') {
            return '+ 7 ('
        }
        if (val.length === 20) {
            return prev
        }
        return val
    }
    // NOTHING END
    return val
}