import { Fragment, useState } from 'react';
import {
    AutoComplete,
    Text,
    Link,
    Divider,
    Modal,
    Button,
} from '@geist-ui/react';
import { DocumentHead, Container } from 'components';
import { datasets } from 'mock/datasets';

export const HomeView = () => {
    const data = datasets;
    const [modalState, setModalState] = useState(false);
    const [path, setPath] = useState('');
    return (
        <Fragment>
            <DocumentHead />
            <Container>
                <Text className="logo" h1>
                    Burundiarxiv
                </Text>
                <AutoComplete
                    searching={false}
                    placeholder="Search data here"
                    width="100%"
                    size="large"
                >
                    <AutoComplete.Searching>
                        <span style={{ color: 'red' }}>waiting...</span>
                    </AutoComplete.Searching>
                </AutoComplete>

                <Text h2 style={{ margin: '30px 0', textAlign: 'center' }}>
                    Categories
                </Text>

                <div className="categories">
                    {data.map(({ category_name, data }, i) => (
                        <div className="category" key={i}>
                            <Text h4>{category_name}</Text>
                            {data.map(({ name, path }) => (
                                <Text
                                    onClick={() => {
                                        setModalState(true);
                                        setPath(path);
                                    }}
                                >
                                    <Link href="#" block>
                                        {name}
                                    </Link>
                                </Text>
                            ))}

                            <Divider />
                        </div>
                    ))}
                </div>

                <Modal open={modalState} onClose={() => setModalState(false)}>
                    <Modal.Title>Download data in:</Modal.Title>
                    <Modal.Content style={{ textAlign: 'center' }}>
                        <Button auto type="success" size="small">
                            <Link href={path}>CSV</Link>
                        </Button>
                    </Modal.Content>
                </Modal>
            </Container>
        </Fragment>
    );
};
