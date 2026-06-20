const errorHandler = (err,req,res,next) => {
    console.log(err.stack);
    console.log(err.code);
    console.log(err.detail);

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        error: err.message || 'Server Error',
    });
};

module.exports = errorHandler;