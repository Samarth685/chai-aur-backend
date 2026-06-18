const asyncHandler = (requestHnadler) => async (req, res, next) => {
    Promise.resolve(requestHnadler(req, res, next))
    .catch((err) => next(err));
};




export default asyncHandler;

//try catch wala code
// const asyncHandler2 = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next);
//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             message: err.message || "Something went wrong",
//             success: false,
//         });
//     }
// }