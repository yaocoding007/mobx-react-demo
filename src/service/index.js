export const getOldTodoList = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            id: +new Date(),
            text: 'old todo'
        })
    }, 3000)
})