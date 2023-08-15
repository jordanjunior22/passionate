/* eslint-disable react-hooks/exhaustive-deps */
// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the home page when the index page is loaded
        router.push('/home');
    }, []);

    return null;
};

export default IndexPage;
