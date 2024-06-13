export const pigIt = (a: string): string => {
    return a.split(' ').map(e => {
        if (!e.match(/[a-z]+/ig)) return e;
        const temp = [...e];
        const letter = temp.shift()
        temp.push(letter!, 'ay')
        return temp.join('')
    }).join(' ')
};


// anothor version

export const pigIt2 = (a : string) : string =>  {
  return a.replace(/[a-z]+/ig, x => x.slice(1) + x[0] + "ay")
}