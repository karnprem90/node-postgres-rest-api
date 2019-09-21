
export const applyMiddleware = (middlewareWrappers, app) => {
    for (const wrapper of middlewareWrappers ) {
        wrapper(app);
    }
};