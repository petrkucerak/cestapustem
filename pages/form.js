import Layout from "../components/layout";
import Head from 'next/head'
import Container from "../components/container";
import FormLayout from "../components/form-layout";

export default function Form() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Formulář pro export písní</title>
                </Head>
                <Container>
                    <FormLayout />
                </Container>
            </Layout>
        </>
    )
}