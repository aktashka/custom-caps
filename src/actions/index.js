const capsRequested = () => ({
    type: 'CAPS_REQUESTED'
})

const capsLoaded = (caps) => ({
    type: 'CAPS_LOADED',
    payload: caps,
}) 

const capsError = () => ({
    type: 'CAPS_ERROR'
})

const fetchCaps = (dispatch, capsService) => {
    dispatch(capsRequested())
            capsService.getAllCaps().then(caps => {
            dispatch(capsLoaded(caps))
        }).catch(err => {
            dispatch(capsError())
    })
}

export {fetchCaps}