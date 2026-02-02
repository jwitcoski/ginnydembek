const Footer = () => {
    return (
        <footer className="py-6 sm:py-14 flex items-center justify-center">
            <div className="container">
                <div className="flex flex-col gap-1.5 items-center sm:items-start">
                    <div className="relative flex items-center w-full">
                        <div className="flex-grow h-px bg-black" />
                        <div className="mx-4 text-xl font-bold">
                            Ginny Dembek Ph.D.
                        </div>
                        <div className="flex-grow h-px bg-black" />
                    </div>
                    <p className="text-secondary">&copy; Ginny Dembek Ph.D. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
