import styles from '../styles/upload.module.css';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '@nextui-org/react';

import Layout from '../components/layout';

export default function Upload() {
    const [file, setFile] = useState(null);

    const buttonChoose = () => {
        const element = document.getElementById('input-file');
        element.click();
    };

    const handleInputFileChange = async (event) => {
        console.log('event: ', event);
        setFile(event.target.files[0]);
    }

    const buttonSend = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('response: ', response);
        } catch (error) {
            console.log('error: ', error);
        }
    }

    return (
        <>
        <Layout siteTitle='Upload your nft'> 
            <div className={styles.main}>
                <div className={styles.container}>
                    <p className={styles.title}>ipfs courier</p>
                    <div className={styles.buttons}>

                        <Button 
                            // iconRight={<CameraIcon fill="currentColor" />}
                            size="lg"
                            onClick={buttonChoose} 
                            color="success"
                        >
                            <p className={styles.buttonText}>choose file</p>
                        </Button>
                        {file &&
                            <div className={styles.button} onClick={buttonSend}>
                                <p className={styles.buttonText}>send file</p>
                            </div>
                        }
                    </div>
                    <input id="input-file" className={styles.input} type="file" name="file" onChange={handleInputFileChange}/>
                </div>
            </div>
        </Layout>
        </>
    );
}

