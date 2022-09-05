export function actionCreator(text, type) {
    return {type: type, payload: text};
}

export default { actionCreator }