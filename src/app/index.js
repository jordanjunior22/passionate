/* eslint-disable react-hooks/exhaustive-deps */
// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
    const router = useRouter();

    useEffect(() => {
      // Redirect logic
      router.push('/home');
    }, []);
};

export default IndexPage;
