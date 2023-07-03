import React from 'react';
import TopHead from '@/components/TopHead';
import Log from '@/components/Login';
import Footer from '@/components/Footer';

const Login = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <TopHead />
            <Log />
            <Footer />
        </main>
    )
}

export default Login;