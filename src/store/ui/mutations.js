export function someMutation (/* state */) {
}



export function changeBodyClass (state,data) {
    state.bodyClass = data
    document.body.className = data
}

export function changeLinkActive (state,data) {
    state.linkActive = data
}


export function changeUserAuth (state,data) {
    state.userAuth = data
}