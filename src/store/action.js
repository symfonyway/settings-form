export function actionGeneration(type, text) {
    return {type: type, payload: text};
}

export default { actionGeneration }