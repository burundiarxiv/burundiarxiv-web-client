import NextHead from 'next/head';

interface DocumentHeadProps {
    title?: string;
}

export const DocumentHead = (props: DocumentHeadProps) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

            <title>Burundiarxiv</title>
        </NextHead>
    );
};
