const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    console.log('Error:', err.message);
    console.log('Name:', err.name);
    
    if (err.name === 'ValidationError') {
        return res.status(400).json({ 
            error: 'Balioztatze errorea',
            details: err.message 
        });
    }

    res.status(500).json({ 
        error: 'Zerbitzari errorea',
        message: err.message 
    });
};

module.exports = errorHandler;