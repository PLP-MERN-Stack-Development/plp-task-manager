import React from "react";

const Footer = () => {
    return (
        <footer className="text-center text-sm text-gray-500 py-4 border-t dark:border-gray-700">
            <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;