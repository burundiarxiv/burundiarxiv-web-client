import { AutoComplete, Text, Link } from '@geist-ui/react';
import { DocumentHead, Container } from 'components';
import { Fragment } from 'react';

export const HomeView = () => {
    return (
        <Fragment>
            <DocumentHead />
            <Container>
                <Text style={{ textAlign: 'center', margin: '30px 0' }} h1>
                    Burundiarxiv
                </Text>
                <AutoComplete
                    searching={false}
                    placeholder="Enter here"
                    width="100%"
                    size="large"
                >
                    <AutoComplete.Searching>
                        <span style={{ color: 'red' }}>waiting...</span>
                    </AutoComplete.Searching>
                </AutoComplete>

                <Text h2>Categories</Text>
                <div>
                    <Text h4>Revolution</Text>
                    <Text>
                        <Link href="#" block>
                            The Evil Rabbit Jumped over the Fence.
                        </Link>
                    </Text>

                    <Text>
                        <Link href="#" block>
                            The Evil Rabbit Jumped over the Fence.
                        </Link>
                    </Text>

                    <Text>
                        <Link href="#" block onClick={() => alert('Hello')}>
                            The Evil Rabbit Jumped over the Fence.
                        </Link>
                    </Text>
                </div>

                <div>
                    <Text h4>Revolution</Text>
                    <Text>
                        <Link href="#" block>
                            The Evil Rabbit Jumped over the Fence.
                        </Link>
                    </Text>

                    <Text>
                        <Link href="#" block>
                            The Evil Rabbit Jumped over the Fence.
                        </Link>
                    </Text>

                    <Text>
                        <Link href="#" block onClick={() => alert('Hello')}>
                            The Evil Rabbit Jumped over the Fence.
                        </Link>
                    </Text>
                </div>
            </Container>
        </Fragment>
    );
};
