export const Resume = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-foreground">
                        Resume - <span className="text-primary">Zarar Khan</span>
                    </h1>
                    <div className="flex gap-4">
                        <a
                            href="/"
                            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Back to Home
                        </a>
                        <a
                            href="/Zarar_Khan_Resume.pdf"
                            download="Zarar_Khan_Resume.pdf"
                            className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                        >
                            Download PDF
                        </a>
                    </div>
                </div>

                <div className="flex-1 border border-border rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="/Zarar_Khan_Resume.pdf"
                        className="w-full h-full min-h-[800px]"
                        title="Resume"
                    />
                </div>
            </div>
        </div>
    );
};
