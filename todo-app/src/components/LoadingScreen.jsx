import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(interval);
                    setLoadingComplete(true);
                    setTimeout(onLoadingComplete, 1000); // Move out the logo after 1 second
                    return 100;
                }
                const diff = Math.random() * 20;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1, transform: 'translateY(0)' }}
            animate={{ opacity: loadingComplete ? 0 : 1, transform: loadingComplete ? 'translateY(-90%)' : 'translateY(0)' }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000,
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                <motion.img 
                    src={logo} 
                    alt="Loading Logo" 
                    height="250px" 
                    animate={loadingComplete ? {} : {
                        x: [0, -2, 2, -2, 2, 0], // Keyframes for vibration effect
                    }}
                    transition={loadingComplete ? {} : {
                        duration: 0.2, // Duration for one cycle of the vibration
                        repeat: Infinity, // Repeat the vibration effect indefinitely
                        repeatType: 'loop',
                    }}
                />
            </Box>
            <Box width="15%" mt={2}>
                <LinearProgress variant="determinate" value={progress} sx={{
                    bgcolor: '#c9faf2',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#00b8a9', // custom color for the filled area
                    },
                }} />
                <Typography variant="body2" sx={{ mt: 1, textAlign: 'center', color:'#00b8a9', fontWeight:'bold' }}>
                    {`${Math.round(progress)}%`}
                </Typography>
            </Box>
        </motion.div>
    );
};

export default LoadingScreen;
