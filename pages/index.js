import { useRouter } from 'next/router';
import { Card, Col, Row, Button, Text } from '@nextui-org/react';
import Layout from '../components/layout';

export default function() {
    const router = useRouter();  

    return (
        <>
            <Layout>
                <Row justify="center" align="center">
                    <Card css={{ w: "50%", h: "950px", alignItems: "center" }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Text h3 color="white">
                            Start your NFT journey now
                            </Text>
                        </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src="https://nextui.org/images/card-example-6.jpeg"
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                alt="Relaxing app background"
                            />
                        </Card.Body>
                        <Card.Footer
                        isBlurred
                        css={{
                            position: "absolute",
                            bgBlur: "#0f111466",
                            borderTop: "$borderWeights$light solid $gray800",
                            bottom: 0,
                            zIndex: 1,
                        }}
                        >
                        <Row>
                            <Col>
                            <Row justify="flex-end">
                                <Button
                                flat
                                auto
                                rounded
                                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                onPress={() => router.push('/upload')}
                                >
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Getting started
                                    
                                </Text>
                                </Button>
                            </Row>
                            </Col>
                        </Row>
                        </Card.Footer>
                    </Card>
                </Row>
            </Layout>
        </>
    )
}